# _Skill_ de prose française

_Skill_ pour Claude Code qui élimine les tics d'écriture de l'intelligence artificielle dans les textes français.

La prose française se construit par des phrases plus longues, mieux articulées par subordination, alors que Claude transpose souvent l'habitude anglo-saxonne des phrases courtes empilées.

Ce _skill_ cible donc d'abord ce hachage, puis les classiques (participes présents en chaîne, adjectifs intensifs vides, anglicismes, fausses oppositions et langue de bois).

Il s'agit d'une adaptation française inspirée de [stop-slop](https://github.com/hardikpandya/stop-slop) d'Hardik Pandya, complétée par les apports de [humanizer](https://github.com/blader/humanizer) de Siqi Chen, à savoir le seuil d'action, la voix de l'auteur et les familles de la mise en scène, de la portée gonflée, de l'autorité empruntée et de l'objection fantôme, puis par ceux de [no-ai-slop](https://github.com/petergyang/no-ai-slop) de Peter Yang, à savoir le diagnostic sans réécriture, la correction minimale, le test de transposabilité et les familles du commentaire interprétatif, de la fausse révélation et des synonymes tournants.

## Arborescence

```text
skill-prose-francaise/
├── .claude-plugin/
│   ├── plugin.json
│   └── marketplace.json
├── .github/
│   ├── dependabot.yml
│   ├── FUNDING.yml
│   ├── scripts/
│   │   ├── normalise.mjs
│   │   └── validate.mjs
│   └── workflows/
│       └── validate.yml
├── .gitattributes
├── .gitignore
├── .markdownlint-cli2.jsonc
├── README.md
├── CHANGELOG.md
├── LICENSE
└── skills/
    └── rediger-prose-francaise/
        ├── SKILL.md
        └── references/
            ├── tournures.md
            ├── structures.md
            ├── interfaces.md
            └── exemples.md
```

Le dépôt est à la fois un _plugin_ Claude Code nommé `rediger-prose-francaise` et sa propre _marketplace_ : `plugin.json` décrit le _plugin_ (le dépôt entier, avec le _skill_ sous `skills/`) et `marketplace.json` le référence pour que Claude Code l'installe et le mette à jour directement depuis GitHub.

À chaque _push_, à chaque _pull request_ et une fois par semaine, le _workflow_ GitHub Actions [validate.yml](.github/workflows/validate.yml) revalide les manifestes (`plugin validate`), l'hygiène _markdown_ (`markdownlint-cli2`) et les invariants du dépôt (_frontmatter_ du _skill_, liens relatifs et leur confinement au dossier installable, typographie de la règle 14 et quelques tics des règles 13, 20 et 25 comme les ordinaux en « ème », la barre oblique entre deux mots ou un terme anglais laissé en romain, description et version du _plugin_ alignées sur le _skill_, sur la _marketplace_ et sur la dernière version publiée), le script [validate.mjs](.github/scripts/validate.mjs) restant exécutable en local. Son pendant [normalise.mjs](.github/scripts/normalise.mjs) pose les insécables de la règle 14 sur les fichiers _markdown_ qu'on lui passe, pour que la prose du dépôt respecte ce que le validateur vérifie.

## Installation

Deux modes d'installation coexistent. Le _plugin_ est la voie recommandée, parce qu'il s'installe en une fois et se met à jour sans re-copie, tandis que la copie manuelle reste utile si votre version de Claude Code ne gère pas les _plugins_ ou si vous préférez figer une copie locale.

### En _plugin_ (recommandé)

Le dépôt est sa propre _marketplace_. Dans Claude Code, ajoutez-la puis installez le _plugin_ :

```text
/plugin marketplace add qiaeru/skill-prose-francaise
/plugin install rediger-prose-francaise@skill-prose-francaise
```

Le _skill_ est disponible dans tous vos projets. Le champ `version` du _plugin_ suit les versions publiées du dépôt, relevé à chaque publication en même temps que le CHANGELOG. Lorsqu'une nouvelle version sort, mettez à jour avec `/plugin update rediger-prose-francaise`, ou laissez la mise à jour automatique de Claude Code s'en charger, sans copie de fichiers.

### En copie manuelle

Claude Code charge aussi les _skills_ d'un projet depuis le dossier `.claude/skills/` situé à la racine de ce projet, et les _skills_ globaux depuis `~/.claude/skills/`.

Pour ce mode, copiez le dossier [skills/rediger-prose-francaise/](skills/rediger-prose-francaise/), qui contient `SKILL.md` et le dossier `references/`, dans le répertoire `.claude/skills/` de ce projet, en créant ce répertoire s'il n'existe pas. Pour une installation valable dans tous vos projets, copiez plutôt ce même dossier dans `~/.claude/skills/`.

Redémarrez ensuite Claude Code pour que le _skill_ soit détecté. Vous pouvez vérifier sa prise en compte en demandant à Claude la liste des _skills_ disponibles ou en l'invoquant par son nom. À chaque mise à jour du _skill_, recopiez le dossier et relancez Claude Code, car le contenu n'est pas rechargé à chaud.

## Utilisation

Une fois le _skill_ installé, Claude s'en sert de trois manières principales.

- Lorsque vous lui demandez explicitement « applique rediger-prose-francaise » ou « relis avec rediger-prose-francaise », Claude lit `SKILL.md`, ouvre les fichiers de référence dont il a besoin et passe le texte en revue règle par règle. C'est la voie la plus fiable quand vous tenez à un traitement complet, parce qu'elle force le passage par les vérifications rapides.
- Si vous formulez une demande de rédaction, d'édition ou de relecture d'un texte français sans nommer le _skill_, Claude reconnaît le contexte grâce au champ `description` de la _frontmatter_ et applique le _skill_ de lui-même. Vous pouvez le confirmer en lui demandant de citer la règle qu'il vient d'appliquer.
- Enfin, pour un texte court, le _skill_ sert surtout de garde-fou. Claude évite les tics les plus visibles sans dérouler les vérifications rapides, ce qui reste suffisant pour la prose du quotidien.

Quel que soit le mode d'invocation, le _skill_ repose sur trois étages que vous pouvez consulter à part. `SKILL.md` regroupe les règles centrales et les vérifications rapides. Le dossier [skills/rediger-prose-francaise/references/](skills/rediger-prose-francaise/references/) détaille les tournures, les structures et la typographie à éviter, le régime propre aux libellés d'interface et aux fichiers de locales, ainsi que des exemples avant et après, un par famille de tics. La relecture finale, en bas de `SKILL.md`, compte les vérifications rapides encore en échec et pose quatre questions sur le texte entier (l'auteur reconnaît-il sa prose, passe-t-elle lue à voix haute, sonne-t-elle français écrit, reste-t-il du gras), et une seule vérification en échec ou une seule réponse négative déclenche la réécriture. Il n'y a pas de note chiffrée, parce qu'un modèle qui se note lui-même donne presque toujours 8 ou 9, alors qu'une vérification en échec se constate.

Pour un usage régulier, gardez à l'esprit que ce _skill_ privilégie une prose française qui coule par subordination, plutôt qu'une succession de phrases courtes calquées sur l'anglais. Si une suggestion de Claude vous paraît trop hachée, demandez-lui de rassembler les idées dans une phrase mieux articulée et de repasser les vérifications de la famille « Architecture de la phrase ».

Le _skill_ ne touche qu'à la forme. Il n'ajoute ni chiffre, ni cause, ni acteur absents de votre texte, garde une longueur voisine de l'original et signale le flou plutôt que de le combler, si bien qu'une phrase vague ressort sobre au lieu d'être étoffée par des précisions inventées.

Vous pouvez joindre deux ou trois paragraphes de votre propre prose. Le _skill_ cale alors la réécriture sur votre longueur de phrase, votre lexique et votre ponctuation, et l'échantillon prime sur ses règles. Pointé vers un fichier, il n'y réécrit que la prose et laisse intacts le code, la _frontmatter_ et les cibles de liens, tandis qu'appelé depuis une autre tâche (message de _commit_, description de _pull request_) il ne rend que le texte final. Il applique enfin un seuil d'action, puisqu'un point-virgule ou un connecteur isolés ne comptent qu'en compagnie d'autres tics, alors qu'une fausse opposition ou un résidu d'assistant justifient une correction dès la première occurrence, et il ne corrige que ce qui porte un tic, si bien qu'une phrase saine reste telle quelle même si Claude l'aurait tournée autrement.

Vous pouvez aussi demander un diagnostic sans réécriture (« ce texte sent-il l'IA ? », « relève les tics sans réécrire »). Le _skill_ nomme alors chaque tic trouvé, cite la ligne et donne la correction en quelques mots, sans réécrire ni noter le texte, et sans se prononcer sur son auteur, humain ou machine, parce qu'un détecteur devine alors qu'un tic nommé et cité se vérifie.

## Limites du _skill_

`rediger-prose-francaise` se concentre sur les tics d'écriture IA et sur la typographie française. Il reste plusieurs choses qu'il ne fait pas, et qu'il vaut mieux savoir avant de l'invoquer :

- Ce n'est pas un correcteur orthographique. Le _skill_ ne détecte pas les fautes d'accord du participe passé selon les règles fines, ni les confusions homophoniques (« ces » et « ses », « a » et « à »). Pour ce travail, un outil dédié comme Antidote ou LanguageTool reste indispensable.
- Le fond lui échappe également. Il regarde la forme, le rythme et le lexique, mais il ne vérifie pas la cohérence argumentative, l'exactitude factuelle ou la solidité du raisonnement.
- Son registre reste le soutenu courant. Pour la fiction, la poésie, le théâtre, le juridique ou l'administratif pur, plusieurs règles deviennent inadaptées, et l'auteur garde la main sur ce qui doit céder. La section « Quand l'appliquer » de `SKILL.md` le rappelle.
- Enfin, il ne couvre que le français. Pour l'anglais, le _skill_ frère [skill-english-prose](https://github.com/qiaeru/skill-english-prose) suit la même construction avec les tics propres à l'anglais, et les deux se prêtent leurs décisions à chaque révision.

## Test rapide

Pour vérifier que le _skill_ est bien chargé et qu'il fonctionne, soumettez à Claude le paragraphe ci-dessous en lui demandant de l'améliorer avec `rediger-prose-francaise`. Ce paragraphe concentre à dessein une bonne partie des tics couverts par le _skill_ (ouverture parasite, participes en chaîne, adjectifs intensifs vides, faux contraste, anglicismes, répétition lexicale, hachage en phrases courtes et clôture cliché).

> À noter que cette solution représente un véritable enjeu stratégique majeur, permettant ainsi aux équipes d'implémenter une démarche d'amélioration continue, tout en garantissant une scalabilité optimale. En effet, par ailleurs, il est important de souligner que ce n'est pas une simple mise à jour, c'est une refonte fondamentale. Cette solution est simple, intuitive et performante. La solution s'adapte. La solution répond aux besoins. Voyons cela ensemble. En définitive, la solution permet véritablement de réaliser des gains de productivité significatifs.

Si le _skill_ est actif, Claude doit identifier l'essentiel de ces tics, proposer une version qui coule par subordination et annoncer un compte de vérifications en échec nul ou presque. À l'inverse, si la réponse de Claude introduit des puces ou conserve les phrases courtes empilées et les adverbes en _-ment_, le _skill_ n'a pas été chargé.

Pour tester le mode diagnostic, soumettez le même paragraphe en demandant « ce texte sent-il l'IA ? ». Claude doit alors lister les tics en citant chaque passage et sa correction, sans réécrire le paragraphe, sans le noter et sans conclure sur son auteur.

## Licence

MIT, voir [LICENSE](LICENSE).
