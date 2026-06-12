---
name: rediger-prose-francaise
description: Supprime les tics d'écriture IA en français. À utiliser pour rédiger, éditer ou relire un texte FR. Impose une prose articulée par subordination plutôt que par hachage anglo-saxon, et applique la typographie française.
---

# Rédiger une prose française

Le défaut principal d'un texte IA en français n'est pas l'emphase anglo-saxonne mais le hachage. L'IA aligne des phrases courtes calquées sur l'anglais alors que le français écrit attend des phrases plus longues, articulées par subordination. Ce skill corrige ce défaut et dix-neuf autres familles de tics.

## Quand l'appliquer

Dès que la sortie attendue est un texte en français à registre soutenu courant (article, essai, courriel professionnel, documentation, communiqué, billet). N'applique pas ce skill à la fiction, à la poésie, au juridique pur ou à l'administratif normalisé, où plusieurs règles deviennent contre-productives.

## Déroulé

Pour une relecture ou une réécriture complète :

1. lis le texte en entier avant de corriger, pour repérer les tics de structure (hachage, répétitions, cadence) qui n'apparaissent pas phrase par phrase;
2. applique les règles centrales, en ouvrant les références au besoin;
3. passe les vérifications rapides sur le résultat;
4. note sur la grille des cinq axes et réécris sous 35 sur 50;
5. relis ta propre sortie avec les mêmes vérifications, car le texte corrigé doit respecter les règles qu'il impose.

Pour un texte court (courriel, message, paragraphe isolé), applique les règles sans dérouler la grille de notation.

## Cas particulier : interfaces logicielles

Un fichier d'interface (libellés d'application, fichiers de locales) mélange deux registres qu'il faut traiter différemment. La ligne de partage est l'unité, pas le fichier : un fragment court ne relève que des règles lexicales et typographiques, tandis qu'une phrase complète relève de toute la prose.

**Micro-libellés** : boutons, onglets, étiquettes de champ, titres courts, notifications brèves, messages d'erreur d'une ligne. Ce sont des fragments, pas des phrases, si bien que les règles d'architecture de la phrase ne s'y appliquent pas. Laisse de côté la subordination (1), les participes (2), les relatives (3), les fausses oppositions (8), les connecteurs d'ouverture (9), le méta-commentaire (12), les listes (17) et l'inversion interrogative (19). N'y regarde que le lexique et la typographie : anglicismes (6), faux-amis (15), pièges grammaticaux (16), concret plutôt que vague (11) et surtout typographie (14), puisque c'est sur ces fragments que se jouent les insécables, les majuscules accentuées et les pourcentages.

**Inversion de la règle 18 sur les micro-libellés.** En prose tu varies le lexique, alors qu'en interface une même action garde toujours le même mot. Si « Supprimer » étiquette un bouton, ne l'alterne jamais avec « Effacer » ou « Retirer » ailleurs, parce que l'utilisateur apprend les mots de l'interface et que la cohérence prime sur la variété.

**Textes longs** : descriptions, textes d'aide, corps des fenêtres de confirmation, messages d'erreur explicatifs, introductions. Dès qu'une chaîne forme une ou plusieurs phrases complètes, applique le skill entier, subordination comprise. Un avertissement de deux phrases ou une description de carte est de la prose et se relit comme telle.

## Règles centrales

1. **Construis des phrases qui coulent par subordination.** Articule les idées liées par « alors que », « tandis que », « puisque », « bien que », « dès lors que », « pourvu que », « quoique », « lorsque », « dès que », « après que », « avant que », « si bien que », « de sorte que » ou « parce que ». N'enchaîne pas deux phrases courtes coordonnées par un point ou par « et » quand une seule phrase subordonnée fait le travail. C'est le tic IA n°1 en français.

2. **Évite les chaînes de participes présents.** Un ou deux participes par phrase restent naturels. Le tic, c'est l'enfilade (« X, permettant Y, offrant Z et garantissant W »). Préfère la subordination ou la coordination équilibrée. Voir [references/structures.md](references/structures.md).

3. **N'empile pas les relatives.** Une ou deux relatives bien placées enrichissent. Au-delà, redistribue sur plusieurs phrases ou passe à la subordination.

