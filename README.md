# ![](ressources/logo.jpeg) Prog web client riche - JavaScript 

### IUT Montpellier-Sète – Département Informatique

## TD2
#### _Thème : objets, classes_

Cliquez sur le lien ci-dessous pour faire, dans un dossier public_html/JS/TD1, votre fork privé du TD1 (**attention, pas de fork à la main !**):

https://classroom.github.com/a/1pEh7RIt

la version [pdf](ressources/TD1_dynamiser_une_page_web.pdf)

## INTRODUCTION

Pour ce TD2, vous disposez d’une architecture web comprenant un fichier html, un fichier css et quelques autres fichiers. Installez cette architecture dans un dossier JS/TD2 de votre public_html.
Dans le TD1 nous avons eu une approche fonctionnelle de JavaScript : tout notre code a été construit autour de quelques fonctions, et c’était suffisant. 
Dans ce TD2, vous allez devoir construire des objets JavaScript, sans effet immédiat sur le navigateur. La console sera par contre d’une grande utilité. La touche F12 sera votre amie … 
Quelques éléments de compréhension extra-JavaScript sont utiles  pour réaliser ce TD :
Dans un championnat de foot à 8 équipes, chaque équipe rencontre chacune des sept autres équipes deux fois (match aller et match retour) : une fois sur son terrain (à domicile) et une fois sur le terrain de l’autre équipe (à l’extérieur).
Un championnat à 8 équipes comporte donc 14 journées, chaque journée étant composée de 4 matchs. Le planning de ces 14 journées est donné dans le tableau suivant :


|              | Match n°1 | Match n°2 | Match n°3 | Match n°4 |
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
