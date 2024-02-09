// variables correspondant à des balises importantes
const listeEquipes = document.getElementById('liste-equipes');
const equipesEngagees = document.getElementById('equipes-engagees');
const boutonLancer = document.getElementById('lancer-championnat');
const boutonJourneeSuivante = document.getElementById('journee-suivante');
const boutonJouerJournee = document.getElementById('jouer-journee');
const blocEquipes = document.getElementById('bloc-equipes');
const blocJournee = document.getElementById('bloc-journee');
const blocClassement = document.getElementById('bloc-classement');
const numJournee = document.getElementById('num-journee');
const boutonPlus = document.getElementById('plus');
const boutonMoins = document.getElementById('moins');

// la variable tableau des nom des équipes par défaut
let tabNomEquipes = ["PSG", "ASM", "OM", "ASSE", "OL", "FCN", "EAG", "RCS"];

/** La variable Championnat
 * @type {Championnat} chp
 */
let chp;

// Fonctions utiles
function afficher(element) {
    element.classList.remove("cache")
}

function cacher(element) {
    element.classList.add("cache")
}


// les styles d'affichages initiaux

// Blocs équipes, journée et classement
// à compléter
cacher(blocJournee);
cacher(blocClassement);
// div equipesEngagees et listeEquipes
// à compléter
afficher(blocEquipes);
afficher(equipesEngagees);
cacher(listeEquipes);

// les images plus et moins
// à compléter
afficher(boutonPlus);
cacher(boutonMoins);

// les boutons journée suivante et jouer journée
// à compléter
cacher(boutonJourneeSuivante);
afficher(boutonJouerJournee)
// on remplit les div des équipes engagées
// à compléter
for (let i = 0; i < 8; i++) {
    document.getElementById("nom-eq" + (i + 1)).value = tabNomEquipes[i];
}
equipesEngagees.innerHTML = tabNomEquipes.join(" - ");

// programmation des gestions d'événements par des fonctions anonymes

// clic sur l'image plus
boutonPlus.addEventListener("click", function () {
    cacher(boutonPlus);
    afficher(boutonMoins);
    afficher(listeEquipes);
    cacher(equipesEngagees);

});

// clic sur l'image moins
boutonMoins.addEventListener("click", function () {
    afficher(boutonPlus);
    cacher(boutonMoins);
    cacher(listeEquipes);
    for (let i = 0; i < 8; i++) {
        tabNomEquipes[i] = document.getElementById("nom-eq" + (i + 1)).value;
    }
    equipesEngagees.innerHTML = tabNomEquipes.join(" - ");
    afficher(equipesEngagees);
});

// clic sur le bouton lancer championnat
boutonLancer.addEventListener("click", function () {
    let classeEquipe = [];
    for (let i = 0; i < 8; i++) {
        classeEquipe[i] = new Equipe(tabNomEquipes[i]);
    }
    chp = new Championnat(classeEquipe);
    chp.afficherClassement();
    numJournee.innerHTML = "journée n°" + chp.numJournee;
    chp.afficherJournee();
    afficher(boutonJouerJournee);
    cacher(boutonJourneeSuivante);
    afficher(blocClassement);
    afficher(blocJournee);
    cacher(blocEquipes);
    cacher(boutonLancer);

});

boutonJouerJournee.addEventListener("click", function () {
    chp.jouerJournee();
    chp.afficherJournee();
    cacher(boutonJouerJournee);
    if (chp.numJournee < 14) {
        afficher(boutonJourneeSuivante);
    }
    chp.classerEquipes()
    chp.afficherClassement();
});

boutonJourneeSuivante.addEventListener("click", function () {
    chp.numJournee++;
    chp.afficherJournee();
    numJournee.innerHTML = "journée n°" + chp.numJournee;
    afficher(boutonJouerJournee);
    cacher(boutonJourneeSuivante);
});
