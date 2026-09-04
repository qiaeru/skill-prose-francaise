---
name: rediger-prose-francaise
description: Supprime les tics d'écriture IA en français. À utiliser pour rédiger, éditer ou relire un texte FR, y compris les libellés d'interface et les fichiers de locales (i18n). Impose une prose articulée par subordination plutôt que par hachage, et applique la typographie française.
---

# Rédiger une prose française

Le défaut principal d'un texte IA en français n'est pas l'emphase anglo-saxonne mais le hachage. L'IA aligne des phrases courtes calquées sur l'anglais alors que le français écrit attend des phrases plus longues, articulées par subordination. Ce skill corrige ce défaut et les autres familles de tics qui trahissent la machine.

## Quand l'appliquer

Dès que la sortie attendue est un texte en français à registre soutenu courant (article, essai, courriel professionnel, documentation, communiqué, billet). N'applique pas ce skill à la fiction, à la poésie, au juridique pur ou à l'administratif normalisé, où plusieurs règles deviennent contre-productives. Pour les libellés d'interface et les fichiers de locales, suis le régime décrit dans [references/interfaces.md](references/interfaces.md).

## Déroulé

Pour une relecture ou une réécriture complète :

1. lis le texte en entier avant de corriger, pour repérer les tics de structure (hachage, répétitions, cadence) qui n'apparaissent pas phrase par phrase ;
2. corrige la forme sans toucher au fond, c'est-à-dire sans ajouter le moindre chiffre, cause, acteur ou exemple absent du texte source, et lorsque la source reste vague, garde-la sobre ou signale le flou à l'auteur plutôt que de le combler ;
3. garde une longueur voisine de l'original, puisque la subordination rassemble des phrases sans en ajouter ;
4. applique les règles centrales, en ouvrant les références au besoin ;
5. passe les vérifications rapides sur le résultat et compte celles qui échouent encore ;
6. note sur la grille des cinq axes, réécris une fois si une vérification échoue encore ou si le total tombe sous 35 sur 50, puis livre le texte avec sa note et le nombre de vérifications restées en échec ;
7. relis ta propre sortie avec les mêmes vérifications, car le texte corrigé doit respecter les règles qu'il impose.

Pour un texte court (courriel, message, paragraphe isolé), applique les règles sans dérouler la grille de notation.

## Cas particulier : interfaces logicielles

Un fichier de libellés ou de locales mélange des fragments (boutons, étiquettes de champ) et des phrases complètes, qui ne relèvent pas des mêmes règles. Le régime à appliquer à chaque unité est décrit dans [references/interfaces.md](references/interfaces.md), à ouvrir dès que le texte vient d'une interface.

## Règles centrales

1. **Construis des phrases qui coulent par subordination.** Articule les idées liées par « alors que », « tandis que », « puisque », « bien que », « dès lors que », « pourvu que », « quoique », « lorsque », « dès que », « après que », « avant que », « si bien que », « de sorte que » ou « parce que ». N'enchaîne pas deux phrases courtes coordonnées par un point ou par « et » quand une seule phrase subordonnée fait le travail. C'est le tic IA n°1 en français. Le tic est l'enfilade, non la phrase courte, si bien qu'une phrase brève après une longue respire, alors qu'un même subordonnant répété de phrase en phrase (« parce que » partout) devient un tic à son tour. Varie le liant et la longueur.

2. **Évite les chaînes de participes présents.** Un ou deux participes par phrase restent naturels. Le tic, c'est l'enfilade (« X, permettant Y, offrant Z et garantissant W »). Préfère la subordination ou la coordination équilibrée. Voir [references/structures.md](references/structures.md).

3. **N'empile pas les relatives.** Une ou deux relatives bien placées enrichissent. Au-delà, redistribue sur plusieurs phrases ou passe à la subordination.

4. **Élimine les adverbes en _-ment_ parasites.** Véritablement, réellement, particulièrement, essentiellement, fondamentalement, profondément. Garde l'adverbe seulement quand il modifie le sens (« lentement », « hier »).

