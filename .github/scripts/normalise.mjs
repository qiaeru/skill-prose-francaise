// Applique la règle 14 du skill aux fichiers markdown passés en argument :
// fine insécable (U+202F) avant « ; », « ! », « ? », « % » et « » », après
// « « », insécable normale (U+00A0) avant « : ». Ignore la frontmatter, les
// blocs et portées de code, les cibles de liens, les URL et les séparateurs
// de tableau. Idempotent, et complémentaire de validate.mjs, qui vérifie le
// résultat. Utile parce que les outils d'édition de Claude Code aplatissent
// ces deux insécables en espaces ordinaires.
// Usage : node .github/scripts/normalise.mjs README.md skills/**/*.md
import { readFileSync, writeFileSync } from 'node:fs';

const FINE = '\u202F';
const NORMALE = '\u00A0';
const JETON = '\u0001';
const ESPACES = '[\u0020\u00A0\u202F]+';

const transforme = (segment) =>
  segment
    .replace(new RegExp(ESPACES + '([?!;%\u00BB])', 'g'), FINE + '$1')
    .replace(new RegExp('\u00AB' + ESPACES, 'g'), '\u00AB' + FINE)
    .replace(new RegExp(ESPACES + ':', 'g'), NORMALE + ':');

const traiteLigne = (ligne) => {
  const proteges = [];
  const protege = (s) => {
    proteges.push(s);
    return JETON + (proteges.length - 1) + JETON;
  };
  const t = ligne
    .replace(/`[^`]*`/g, protege)
    .replace(/\]\([^)]*\)/g, protege)
    .replace(/https?:\/\/\S+/g, protege);
  return transforme(t)
    .split(JETON)
    .map((morceau, i) => (i % 2 === 1 ? proteges[Number(morceau)] : morceau))
    .join('');
};

for (const fichier of process.argv.slice(2)) {
  const lignes = readFileSync(fichier, 'utf8').split('\n');
  let dansFence = false;
  let dansFrontmatter = false;
  const sortie = lignes.map((brut, i) => {
    if (i === 0 && brut.trim() === '---') {
      dansFrontmatter = true;
      return brut;
    }
    if (dansFrontmatter) {
      if (brut.trim() === '---') dansFrontmatter = false;
      return brut;
    }
    if (/^\s*(```|~~~)/.test(brut)) {
      dansFence = !dansFence;
      return brut;
    }
    if (dansFence) return brut;
    if (/^\s*\|(\s*:?-{3,}:?\s*\|)+\s*$/.test(brut)) return brut;
    return traiteLigne(brut);
  });
  writeFileSync(fichier, sortie.join('\n'));
  console.log(`normalisé ${fichier}`);
}
