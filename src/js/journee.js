class Journee {

    /**
     * 
     * @param {Match[]} matchs 
     */
    constructor(matchs) {
        this.matchs = matchs;
        this.estJouee = false
    }

    afficher() {
        for(let i = 0 ; i < 4 ; i++){
            const div = document.getElementById("match"+(i+1));
            div.innerHTML = this.matchs[i].toString();
        }
    }

    jouer() {
        this.estJouee = true;
        for(let i = 0 ; i < 4 ; i++){
            this.matchs[i].jouer()
        }
    }

}