5. **Coupe les adjectifs intensifs vides.** « Véritable », « majeur », « stratégique », « incontournable », « clé », « fondamental », « essentiel », « crucial ». Si l'adjectif peut sauter sans changer le sens, il saute.

6. **Bannis les anglicismes IA.** « Implémenter » (mettre en place), « supporter » (prendre en charge), « adresser un problème » (traiter), « en charge de » (chargé de), « délivrer de la valeur » (apporter, livrer), « faire sens » (avoir du sens, être cohérent, être logique).

7. **Pas de verbes vidés.** « Permettre de », « constituer », « représenter », « s'inscrire dans », « se révéler », « s'avérer », « témoigner de ». Préfère un verbe concret, quitte à le placer dans une subordonnée. « Permet d'améliorer » devient « améliore ».

8. **Casse les fausses oppositions.** « Non pas X, mais Y », « ce n'est pas X, c'est Y », « il ne s'agit pas de X, mais de Y ». Énonce Y, éventuellement nuancé par une concessive (« bien que », « quoique »). Le balancement « non seulement X, mais aussi Y » relève du même réflexe, écris « X et Y » sauf gradation réelle.

9. **Allège les connecteurs vides.** Au plus un « En effet », « Par ailleurs », « Ainsi », « De fait », « Notamment » en début de phrase par paragraphe. Utilise plutôt la subordination interne.

10. **Nomme l'acteur quand il existe.** Plutôt que « il est important de », « il convient de », « il faut », nomme la personne, l'équipe, le produit ou le mécanisme qui agit. Les impersonnelles restent valides quand aucun acteur n'existe (« il pleut », « il existe »), et quand le texte ne désigne personne, garde la tournure plutôt que d'inventer un sujet.

11. **Sois concret.** Pas d'affirmations vagues (« les enjeux sont multiples », « les implications sont importantes »), pas de quantificateur creux (« un large éventail de », « une multitude de ») ni de « fluide » passe-partout. Nomme l'enjeu avec ce que le texte fournit, sans inventer de chiffre ni de cause pour faire concret. Évite aussi les béquilles prépositionnelles vides « au niveau de », « en termes de » et « au sein de », remplace par « pour », « sur », « côté », « en matière de » ou « dans ».

12. **Pas de méta-commentaire.** « Voyons cela ensemble », « Décortiquons », « Posons-nous la question », « Plongeons dans le sujet », « Plongée au cœur de », « Dans cet article, nous allons ». Supprime et entre dans le propos sans détour.

13. **Pas de tiret cadratin, pas de barre oblique entre deux mots, et parcimonie sur le deux-points, le point-virgule et le point d'exclamation.** Le cadratin devient virgule, point ou parenthèses, la barre oblique (« et/ou », « FR/EN ») devient « ou » ou « et ». Garde le deux-points devant une vraie liste ou explication, réserve le point-virgule à deux propositions équilibrées ou aux items d'une liste, et l'exclamation aux phrases qui exclament. La famille « Ponctuation » des vérifications et [references/structures.md](references/structures.md) portent le détail.

14. **Respecte la typographie française.** Pas de virgule d'Oxford. Fine insécable (U+202F) avant `;`, `!`, `?`, `%` et à l'intérieur des guillemets français, insécable normale (U+00A0) avant `:`. Majuscules accentuées, guillemets français, apostrophe et points de suspension typographiques dans un rendu soigné, nombres, heures, pourcentages et ordinaux composés à la française. La famille « Typographie » des vérifications et [references/structures.md](references/structures.md) portent le détail.

15. **Méfie-toi des faux-amis.** « Définitivement » = pour de bon (non « certainement »). « Éventuellement » = peut-être (non « finalement »). « Réaliser » = accomplir (non « se rendre compte »). « Supporter » = endurer (non « soutenir »). « Contrôler » = vérifier (non « maîtriser »). « Opportunité » = caractère opportun (non « occasion »). Voir [references/tournures.md](references/tournures.md).