4. **Élimine les adverbes en *-ment* parasites.** Véritablement, réellement, particulièrement, essentiellement, fondamentalement, profondément. Garde l'adverbe seulement quand il modifie le sens (« lentement », « hier »).

5. **Coupe les adjectifs intensifs vides.** « Véritable », « majeur », « stratégique », « incontournable », « clé », « fondamental », « essentiel », « crucial ». Si l'adjectif peut sauter sans changer le sens, il saute.

6. **Bannis les anglicismes IA.** « Implémenter » (mettre en place), « supporter » (prendre en charge), « adresser un problème » (traiter), « en charge de » (chargé de), « délivrer de la valeur » (apporter, livrer), « faire sens » (avoir du sens, être cohérent, être logique).

7. **Pas de verbes vidés.** « Permettre de », « constituer », « représenter », « s'inscrire dans », « se révéler », « s'avérer », « témoigner de ». Préfère un verbe concret, quitte à le placer dans une subordonnée. « Permet d'améliorer » devient « améliore ».

8. **Casse les fausses oppositions.** « Non pas X, mais Y », « ce n'est pas X, c'est Y », « il ne s'agit pas de X, mais de Y ». Énonce Y, éventuellement nuancé par une concessive (« bien que », « quoique »).

9. **Allège les connecteurs vides.** Au plus un « En effet », « Par ailleurs », « Ainsi », « De fait », « Notamment » en début de phrase par paragraphe. Utilise plutôt la subordination interne.

10. **Nomme l'acteur quand il existe.** Plutôt que « il est important de », « il convient de », « il faut », nomme la personne, l'équipe, le produit ou le mécanisme qui agit. Les impersonnelles restent valides quand aucun acteur n'existe (« il pleut », « il existe »).

11. **Sois concret.** Pas d'affirmations vagues (« les enjeux sont multiples », « les implications sont importantes »). Nomme l'enjeu, quitte à allonger la phrase pour le préciser. Évite aussi les béquilles prépositionnelles vides « au niveau de » et « en termes de », remplace par « pour », « sur », « côté » ou « en matière de ».

12. **Pas de méta-commentaire.** « Voyons cela ensemble », « Décortiquons », « Posons-nous la question », « Dans cet article, nous allons ». Supprime et entre dans le propos sans détour.

13. **Pas de tiret cadratin, pas de barre oblique entre deux mots, et deux-points comme point-virgule avec parcimonie.** Tiret cadratin = calque anglo-saxon, remplace par une virgule, un point ou des parenthèses. Barre oblique = anglicisme (« et/ou », « FR/EN »), reformule avec « ou » ou « et ». Le deux-points reste légitime devant une liste ou une explication, mais l'IA en abuse comme annonce avant de dire, alors garde-le quand il introduit vraiment quelque chose et coupe-le quand il ne fait qu'annoncer. Le point-virgule a deux emplois propres, équilibrer deux propositions liées et séparer les items complexes d'une liste, mais l'IA le sème là où un point ou une virgule coule mieux ; en prose française la charpente normale reste la virgule et le point, donc réserve le deux-points et le point-virgule aux cas qui les méritent vraiment. Voir [references/structures.md](references/structures.md).

14. **Respecte la typographie française.** Pas de virgule d'Oxford (« A, B et C », jamais « A, B, et C »). Deux insécables à distinguer, par la largeur et non par le comportement. L'**espace fine insécable** (U+202F, étroite) se place avant `;`, `!`, `?` et `%`, ainsi qu'à l'intérieur des guillemets français. L'**espace insécable normale** (U+00A0, largeur d'un mot) se place avant `:`, signe plus lourd. N'aplatis pas les deux sur une seule espace, la distinction est la forme correcte. Majuscules accentuées (« État », « À propos »). Espaces dans les nombres (« 1 000 000 »), les heures (« 14 h 30 ») et avant `%` (« 50 % »). Décimales avec virgule (« 3,14 »).

15. **Méfie-toi des faux-amis.** « Définitivement » = pour de bon (non « certainement »). « Éventuellement » = peut-être (non « finalement »). « Réaliser » = accomplir (non « se rendre compte »). « Supporter » = endurer (non « soutenir »). « Contrôler » = vérifier (non « maîtriser »). « Opportunité » = caractère opportun (non « occasion »). Voir [references/tournures.md](references/tournures.md).

