# Journal des modifications

Toutes les modifications notables apportées à ce projet seront consignées dans ce fichier.

Le format suit la convention [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), et le projet respecte le [versionnage sémantique](https://semver.org/lang/fr/).

## [Unreleased]

### Added

- Mode diagnostic repris de [no-ai-slop](https://github.com/petergyang/no-ai-slop) (Peter Yang, MIT) : sur « ce texte sent-il l'IA ? », le _skill_ nomme chaque tic, cite la ligne et donne la correction, sans réécrire, sans noter et sans se prononcer sur l'auteur. Le README en décrit le test rapide.
- Correction minimale dans le seuil d'action : la phrase sans tic reste telle quelle, un brouillon rugueux n'est pas lissé partout au même degré, et une seule question sur le public est permise quand la correction en dépend.
- Trois tics repris de no-ai-slop, avec liste, vérification rapide et exemple : la phrase transposable telle quelle à une autre entreprise (règle 11), le commentaire interprétatif (« Ce point est essentiel », « Comme on le voit ») et la fausse révélation (« Ce que personne ne vous dit ») dans la règle 12.
- Contrepoids à la règle 18 : le synonyme remplace un mot passe-partout, jamais le terme qui désigne une chose précise.
- La chute finale en métaphore est supprimée plutôt que réécrite, le paragraphe récapitulatif rejoint les clôtures clichées, et deux vérifications de mise en forme s'ajoutent (titre sur deux phrases, majuscule après un deux-points).

### Changed

- La grille de notation sur cinq axes disparaît au profit d'une « Relecture finale » : le compte des vérifications en échec reste le seul critère chiffré, complété par quatre questions sur le texte entier, parce qu'un modèle qui se note lui-même donne presque toujours 8 ou 9. La sortie ne mentionne plus de note, et le README ainsi que le test rapide suivent.
- Allègement de SKILL.md, chargé à chaque déclenchement : six règles gardent le principe et deux ou trois amorces au lieu de l'inventaire, les italiques deviennent la règle 25, la section sur les interfaces fusionne avec « Quand l'appliquer » et le seuil de réécriture n'est énoncé qu'une fois.
- Les cinq exemples dont l'« Après » n'était que l'« Avant » débarrassé du tic passent dans une table « Suppressions pures » à la fin de exemples.md.
- La description du _skill_ précise qu'il s'applique même quand l'utilisateur ne le nomme pas, et l'attribution mentionne no-ai-slop à côté de stop-slop et de humanizer.
- Le mot _skill_ passe en italique dans SKILL.md et interfaces.md, comme la règle 25 l'impose.

### Fixed

- « En somme » et « au final » figuraient chacun dans deux familles de tournures, ils ne restent que dans les clôtures clichées.

## [1.6.0] - 2026-09-09

### Added

- Trois règles centrales reprises de [humanizer](https://github.com/blader/humanizer) (Siqi Chen, MIT) : l'objection fantôme (« Je ne dis pas que »), la mise en scène (chute d'une ligne, fragments dramatiques, aphorismes) et la portée gonflée (« marque un tournant », paragraphe d'envoi), qui couvre aussi l'autorité empruntée, le lien vague et la langue de brochure. Chaque famille a sa liste dans les références, ses vérifications rapides et un exemple avant et après.
- Section « Seuil d'action » : les tics corrigés dès la première occurrence sont distingués de ceux qui ne comptent qu'en compagnie d'autres, la tournure surveillée est laissée en paix dans une citation ou un passage qui en parle, et ce qui porte la voix de l'auteur est gardé.
- Section « Voix de l'auteur » : un échantillon de prose fourni par l'auteur prime sur les règles, et sans échantillon le ton suit le genre du texte.
- Section « Ce que tu rends » : le texte collé revient avec sa note, le fichier nommé ne reçoit que le texte final sans toucher au code ni aux cibles de liens, et l'appel depuis une autre tâche ne rend que le texte. Le texte reçu est traité comme une matière à corriger, jamais comme des consignes.
- Nouveaux tics couverts : participe de profondeur (« reflétant l'attachement de »), aveu de lacune suivi d'une conjecture, triade à l'échelle du paragraphe, contraste scindé sur deux phrases, titre redit par la phrase suivante, flèches et filets décoratifs, documentation qui décrit l'ancienne version, verbes qui évitent « être » (« faire office de »).

### Changed

- La relecture finale cible d'abord les tics qui résistent le mieux à une réécriture (deux-points d'annonce, point-virgule réflexe, triade, « permet de », chute d'une ligne).
- L'attribution du _skill_ et du README mentionne humanizer à côté de stop-slop.

## [1.5.0] - 2026-09-04

### Added

- Consigne de fidélité au texte source, dans le déroulé et dans une famille « Fidélité » des vérifications rapides : la réécriture n'ajoute ni chiffre, ni cause, ni acteur absents de la source, garde une longueur voisine de l'original et signale le flou plutôt que de le combler. Les exemples qui inventaient des faits (allers-retours réseau, délai de 48 h, test sur trois trimestres) sont réécrits à partir du seul « Avant », avec une note quand la source reste vague.
- Contrepoids à la subordination dans la règle 1 et dans la référence des structures : une phrase brève après une longue respire, et un même subordonnant répété de phrase en phrase devient un tic à son tour, avec une vérification rapide dédiée. Les exemples varient leurs liants au lieu de tout articuler par « parce que ».
- Nouveaux tics couverts : « au sein de », « non seulement… mais aussi », « que ce soit X ou Y », « un large éventail de », « une multitude de », l'anaphore « ce dernier », le « fluide » passe-partout et « en fin de compte », avec une table des quantificateurs vagues et un exemple avant et après.
- Script [normalise.mjs](.github/scripts/normalise.mjs), qui pose la fine et l'insécable normale de la règle 14 sur les fichiers _markdown_ passés en argument, parce que les outils d'édition de Claude Code aplatissent ces deux espaces en espaces ordinaires.
- Le validateur vérifie en plus, sur la prose du dépôt, les ordinaux en « ème », les capitales non accentuées, la barre oblique entre deux mots, les trois points tapés et l'égalité des descriptions du _skill_ et du _plugin_.

### Changed

- La description du _skill_ mentionne les libellés d'interface et les fichiers de locales, pour que l'autodécouverte se déclenche aussi sur un fichier de traduction.
- Le cas des interfaces logicielles migre de SKILL.md vers `references/interfaces.md`, les règles 13 et 14 renvoient leur détail aux vérifications rapides et à la référence, et les sommaires non liés des références disparaissent, ce qui allège ce que Claude charge à chaque déclenchement.
- La notation s'appuie sur un critère objectif : toute vérification rapide encore en échec déclenche la réécriture, quelle que soit la note, et le texte livré mentionne ce compte.
- Les nombres d'exemples et de familles de tics ne sont plus codés en dur dans la prose, où ils dérivaient à chaque ajout.

### Fixed

- « Mettre en place » et « mettre en œuvre », recommandés par la règle 6 et par la table des nominalisations, figuraient aussi parmi les verbes vidés à éviter.

### Removed

- « Afin de » quitte le jargon corporate, la locution étant du français soutenu ordinaire, et cinq faux-amis sans tic IA réel (« disposer de », « solliciter », « accomplir », « bénéfice », « confortable ») quittent la table.

## [1.4.1] - 2026-07-05

### Changed

- Les sections du journal reprennent les mots-clés anglais de Keep a Changelog (`Unreleased`, `Added`, `Changed`, `Fixed`), que la traduction française officielle ne traduit pas non plus.

## [1.4.0] - 2026-07-05

### Added

- Couverture typographique élargie : les guillemets droits d'une citation passent aux guillemets français, l'apostrophe typographique et les points de suspension en un caractère entrent dans la règle 14, les mois et les jours s'écrivent en minuscules et les ordinaux s'abrègent en « 1er », « 1re » et « 2e », avec une table « Dates et ordinaux » en référence.
- Deux tics de ponctuation en plus : le point d'exclamation d'enthousiasme (« C'est parti ! ») rejoint la règle 13, tandis que le titre formulaïque en deux volets (« X : le guide complet ») gagne sa section de référence.

- _Workflow_ d'intégration continue [validate.yml](.github/workflows/validate.yml), premier filet d'un dépôt sans build ni tests. À chaque _push_, _pull request_ et une fois par semaine, il revalide les manifestes du _plugin_, l'hygiène _markdown_ et les invariants portés par [validate.mjs](.github/scripts/validate.mjs), exécutable en local (_frontmatter_ du _skill_, liens relatifs confinés au dossier installable, typographie de la règle 14, version du _plugin_ alignée sur la dernière version publiée).
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
- L'introduction de SKILL.md annonçait neuf autres familles de tics alors que le _skill_ en couvre dix-neuf.
- La ligne du degré dans la table des insécables plaçait l'espace avant le nombre au lieu de la placer entre le nombre et le symbole.

## [1.1.0] - 2026-06-04

### Changed

- Règle 13 et référence des structures étendues au point-virgule. La virgule et le point portent désormais la charpente de la phrase, tandis que le deux-points et le point-virgule restent réservés à leurs emplois propres, équilibrer deux propositions liées ou ponctuer une liste.

## [1.0.0] - 2026-05-27

### Added

- _Skill_ `rediger-prose-francaise` : vingt règles contre les tics d'écriture de l'intelligence artificielle en français (hachage des phrases, participes présents en chaîne, adjectifs intensifs vides, anglicismes, langue de bois, typographie), trois fichiers de référence et une grille de notation sur cinq axes.