16. **Évite les pièges grammaticaux.** « Pallier un défaut » (transitif direct, non « pallier à »). « Se rappeler quelque chose » (transitif direct, non « se rappeler de »). « Bien que » + subjonctif, jamais « malgré que ». « Après que » + indicatif.

17. **N'abuse pas des listes à puces.** Réserve-les aux énumérations vraiment parallèles (étapes numérotées, paramètres techniques, inventaire). Pour deux ou trois idées liées par un raisonnement, écris un paragraphe articulé. Quand une liste verticale s'impose, ponctue-la à la française. Introduis-la par un deux-points, commence chaque item par une minuscule, clos chaque item par un point-virgule et le dernier par un point.

18. **Varie le lexique et la syntaxe.** Pas de « solution » quatre fois en cinq phrases. Alterne avec « approche », « méthode », « dispositif », « outil ». Idem pour les verbes (« montrer » → « illustrer », « révéler », « mettre en évidence »). Évite aussi la répétition d'une même attaque syntaxique, du même subordonnant à chaque phrase et de l'anaphore « ce dernier » servie à chaque reprise d'un nom.

19. **Préfère l'inversion interrogative et l'infinitif aux « est-ce que » et aux « que » empilés.** « Faut-il agir ? » plutôt que « Est-ce qu'il faut agir ? ». « Je veux votre départ » plutôt que « Je veux que vous partiez ». Trois « que » dans la même phrase = copier-coller mental de l'anglais.

20. **Respecte la casse française.** Casse de phrase, pas casse de titre à l'anglaise (« Les grandes tendances de l'année »), et pas de nom commun capitalisé en cours de phrase (« l'intelligence artificielle »). Le sigle épelé garde ses capitales (SNCF), l'acronyme lexicalisé ne garde que l'initiale (Otan, Osint) et le nom commun passe en minuscules (laser), l'usage hésitant, tranche une fois par texte. Mois et jours en minuscules (« le 5 juillet », « chaque lundi »). Voir [references/structures.md](references/structures.md).

21. **Bannis le registre d'assistant.** Trois résidus trahissent la machine sous la prose : la flagornerie d'ouverture (« Excellente question ») et l'accord réflexe, à couper pour entrer dans le propos, les formules de service en tête ou en clôture (« J'espère que ce message vous trouve bien », « N'hésitez pas à revenir vers moi »), dont tu ne gardes que la salutation utile, et les mentions résiduelles du modèle (« En tant que modèle de langage », « à la date de ma dernière mise à jour »), à supprimer sans reformuler.

## Italiques pour les termes étrangers

Mets en italique tout mot ou locution d'une langue étrangère non encore naturalisé en français, quelle que soit la langue d'origine. Le latin (_in fine_, _de facto_, _ad hoc_, _a fortiori_, _a priori_) et l'anglais technique (_skill_, _frontmatter_, _markdown_, _workflow_) sont les cas les plus fréquents, mais la règle vaut aussi pour l'italien (_a cappella_, _dolce vita_), l'espagnol, l'allemand et le reste. N'italicise pas en revanche les emprunts déjà assimilés et passés dans l'usage courant (« week-end », « football », « agenda », « scénario », « clown »), qui s'écrivent en romain.

## Vérifications rapides

Passe chaque famille avant de livrer. La liste fait partie du skill au même titre que les règles centrales, puisqu'elle couvre aussi des tics sans règle numérotée (pléonasmes, verbes de redéfinition, clôtures clichées, gras d'emphase, émojis).

### Fidélité au texte source

- Chiffre, cause, acteur ou exemple absent de la source ? Retire-le, ou signale le flou à l'auteur.
- Texte nettement plus long que l'original, ou sens déplacé par la réécriture ? Resserre et rétablis.

### Architecture de la phrase

