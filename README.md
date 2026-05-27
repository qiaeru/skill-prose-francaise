# Skill de prose française

_Skill_ pour Claude Code qui élimine les tics d'écriture de l'intelligence artificielle dans les textes français.

La prose française se construit par des phrases plus longues, mieux articulées par subordination, alors que Claude transpose souvent l'habitude anglo-saxonne des phrases courtes empilées.

Ce _skill_ cible donc d'abord ce hachage, puis les classiques (participes présents en chaîne, adjectifs intensifs vides, anglicismes, fausses oppositions et langue de bois).

Il s'agit d'une adaptation française inspirée de [stop-slop](https://github.com/hardikpandya/stop-slop) d'Hardik Pandya.

## Arborescence

```text
skill-prose-francaise/
├── .github/
│   └── FUNDING.yml
├── .gitattributes
├── .gitignore
├── README.md
├── CHANGELOG.md
├── LICENSE
└── rediger-prose-francaise/
    ├── SKILL.md
    └── references/
        ├── tournures.md
        ├── structures.md
        └── exemples.md
```

## Installation

Claude Code charge les _skills_ d'un projet depuis le dossier `.claude/skills/` situé à la racine de ce projet, et les _skills_ globaux depuis `~/.claude/skills/`.

Le dépôt est organisé pour que le _skill_ se copie d'un bloc. Le dossier [rediger-prose-francaise/](rediger-prose-francaise/) contient déjà `SKILL.md` et le dossier `references/`, sous le nom exact attendu par Claude Code.

Pour l'installer dans un projet, copiez le dossier `rediger-prose-francaise/` dans le répertoire `.claude/skills/` de ce projet, en créant ce répertoire s'il n'existe pas. Pour une installation valable dans tous vos projets, copiez plutôt ce même dossier dans `~/.claude/skills/`.

Redémarrez ensuite Claude Code pour que le _skill_ soit détecté. Vous pouvez vérifier sa prise en compte en demandant à Claude la liste des _skills_ disponibles ou en l'invoquant par son nom.

Lorsque vous modifiez le _skill_ dans ce dépôt, recopiez le dossier `rediger-prose-francaise/` vers le `.claude/skills/` du projet (ou son équivalent global) et relancez Claude Code, car le contenu n'est pas rechargé à chaud.

## Utilisation

Une fois le _skill_ installé, Claude s'en sert de trois manières principales.

- Lorsque vous lui demandez explicitement « applique rediger-prose-francaise » ou « relis avec rediger-prose-francaise », Claude lit `SKILL.md`, ouvre les fichiers de référence dont il a besoin et passe le texte en revue règle par règle. C'est la voie la plus fiable quand vous tenez à un traitement complet, parce qu'elle force le passage par la grille de notation.
- Si vous formulez une demande de rédaction, d'édition ou de relecture d'un texte français sans nommer le _skill_, Claude reconnaît le contexte grâce au champ `description` de la _frontmatter_ et applique le _skill_ de lui-même. Vous pouvez le confirmer en lui demandant de citer la règle qu'il vient d'appliquer.
- Enfin, pour un texte court, le _skill_ sert surtout de garde-fou. Claude évite les tics les plus visibles sans dérouler la grille de notation, ce qui reste suffisant pour la prose du quotidien.

Quel que soit le mode d'invocation, le _skill_ repose sur trois étages que vous pouvez consulter à part. `SKILL.md` regroupe les règles centrales et les vérifications rapides. Le dossier [rediger-prose-francaise/references/](rediger-prose-francaise/references/) détaille les tournures, les structures et la typographie à éviter, ainsi qu'une vingtaine d'exemples avant et après. La grille de notation, en bas de `SKILL.md`, attribue une note sur cinq axes (articulation, densité lexicale, concret, authenticité et économie), avec un seuil de réécriture fixé à 35 sur 50.

Pour un usage régulier, gardez à l'esprit que ce _skill_ privilégie une prose française qui coule par subordination, plutôt qu'une succession de phrases courtes calquées sur l'anglais. Si une suggestion de Claude vous paraît trop hachée, demandez-lui de rassembler les idées dans une phrase mieux articulée et de revoir sa note d'articulation en conséquence.

## Limites du _skill_

`rediger-prose-francaise` se concentre sur les tics d'écriture IA et sur la typographie française. Il reste plusieurs choses qu'il ne fait pas, et qu'il vaut mieux savoir avant de l'invoquer :

- Ce n'est pas un correcteur orthographique. Le _skill_ ne détecte pas les fautes d'accord du participe passé selon les règles fines, ni les confusions homophoniques (« ces » et « ses », « a » et « à »). Pour ce travail, un outil dédié comme Antidote ou LanguageTool reste indispensable.
- Le fond lui échappe également. Il regarde la forme, le rythme et le lexique, mais il ne vérifie pas la cohérence argumentative, l'exactitude factuelle ou la solidité du raisonnement.
- Son registre reste le soutenu courant. Pour la fiction, la poésie, le théâtre, le juridique ou l'administratif pur, plusieurs règles deviennent inadaptées, et l'auteur garde la main sur ce qui doit céder. La section « Quand l'appliquer » de `SKILL.md` le rappelle.
- Enfin, il ne couvre que le français. Pour l'anglais, le [stop-slop](https://github.com/hardikpandya/stop-slop) original reste la bonne référence.

## Test rapide

Pour vérifier que le _skill_ est bien chargé et qu'il fonctionne, soumettez à Claude le paragraphe ci-dessous en lui demandant de l'améliorer avec `rediger-prose-francaise`. Ce paragraphe concentre à dessein une bonne partie des tics couverts par le _skill_ (ouverture parasite, participes en chaîne, adjectifs intensifs vides, faux contraste, anglicismes, répétition lexicale, hachage en phrases courtes et clôture cliché).

> À noter que cette solution représente un véritable enjeu stratégique majeur, permettant ainsi aux équipes d'implémenter une démarche d'amélioration continue, tout en garantissant une scalabilité optimale. En effet, par ailleurs, il est important de souligner que ce n'est pas une simple mise à jour, c'est une refonte fondamentale. Cette solution est simple, intuitive et performante. La solution s'adapte. La solution répond aux besoins. Voyons cela ensemble. En définitive, la solution permet véritablement de réaliser des gains de productivité significatifs.

Si le _skill_ est actif, Claude doit identifier l'essentiel de ces tics, proposer une version qui coule par subordination et faire passer la note globale au-dessus de 35 sur 50. À l'inverse, si la réponse de Claude conserve les puces, les phrases courtes empilées et les adverbes en _-ment_, le _skill_ n'a pas été chargé.

## Licence

MIT, voir [LICENSE](LICENSE).