16. **Évite les pièges grammaticaux.** « Pallier un défaut » (transitif direct, non « pallier à »). « Se rappeler quelque chose » (transitif direct, non « se rappeler de »). « Bien que » + subjonctif, jamais « malgré que ». « Après que » + indicatif.

17. **N'abuse pas des listes à puces.** Réserve-les aux énumérations vraiment parallèles (étapes numérotées, paramètres techniques, inventaire). Pour deux ou trois idées liées par un raisonnement, écris un paragraphe articulé. Quand une liste verticale s'impose, ponctue-la à la française. Introduis-la par un deux-points, commence chaque item par une minuscule, clos chaque item par un point-virgule et le dernier par un point.

18. **Varie le lexique et la syntaxe.** Pas de « solution » quatre fois en cinq phrases. Alterne avec « approche », « méthode », « dispositif », « outil ». Idem pour les verbes (« montrer » → « illustrer », « révéler », « mettre en évidence »). Évite aussi la répétition d'une même attaque syntaxique.

19. **Préfère l'inversion interrogative et l'infinitif aux « est-ce que » et aux « que » empilés.** « Faut-il agir ? » plutôt que « Est-ce qu'il faut agir ? ». « Je veux votre départ » plutôt que « Je veux que vous partiez ». Trois « que » dans la même phrase = copier-coller mental de l'anglais.

20. **Respecte la casse française.** Le français écrit en casse de phrase, pas en casse de titre à l'anglaise (« Les grandes tendances de l'année », non « Les Grandes Tendances de l'Année »). Ne capitalise pas non plus les noms communs en cours de phrase par calque (« l'intelligence artificielle », non « l'Intelligence Artificielle »). Distingue le sigle, épelé lettre à lettre et tout en capitales (SNCF, TGV, RATP), de l'acronyme, lu comme un mot, qui ne garde que l'initiale en capitale dès qu'il se lexicalise (Otan, Unesco, Osint) et passe en minuscules une fois devenu nom commun (laser, radar, sida). L'usage hésite sur ce dernier point, alors tranche une fois et reste cohérent dans un même texte. Voir [references/structures.md](references/structures.md).

## Italiques pour les termes étrangers

Mets en italique tout mot ou locution d'une langue étrangère non encore naturalisé en français, quelle que soit la langue d'origine. Le latin (_in fine_, _de facto_, _ad hoc_, _a fortiori_, _a priori_) et l'anglais technique (_skill_, _frontmatter_, _markdown_, _workflow_) sont les cas les plus fréquents, mais la règle vaut aussi pour l'italien (_a cappella_, _dolce vita_), l'espagnol, l'allemand et le reste. N'italicise pas en revanche les emprunts déjà assimilés et passés dans l'usage courant (« week-end », « football », « agenda », « scénario », « clown »), qui s'écrivent en romain.

## Vérifications rapides

Passe chaque point avant de livrer.

