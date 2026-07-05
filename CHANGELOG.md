# Journal des modifications

Toutes les modifications notables apportées à ce projet seront consignées dans ce fichier.

Le format suit la convention [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), et le projet respecte le [versionnage sémantique](https://semver.org/lang/fr/).

## [Unreleased]

## [1.4.1] - 2026-07-05

### Changed

- Les sections du journal reprennent les mots-clés anglais de Keep a Changelog (`Unreleased`, `Added`, `Changed`, `Fixed`), que la traduction française officielle ne traduit pas non plus.

## [1.4.0] - 2026-07-05

### Added

- Couverture typographique élargie : les guillemets droits d'une citation passent aux guillemets français, l'apostrophe typographique et les points de suspension en un caractère entrent dans la règle 14, les mois et les jours s'écrivent en minuscules et les ordinaux s'abrègent en « 1er », « 1re » et « 2e », avec une table « Dates et ordinaux » en référence.
- Deux tics de ponctuation en plus : le point d'exclamation d'enthousiasme (« C'est parti ! ») rejoint la règle 13, tandis que le titre formulaïque en deux volets (« X : le guide complet ») gagne sa section de référence.

- Workflow d'intégration continue [validate.yml](.github/workflows/validate.yml), premier filet d'un dépôt sans build ni tests. À chaque _push_, _pull request_ et une fois par semaine, il revalide les manifestes du _plugin_, l'hygiène _markdown_ et les invariants portés par [validate.mjs](.github/scripts/validate.mjs), exécutable en local (_frontmatter_ du _skill_, liens relatifs confinés au dossier installable, typographie de la règle 14, version du _plugin_ alignée sur la dernière version publiée).
- Configuration [dependabot.yml](.github/dependabot.yml) qui surveille chaque semaine les versions des actions GitHub des _workflows_, pour qu'elles ne dérivent plus vers l'obsolescence.

### Changed

- Les vérifications rapides sont regroupées en six familles (architecture de la phrase, lexique, rhétorique et transitions, ponctuation, typographie, registre d'assistant), si bien que le cas des interfaces désigne désormais les familles à passer sur un micro-libellé.
- Les règles 13 et 14 renvoient le détail à `structures.md`, ce qui allège SKILL.md sans perte de règle.
- Le déroulé et la grille de notation bornent la boucle à une seule réécriture, le texte partant ensuite avec sa note.

### Fixed

- Deux italiques de SKILL.md composés en astérisques, réalignés sur la convention du tiret bas que le linter impose désormais.

## [1.3.0] - 2026-06-25

### Added

- Règle 21 contre le registre d'assistant, l'angle qui manquait au _skill_, centré sur la prose et non sur le résidu de modèle. Elle vise trois familles, la flagornerie d'ouverture (« Excellente question ») et l'accord réflexe, les formules de service en tête ou en clôture (« J'espère que ce message vous trouve bien », « Souhaitez-vous que je développe ? »), et les mentions résiduelles du modèle (« En tant que modèle de langage »), avec trois vérifications rapides, une section de référence dans `tournures.md` et un exemple avant et après.
- Calques de la métaphore de la plongée à la règle 12 (« Plongeons dans le sujet », « Plongée au cœur de »), ouvertures factices dans les vérifications (« Honnêtement », « Imaginez », « Le truc, c'est que ») et patron des intitulés en gras suivis d'un deux-points repéré dans les structures, tics relevés dans l'étude empirique [vibecoded-design-tells](https://github.com/JCarterJohnson/vibecoded-design-tells).

### Fixed

- Les sources du _skill_ et la prose du dépôt appliquent désormais la règle 14 à la lettre, avec la fine insécable (U+202F) avant `?`, `!`, `;`, `%` et dans les guillemets, et l'insécable normale (U+00A0) avant `:`, dans les heures et entre un nombre et son unité. Le code, la _frontmatter_, les URL et les séparateurs de tableau gardent l'espace ordinaire.

## [1.2.0] - 2026-06-12

### Added

- Distribution en _plugin_ Claude Code : le dépôt est sa propre _marketplace_ (`.claude-plugin/`), pour une installation en une commande et des mises à jour sans re-copie. La copie manuelle reste possible.
- Couverture des tics persistants des modèles récents : la question-relance en transition (« Le résultat ? »), le gras d'emphase, les fragments publicitaires en cascade (« Pas de jargon. Juste l'essentiel. ») et le balancement « Moins de X, plus de Y », les ouvertures commerciales (« Que vous soyez X ou Y », « Dans un monde où »), la pseudo-clivée d'annonce, la transition « C'est là que X entre en jeu », les clichés « libérer le potentiel » et « exploiter la puissance de », ainsi que les émojis semés dans la prose, avec deux exemples avant et après en plus.
- Nouveaux calques en référence : anglicismes « game-changer », « roadmap », « digital » et « s'intégrer de manière transparente », faux-amis « versatile » et « assumer ».
- Section « Déroulé » dans SKILL.md, qui fixe l'ordre d'application (lecture complète, règles, vérifications, notation, relecture de sa propre sortie) et le traitement allégé des textes courts.

### Changed

- Le dossier du _skill_ vit désormais sous `skills/rediger-prose-francaise/` (déplacé depuis la racine), l'emplacement attendu par le format _plugin_. La copie manuelle part de ce nouveau chemin.
- Les adverbes en _-ment_ passent de « à bannir » à « parasites », alignés sur la règle 4 pour préserver leurs emplois légitimes.
- La table des espaces insécables distingue désormais la fine (U+202F) de la normale (U+00A0), alignée sur la règle 14, et gagne la ligne du deux-points.
- La section des atténuations précise quand la précaution reste légitime, le tic visé étant l'empilement.

### Fixed

- Deux accords fautifs dans les références et le critère d'échec du test rapide du README, qui mentionnait des puces absentes du paragraphe de test.
- « Pour autant que » retiré des pléonasmes, la locution étant du français légitime.
- « En matière de » retiré du jargon corporate, la règle 11 et la table des pièges grammaticaux la recommandant comme remplacement de « en termes de ».
- L'introduction de SKILL.md annonçait neuf autres familles de tics alors que le skill en couvre dix-neuf.
- La ligne du degré dans la table des insécables plaçait l'espace avant le nombre au lieu de la placer entre le nombre et le symbole.

## [1.1.0] - 2026-06-04

### Changed

- Règle 13 et référence des structures étendues au point-virgule. La virgule et le point portent désormais la charpente de la phrase, tandis que le deux-points et le point-virgule restent réservés à leurs emplois propres, équilibrer deux propositions liées ou ponctuer une liste.

## [1.0.0] - 2026-05-27

### Added

- _Skill_ `rediger-prose-francaise` : vingt règles contre les tics d'écriture de l'intelligence artificielle en français (hachage des phrases, participes présents en chaîne, adjectifs intensifs vides, anglicismes, langue de bois, typographie), trois fichiers de référence et une grille de notation sur cinq axes.