- Plus de trois phrases courtes consécutives sans subordination ? Reconstruis.
- Même subordonnant à chaque phrase (« parce que » partout), ou plus une seule phrase brève sur tout un paragraphe ? Varie le liant et la longueur.
- Chaîne de participes (« permettant... offrant... garantissant ») ? Casse, garde au plus un participe.
- Trois relatives en cascade ? Redistribue.
- « Non pas X, mais Y » ? Garde Y.
- « Non seulement X, mais aussi Y » sans gradation réelle ? « X et Y ».
- Fragments publicitaires en cascade (« Pas de jargon. Pas de détour. Juste l'essentiel. ») ou balancement « Moins de X, plus de Y » ? Reconstruis une phrase pleine.
- Rythme en triade systématique (« X, Y et Z » et trois propositions cadencées à répétition) ? Casse la cadence, fais varier le nombre d'éléments.
- Nominalisation lourde ? Verbe.
- « Est-ce que » à l'écrit soutenu ? Inverse.
- Trois « que » subordonnants dans une phrase ? Infinitif, nominalisation ou apposition.
- Puces là où un paragraphe articulé suffit ? Reconvertis en prose.
- Liste verticale mal ponctuée ? Deux-points d'introduction, items en minuscule, point-virgule à chaque item, point au dernier.

### Lexique

- Adjectif intensif vide ? Supprime.
- Trois adjectifs synonymes alignés ? Réduis à deux ou un.
- Anglicisme IA ? Remplace par le verbe français équivalent.
- « faire sens », « au niveau de », « en termes de », « au sein de » ? « avoir du sens » ou « être cohérent », « pour » ou « côté », « en matière de », « dans » ou « chez ».
- Quantificateur vague (« un large éventail de », « une multitude de ») ou « fluide » passe-partout ? Dis combien, ou en quoi.
- Adverbe en _-ment_ qui n'ajoute rien ? Coupe.
- « permet de », « constitue », « représente », « s'avère » ? Verbe d'action direct.
- Verbe de redéfinition (« réinventer », « repenser », « révolutionner ») ? Nomme ce qui change concrètement, ou laisse l'auteur le nommer.
- Pléonasme (« voire même », « au jour d'aujourd'hui », « comme par exemple ») ? Coupe.
- Faux-ami au sens anglais ? Remplace.
- « Pallier à », « se rappeler de », « malgré que » + subjonctif, « après que » + subjonctif ? Corrige.
- Mot ou structure répétés à courte distance, ou « ce dernier » à chaque reprise d'un nom ? Varie.

### Rhétorique et transitions

- Plus d'un connecteur d'ouverture par paragraphe ? Coupe l'excès.
- Ouverture parasite (« À noter que », « Sachez que », « C'est pourquoi » en attaque, « Plus encore », « Mieux », « Dans un monde où », « Que vous soyez X ou Y », « Que ce soit X ou Y », « Honnêtement », « Soyons clairs », « Imaginez », « Le truc, c'est que ») ? Coupe ou reformule.
- Pseudo-clivée d'annonce (« Ce qui est intéressant, c'est que ») ? Énonce directement.
- Question-relance en transition (« Le résultat ? », « La bonne nouvelle ? », « Le verdict ? ») ? Énonce directement, sans suspense.
- Clôture cliché (« en définitive », « au final », « en fin de compte », « pour conclure ») ? Coupe.

### Ponctuation

