// Vérifie les invariants du dépôt qui cassent en silence, en complément de
// « plugin validate » lancé par le workflow. Exécutable en local avec
// « node .github/scripts/validate.mjs » depuis la racine du dépôt.
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const erreurs = [];
const signale = (fichier, ligne, message) =>
  erreurs.push(ligne ? `${fichier}:${ligne} ${message}` : `${fichier} ${message}`);

const lire = (fichier) => readFileSync(fichier, 'utf8');

// Prose suivie par les contrôles typographiques et de liens. CLAUDE.md est
// ignoré par git et LICENSE est un texte anglais figé, donc ni l'un ni l'autre
// n'entrent dans le périmètre.
const fichiersProse = ['README.md', 'CHANGELOG.md'];
const collecteMarkdown = (dossier) => {
  for (const entree of readdirSync(dossier, { withFileTypes: true })) {
    const chemin = path.join(dossier, entree.name);
    if (entree.isDirectory()) collecteMarkdown(chemin);
    else if (entree.name.endsWith('.md')) fichiersProse.push(chemin);
  }
};
collecteMarkdown('skills');

// 1. Frontmatter de chaque SKILL.md : name égal au dossier, description
// présente et sous 300 caractères. Le runtime ne lit que ces deux champs.
const descriptions = {};
for (const nomSkill of readdirSync('skills')) {
  const dossier = path.join('skills', nomSkill);
  if (!statSync(dossier).isDirectory()) continue;
  const fichier = path.join(dossier, 'SKILL.md');
  if (!existsSync(fichier)) {
    signale(dossier, null, 'SKILL.md manquant');
    continue;
  }
  const bloc = lire(fichier).match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!bloc) {
    signale(fichier, 1, 'frontmatter absente');
    continue;
  }
  const champs = {};
  for (const ligne of bloc[1].split(/\r?\n/)) {
    const m = ligne.match(/^(\w+)\s*:\s*(.*)$/);
    if (m) champs[m[1]] = m[2].trim();
  }
  if (champs.name !== nomSkill) {
    signale(fichier, 2, `name « ${champs.name} » différent du dossier « ${nomSkill} »`);
  }
  if (!champs.description) {
    signale(fichier, 3, 'description absente de la frontmatter');
  } else if ([...champs.description].length > 300) {
    signale(fichier, 3, `description de ${[...champs.description].length} caractères, maximum 300`);
  }
  descriptions[nomSkill] = champs.description;
}

// 2. Liens relatifs : chaque cible existe, et un lien émis depuis le dossier
// du skill y reste confiné, puisque l'installation manuelle ne copie que ce
// dossier.
const MOTIF_LIEN = /\[[^\]]*\]\(([^)\s]+)\)/g;
for (const fichier of fichiersProse) {
  const texte = lire(fichier);
  for (const m of texte.matchAll(MOTIF_LIEN)) {
    const cible = m[1].split('#')[0];
    if (!cible || /^(https?:|mailto:)/.test(cible)) continue;
    const ligne = texte.slice(0, m.index).split('\n').length;
    const resolu = path.resolve(path.dirname(fichier), cible);
    if (!existsSync(resolu)) {
      signale(fichier, ligne, `lien mort vers ${cible}`);
      continue;
    }
    const segments = fichier.split(path.sep);
    if (segments[0] === 'skills' && segments.length > 2) {
      const dossierSkill = path.resolve(segments[0], segments[1]);
      if (!resolu.startsWith(dossierSkill + path.sep) && resolu !== dossierSkill) {
        signale(fichier, ligne, `lien vers ${cible}, hors du dossier installable du skill`);
      }
    }
  }
}

// 3. Typographie de la règle 14 sur la prose du dépôt, qui est le banc
// d'essai du skill. Exceptions syntaxiques : frontmatter,
// blocs et portées de code, cibles de liens, URL, séparateurs de tableau.
// Le tiret cadratin n'est toléré qu'en mention parenthésée « (—) ».
const CONTROLES = [
  [/\u0020[?!;%»]/, 'espace ordinaire avant ponctuation double ou guillemet fermant, fine insécable U+202F attendue'],
  [/«\u0020/, 'espace ordinaire après guillemet ouvrant, fine insécable U+202F attendue'],
  [/\u00A0[?!;%»]/, 'insécable normale avant ponctuation double ou guillemet fermant, fine U+202F attendue'],
  [/«\u00A0/, 'insécable normale après guillemet ouvrant, fine U+202F attendue'],
  [/[\u0020\u202F]:/, 'deux-points précédé d\'une espace ordinaire ou fine, insécable normale U+00A0 attendue'],
  [/—/, 'tiret cadratin en prose, à remplacer par virgule, point ou parenthèses'],
];

