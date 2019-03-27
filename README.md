# ![](ressources/logo.jpeg) Prog web client riche - JavaScript 

### IUT Montpellier-Sète – Département Informatique

## TD2
#### _Thème : objets, classes_

Cliquez sur le lien ci-dessous pour faire, dans un dossier public_html/JS/TD2, votre fork privé du TD2 (**attention, pas de fork à la main !**):

https://classroom.github.com/a/TiyLfsDY

la version [pdf](ressources/TD1_dynamiser_une_page_web.pdf)

## INTRODUCTION

Pour ce TD2, vous disposez d’une architecture web comprenant un fichier html, un fichier css et quelques autres fichiers. Installez cette architecture dans un dossier JS/TD2 de votre public_html.

Dans le TD1 nous avons eu une approche fonctionnelle de JavaScript : tout notre code a été construit autour de quelques fonctions, et c’était suffisant. 

Dans ce TD2, vous allez devoir construire des objets JavaScript, sans effet immédiat sur le navigateur. La console du navigateur sera par contre d’une grande utilité. La touche F12 sera votre amie … 

Quelques éléments de compréhension extra-JavaScript sont utiles  pour réaliser ce TD :
Dans un championnat de foot à 8 équipes, chaque équipe rencontre chacune des sept autres équipes deux fois (match aller et match retour) : une fois sur son terrain (à domicile) et une fois sur le terrain de l’autre équipe (à l’extérieur).

Un championnat à 8 équipes comporte donc 14 journées, chaque journée étant composée de 4 matchs. Le planning de ces 14 journées est donné dans le tableau suivant :


|   Journée    | Match n°1 | Match n°2 | Match n°3 | Match n°4 |
| :----------: | :-------: | :-------: | :-------: | :-------: | 
| Journée n°01 | E1 – E2   | E3 – E4   | E5 – E6   | E7 – E8   |
| Journée n°02 | E1 – E3   | E2 – E4   | E5 – E7   | E6 – E8   |
| Journée n°03 | E4 – E1   | E3 – E2   | E8 – E5   | E7 – E6   |
| Journée n°04 | E1 – E5   | E2 – E6   | E3 – E7   | E4 – E8   |
| Journée n°05 | E8 – E1   | E2 – E7   | E6 – E3   | E4 – E5   |
| Journée n°06 | E6 – E1   | E5 – E2   | E8 – E3   | E7 – E4   |
| Journée n°07 | E1 – E7   | E2 – E8   | E3 – E5   | E4 – E6   |
| Journée n°08 | E3 – E1   | E4 – E2   | E7 – E5   | E8 – E6   |
| Journée n°09 | E1 – E4   | E2 – E3   | E5 – E8   | E6 – E7   |
| Journée n°10 | E5 – E1   | E6 – E2   | E7 – E3   | E8 – E4   |
| Journée n°11 | E2 – E1   | E4 – E3   | E6 – E5   | E8 – E7   |
| Journée n°12 | E1 – E8   | E7 – E2   | E3 – E6   | E5 – E4   |
| Journée n°13 | E1 – E6   | E2 – E5   | E3 – E8   | E4 – E7   |
| Journée n°14 | E7 – E1   | E8 – E2   | E5 – E3   | E6 – E4   |

Ce planning est arrangé pour qu’une équipe ne joue pas plus de 2 matchs consécutifs à domicile (idem à l’extérieur).

Chaque match verra son issue déterminée par un tirage au sort :
- l’équipe jouant à domicile marque un certain nombre de buts ;
- idem pour l’équipe jouant à l’extérieur ;
- en cas de victoire d’une équipe, celle-ci marque 3 points, et l’autre 0 point ; en cas de match nul, chaque équipe marque 1 point ;

On comptabilise en permanence le nombre total de buts marqués par une équipe, ainsi que le nombre total de buts encaissés. Cela peut servir, au niveau du classement, à départager les équipes ayant le même nombre de points.

Les critères pour le classement sont, dans l’ordre : 
- le nombre total de points ;
- la différence entre buts marqués et buts encaissés ;
- la meilleure attaque (nombre de buts marqués) ;
- un nombre aléatoire entre 0 et 1 qui départage les ex-aequo éventuels.


## EXERCICE 1 - l'objet Equipe

Une Equipe aura comme attributs : 

- son nom ;
- son classement ;
- son nombre de points ;
- son nombre de matchs gagnés (pour enrichir l’affichage) ;
- son nombre de matchs nuls (idem) ;
- son nombre de match perdus (idem) ;
- son nombre de buts pour (les buts marqués) ;
- son nombre de buts contre (les buts encaissés) ;
- son « évaluation » qui permettra de définir son classement.

Exemple de calcul d’évaluation : une équipe qui aurait cet état :

21 points, 23 buts pour, 11 buts contre

aura pour évaluation le nombre obtenu par le calcul

`21 * 10000 + (23 – 11) * 100 + 23`, ce qui donne `211223` et ce nombre donne donc la priorité aux points, puis à la différence de buts (buts marqués - buts encaissés), puis à l’attaque (buts marqués). Pour parer à l’éventualité de deux ex-aequo, on complète toujours en ajoutant un nombre aleatoire entre 0 et 1. Ainsi, il n'y aura jamais d'égalité parfaite et les équipes auront toutes un rang différent.

1. Complétez le constructeur donné dans le fichier `equipe.js`. Vous initialiserez l’attribut `evaluation` à une valeur donnée par `Math.random()` (nombre aléatoire entre 0 et 1).

2. Incorporez le fichier `equipe.js` avant `</body>` par 

		<script type="text/javascript" src="js/equipe.js"></script>

3. actualisez la page `championnat.html` et testez le constructeur dans la console, par exemple en créant une nouvelle équipe par une instruction comme 

		let eq1 = new Equipe("PSG"); 

   puis affichez `eq1` dans la console (`eq1` et `Entrée`). Vous pouvez « déplier » l’objet créé et examiner ce qui s’affiche. 

4. Codez la fonction `evaluer()` comme c’est suggéré en page précédente. Testez cette fonction en changeant « à la main » les valeurs de certains attributs de `eq1` (dans la console) et lancez l’exécution de `eq1.evaluer()` dans la console également. Réaffichez `eq1` pour voir le résultat.

5. Codez la fonction `affichage()`, équivalent d’un `toString()` et qui donnera le résumé de l’état actuel de l’équipe. Ci-dessous une succession de commandes lancées dans la console, dont l’affichage final :