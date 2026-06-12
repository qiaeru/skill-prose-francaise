# Journal des modifications

Toutes les modifications notables apportées à ce projet seront consignées dans ce fichier.

Le format suit la convention [Keep a Changelog](https://keepachangelog.com/fr/1.1.0/), et le projet respecte le [versionnage sémantique](https://semver.org/lang/fr/).

## [Non publié]

## [1.2.0] - 2026-06-12

### Ajouté

- Distribution en _plugin_ Claude Code : le dépôt est sa propre _marketplace_ (`.claude-plugin/`), pour une installation en une commande et des mises à jour sans re-copie. La copie manuelle reste possible.
- Couverture des tics persistants des modèles récents : la question-relance en transition (« Le résultat ? »), le gras d'emphase, les fragments publicitaires en cascade (« Pas de jargon. Juste l'essentiel. ») et le balancement « Moins de X, plus de Y », les ouvertures commerciales (« Que vous soyez X ou Y », « Dans un monde où »), la pseudo-clivée d'annonce, la transition « C'est là que X entre en jeu », les clichés « libérer le potentiel » et « exploiter la puissance de », ainsi que les émojis semés dans la prose, avec deux exemples avant et après en plus.
- Nouveaux calques en référence : anglicismes « game-changer », « roadmap », « digital » et « s'intégrer de manière transparente », faux-amis « versatile » et « assumer ».
- Section « Déroulé » dans SKILL.md, qui fixe l'ordre d'application (lecture complète, règles, vérifications, notation, relecture de sa propre sortie) et le traitement allégé des textes courts.

### Modifié

- Le dossier du _skill_ vit désormais sous `skills/rediger-prose-francaise/` (déplacé depuis la racine), l'emplacement attendu par le format _plugin_. La copie manuelle part de ce nouveau chemin.
- Les adverbes en _-ment_ passent de « à bannir » à « parasites », alignés sur la règle 4 pour préserver leurs emplois légitimes.
- La table des espaces insécables distingue désormais la fine (U+202F) de la normale (U+00A0), alignée sur la règle 14, et gagne la ligne du deux-points.
- La section des atténuations précise quand la précaution reste légitime, le tic visé étant l'empilement.

### Corrigé

- Deux accords fautifs dans les références et le critère d'échec du test rapide du README, qui mentionnait des puces absentes du paragraphe de test.
- « Pour autant que » retiré des pléonasmes, la locution étant du français légitime.
- « En matière de » retiré du jargon corporate, la règle 11 et la table des pièges grammaticaux la recommandant comme remplacement de « en termes de ».
- L'introduction de SKILL.md annonçait neuf autres familles de tics alors que le skill en couvre dix-neuf.
- La ligne du degré dans la table des insécables plaçait l'espace avant le nombre au lieu de la placer entre le nombre et le symbole.

## [1.1.0] - 2026-06-04

### Modifié

- Règle 13 et référence des structures étendues au point-virgule. La virgule et le point portent désormais la charpente de la phrase, tandis que le deux-points et le point-virgule restent réservés à leurs emplois propres, équilibrer deux propositions liées ou ponctuer une liste.

## [1.0.0] - 2026-05-27

### Ajouté

- _Skill_ `rediger-prose-francaise` : vingt règles contre les tics d'écriture de l'intelligence artificielle en français (hachage des phrases, participes présents en chaîne, adjectifs intensifs vides, anglicismes, langue de bois, typographie), trois fichiers de référence et une grille de notation sur cinq axes.