- Plus de trois phrases courtes consécutives sans subordination ? Reconstruis.
- Chaîne de participes (« permettant... offrant... garantissant ») ? Casse, garde au plus un participe.
- Trois relatives en cascade ? Redistribue.
- Adjectif intensif vide ? Supprime.
- Anglicisme IA ? Remplace par le verbe français équivalent.
- « faire sens », « au niveau de », « en termes de » ? « avoir du sens » ou « être cohérent », « pour » ou « côté », « en matière de ».
- Adverbe en *-ment* qui n'ajoute rien ? Coupe.
- « permet de », « constitue », « représente », « s'avère » ? Verbe d'action direct.
- « Non pas X, mais Y » ? Garde Y.
- Fragments publicitaires en cascade (« Pas de jargon. Pas de détour. Juste l'essentiel. ») ou balancement « Moins de X, plus de Y » ? Reconstruis une phrase pleine.
- Plus d'un connecteur d'ouverture par paragraphe ? Coupe l'excès.
- Trois adjectifs synonymes alignés ? Réduis à deux ou un.
- Rythme en triade systématique (« X, Y et Z » et trois propositions cadencées à répétition) ? Casse la cadence, fais varier le nombre d'éléments.
- Tiret cadratin (—) ? Virgule, point ou parenthèses.
- Deux-points en pure annonce IA, sans liste ni explication derrière ? Coupe ou reformule. Devant une liste ou une explication, garde-le.
- Point-virgule là où un point ou une virgule passerait mieux ? Remplace. Garde-le pour équilibrer deux propositions liées ou ponctuer une liste verticale.
- Barre oblique entre deux mots ? « ou », « et », ou reformule.
- Pléonasme (« voire même », « au jour d'aujourd'hui », « comme par exemple ») ? Coupe.
- Verbe de redéfinition (« réinventer », « repenser », « révolutionner ») ? Nomme ce qui change concrètement.
- Terme étranger non naturalisé sans italique (latin, anglais, italien et autres) ? Italicise (_in fine_, _skill_, _a cappella_) ou remplace, sauf emprunt assimilé (« week-end »).
- Clôture cliché (« en définitive », « au final », « pour conclure ») ? Coupe.
- Nominalisation lourde ? Verbe.
- Virgule d'Oxford ? Supprime.
- Majuscule non accentuée (« Etat », « A propos ») ? Restaure (« État », « À propos »).
- Casse de titre anglaise ou nom commun capitalisé en pleine phrase (« les Grandes Tendances », « l'Intelligence Artificielle ») ? Casse de phrase.
- Sigle épelé écrit en minuscules, ou acronyme lexicalisé tout en capitales ? SNCF reste en capitales (épelé), Osint prend la seule initiale (lu comme un mot).
- Point décimal anglo-saxon (« 3.14 ») ou séparateur de milliers virgule (« 1,000,000 ») ? Inverse.
- Heure ou pourcentage collés (« 14h30 », « 50% ») ? Espace insécable.
- Insécable normale (U+00A0) là où la fine (U+202F) est requise, avant `;`, `!`, `?`, `%` ou dans les guillemets, ou l'inverse avant `:` ? Corrige la largeur.
- Faux-ami au sens anglais ? Remplace.
- « Pallier à », « se rappeler de », « malgré que » + subjonctif, « après que » + subjonctif ? Corrige.
- Puces là où un paragraphe articulé suffit ? Reconvertis en prose.
- Liste verticale mal ponctuée ? Deux-points d'introduction, items en minuscule, point-virgule à chaque item, point au dernier.
- Mot ou structure répétés à courte distance ? Varie.
- « Est-ce que » à l'écrit soutenu ? Inverse.
- Trois « que » subordonnants dans une phrase ? Infinitif, nominalisation ou apposition.
- Ouverture parasite (« À noter que », « Sachez que », « C'est pourquoi » en attaque, « Plus encore », « Mieux », « Dans un monde où », « Que vous soyez X ou Y ») ? Coupe ou reformule.
- Pseudo-clivée d'annonce (« Ce qui est intéressant, c'est que ») ? Énonce directement.
- Question-relance en transition (« Le résultat ? », « La bonne nouvelle ? », « Le verdict ? ») ? Énonce directement, sans suspense.
- Gras d'emphase semé dans la prose ? Comme pour l'italique, si le mot doit ressortir, change la phrase.
- Émoji ou pictogramme dans la prose (coches, fusées) ? Supprime, le mot porte le sens.

## Notation

Note de 1 à 10 sur chaque axe.

| Axe | Question |
| --- | --- |
| Articulation | Les idées s'enchaînent-elles par subordination ou par hachage ? |
| Densité lexicale | Vocabulaire précis sans être pédant ? |
| Concret | Acteurs, chiffres, objets précis ? |
| Authenticité | Sonne français écrit, pas traduit de l'anglais ? |
| Économie | Reste-t-il du gras à couper sans casser le rythme ? |

En dessous de 35 sur 50, réécris.

## Lexique cible

Registre soutenu courant (Le Monde, Libération, essai contemporain). Vocabulaire riche mais courant. Ni télégraphique ni archaïsant.

## Exemples

Voir [references/exemples.md](references/exemples.md) pour vingt-six paires avant et après.

## Attribution

Adaptation française inspirée de [stop-slop](https://github.com/hardikpandya/stop-slop) (Hardik Pandya, MIT).