// Tics des règles 13, 14 et 20 que la prose ne doit reproduire qu'en mention.
// Les mentions entre guillemets français ou droits, les lignes de tableau
// (colonnes « à éviter » des références), le code, les liens et les URL sont
// retirés avant le contrôle.
const CONTROLES_MENTIONS = [
  [/(?:\d+|[IVXL]+)(?:ème|èmes|ère|ères)\b/u, 'ordinal en « ème », abréviation réglée attendue (1er, 1re, 2e)'],
  [
    /(?:^|[^\p{L}'’])(?:Etat|Etats|Ecole|Elève|Eglise|Egalité|Ile|Etude|Etape|Equipe|Election|Emission|Evolution|Edition|Editeur|Etranger|Evidemment|Egalement|Etant)\b/u,
    'capitale non accentuée, majuscule accentuée attendue',
  ],
  [
    /(?:^|[\s(])A (?:propos|noter|ce|cet|cette|la|le|les|l'|partir|priori|posteriori|travers|savoir|titre|terme|court|long|moyen|cause|condition|défaut)\b/u,
    'capitale non accentuée, « À » attendu',
  ],
  [/\p{L}\/\p{L}/u, 'barre oblique entre deux mots, « ou », « et » ou reformulation attendue'],
  [/\.\.\./, 'trois points tapés, caractère unique … attendu'],
  [
    /(?:^|[^_\w-])(?:skills?|plugins?|frontmatter|markdown|workflows?|commits?|push|pull requests?|marketplace)(?![\w-]|\.md|\.json|\.yml)/i,
    'terme anglais non naturalisé en romain, italique attendu (règle 25)',
  ],
];
for (const fichier of fichiersProse) {
  const lignes = lire(fichier).split(/\r?\n/);
  let dansFence = false;
  let dansFrontmatter = false;
  for (let i = 0; i < lignes.length; i++) {
    const brut = lignes[i];
    if (i === 0 && brut === '---') {
      dansFrontmatter = true;
      continue;
    }
    if (dansFrontmatter) {
      if (brut === '---') dansFrontmatter = false;
      continue;
    }
    if (/^\s*(```|~~~)/.test(brut)) {
      dansFence = !dansFence;
      continue;
    }
    if (dansFence) continue;
    if (/^\s*\|(\s*:?-{3,}:?\s*\|)+\s*$/.test(brut)) continue;
    const nettoye = brut
      .replace(/`[^`]*`/g, '')
      .replace(/\]\([^)]*\)/g, ']')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/\(—\)/g, '');
    for (const [motif, message] of CONTROLES) {
      if (motif.test(nettoye)) signale(fichier, i + 1, message);
    }
    // Les lignes « Avant » des exemples citent le tic à corriger.
    if (/^\s*\|/.test(brut) || /^\*\*Avant\.\*\*/.test(brut)) continue;
    const nettoyeMention = brut
      .replace(/`[^`]*`/g, '')
      .replace(/\[[^\]]*\]\([^)]*\)/g, '')
      .replace(/https?:\/\/\S+/g, '')
      .replace(/«[^»]*»/g, '')
      .replace(/"[^"]*"/g, '');
    for (const [motif, message] of CONTROLES_MENTIONS) {
      if (motif.test(nettoyeMention)) signale(fichier, i + 1, message);
    }
  }
}

// 4. La version du plugin suit la dernière version publiée du CHANGELOG,
// l'accord que la publication manuelle laisse dériver en premier.
const manifeste = JSON.parse(lire('.claude-plugin/plugin.json'));
const publiee = lire('CHANGELOG.md').match(/^## \[(\d+\.\d+\.\d+)\]/m);
if (!publiee) {
  signale('CHANGELOG.md', null, 'aucune version publiée trouvée');
} else if (manifeste.version !== publiee[1]) {
  signale(
    '.claude-plugin/plugin.json',
    null,
    `version ${manifeste.version} différente de la dernière version publiée ${publiee[1]} du CHANGELOG`,
  );
}

// 5. La description du plugin reprend celle du skill du même nom, puisque
// la marketplace lit la première et le runtime la seconde.
const descriptionSkill = descriptions[manifeste.name];
if (descriptionSkill && manifeste.description !== descriptionSkill) {
  signale(
    '.claude-plugin/plugin.json',
    null,
    `description différente de celle de skills/${manifeste.name}/SKILL.md`,
  );
}

// 6. La marketplace répète la description du plugin, sans quoi la fiche
// affichée à l'installation dérive de celle du runtime.
const marketplace = JSON.parse(lire('.claude-plugin/marketplace.json'));
for (const entree of marketplace.plugins ?? []) {
  if (entree.name === manifeste.name && entree.description !== manifeste.description) {
    signale('.claude-plugin/marketplace.json', null, `description du plugin ${entree.name} différente de plugin.json`);
  }
}

if (erreurs.length > 0) {
  console.error(`${erreurs.length} erreur(s) d'invariant :`);
  for (const e of erreurs) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`Invariants vérifiés sur ${fichiersProse.length} fichiers : frontmatter, liens, typographie, mentions, version, descriptions.`);