- Tiret cadratin (—) ? Virgule, point ou parenthèses.
- Deux-points en pure annonce IA, sans liste ni explication derrière ? Coupe ou reformule. Devant une liste ou une explication, garde-le.
- Titre formulaïque en deux volets (« X : le guide complet », « Y : pourquoi tout change ») ? Reforme un titre plein, sans balancier.
- Point-virgule là où un point ou une virgule passerait mieux ? Remplace. Garde-le pour équilibrer deux propositions liées ou ponctuer une liste verticale.
- Barre oblique entre deux mots ? « ou », « et », ou reformule.
- Points d'exclamation d'enthousiasme (« C'est parti ! », « Bonne nouvelle ! ») ? Réserve l'exclamation aux phrases qui exclament vraiment.
- Virgule d'Oxford ? Supprime.

### Typographie et mise en forme

- Guillemets droits ("...") autour d'une citation ? Guillemets français avec leurs fines insécables.
- Apostrophe droite (') ou points de suspension en trois points tapés (« ... ») dans un rendu soigné ? Apostrophe typographique (’) et caractère unique (…), la source _markdown_ pouvant garder les formes dactylographiées.
- Majuscule non accentuée (« Etat », « A propos ») ? Restaure (« État », « À propos »).
- Casse de titre anglaise ou nom commun capitalisé en pleine phrase (« les Grandes Tendances », « l'Intelligence Artificielle ») ? Casse de phrase.
- Mois ou jour capitalisé en cours de phrase (« le 5 Juillet », « chaque Lundi ») ? Minuscule (« le 5 juillet », « chaque lundi »).
- Ordinal en « ème » (« 2ème », « 1ère ») ? Abréviations réglées (« 2e », « 1re », « 1er », « XXIe siècle »).
- Sigle épelé écrit en minuscules, ou acronyme lexicalisé tout en capitales ? SNCF reste en capitales (épelé), Osint prend la seule initiale (lu comme un mot).
- Point décimal anglo-saxon (« 3.14 ») ou séparateur de milliers virgule (« 1,000,000 ») ? Inverse.
- Heure ou pourcentage collés (« 14h30 », « 50% ») ? Espace insécable.
- Insécable normale (U+00A0) là où la fine (U+202F) est requise, avant `;`, `!`, `?`, `%` ou dans les guillemets, ou l'inverse avant `:` ? Corrige la largeur.
- Terme étranger non naturalisé sans italique (latin, anglais, italien et autres) ? Italicise (_in fine_, _skill_, _a cappella_) ou remplace, sauf emprunt assimilé (« week-end »).
- Gras d'emphase semé dans la prose, ou paragraphe mué en liste d'intitulés en gras suivis d'un deux-points (« **Productivité :** ... ») ? Comme pour l'italique, si le mot doit ressortir, change la phrase, ou reviens à la prose articulée.
- Émoji ou pictogramme dans la prose (coches, fusées) ? Supprime, le mot porte le sens.

### Registre d'assistant

- Ouverture flagorneuse (« Excellente question », « Très bonne remarque ») ou accord réflexe avant de répondre ? Coupe et entre dans le propos.
- Formule de service en tête ou en clôture (« J'espère que ce message vous trouve bien », « N'hésitez pas à revenir vers moi », « En espérant que cela vous aide », « Souhaitez-vous que je développe ? ») ? Garde la salutation utile, coupe le reste.
- Mention résiduelle de modèle (« En tant que modèle de langage », « je n'ai pas d'opinion personnelle », « à la date de ma dernière mise à jour ») ? Supprime sans reformuler.

## Notation

Compte d'abord les vérifications rapides encore en échec sur le texte livré, parce que la note seule reste indulgente envers sa propre réécriture. Note ensuite de 1 à 10 sur chaque axe.

| Axe | Question |
| --- | --- |
| Articulation | Les idées s'enchaînent-elles par subordination ou par hachage ? |
| Densité lexicale | Vocabulaire précis sans être pédant ? |
| Concret | Acteurs, chiffres, objets précis, tirés de la source ? |
| Authenticité | Sonne français écrit, pas traduit de l'anglais ? |
| Économie | Reste-t-il du gras à couper sans casser le rythme ? |

Réécris une seule fois si une vérification échoue encore ou si le total tombe sous 35 sur 50, puis livre la meilleure version avec sa note et le nombre de vérifications restées en échec, sans boucler.

## Lexique cible

Registre soutenu courant (Le Monde, Libération, essai contemporain). Vocabulaire riche mais courant. Ni télégraphique ni archaïsant.

## Exemples

Voir [references/exemples.md](references/exemples.md) pour des paires avant et après, une par famille de tics.

## Attribution

Adaptation française inspirée de [stop-slop](https://github.com/hardikpandya/stop-slop) (Hardik Pandya, MIT).
