# Interfaces logicielles

Un fichier d'interface (libellés d'application, fichiers de locales, chaînes de traduction) mélange deux registres qu'il faut traiter différemment. La ligne de partage est l'unité, pas le fichier : un fragment court ne relève que des règles lexicales et typographiques, tandis qu'une phrase complète relève de toute la prose. Les numéros renvoient aux règles centrales de SKILL.md.

## Micro-libellés

Boutons, onglets, étiquettes de champ, titres courts, notifications brèves, messages d'erreur d'une ligne. Ce sont des fragments, pas des phrases, si bien que les règles d'architecture de la phrase ne s'y appliquent pas. Laisse de côté la subordination (1), les participes (2), les relatives (3), les fausses oppositions (8), les connecteurs d'ouverture (9), le méta-commentaire (12), les listes (17), l'inversion interrogative (19) et le registre d'assistant (21). N'y regarde que le lexique et la typographie : anglicismes (6), faux-amis (15), pièges grammaticaux (16), concret plutôt que vague (11) et surtout typographie (14), puisque c'est sur ces fragments que se jouent les insécables, les majuscules accentuées et les pourcentages. Dans les vérifications rapides, ne déroule que les familles du lexique, de la ponctuation et de la typographie.

## Inversion de la règle 18 sur les micro-libellés

En prose tu varies le lexique, alors qu'en interface une même action garde toujours le même mot. Si « Supprimer » étiquette un bouton, ne l'alterne jamais avec « Effacer » ou « Retirer » ailleurs, parce que l'utilisateur apprend les mots de l'interface et que la cohérence prime sur la variété.

## Textes longs

Descriptions, textes d'aide, corps des fenêtres de confirmation, messages d'erreur explicatifs, introductions. Dès qu'une chaîne forme une ou plusieurs phrases complètes, applique le skill entier, subordination et vérifications rapides comprises. Un avertissement de deux phrases ou une description de carte est de la prose et se relit comme telle.
