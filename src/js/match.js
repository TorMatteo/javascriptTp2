class Match {

    /**
     * 
     * @param {Equipe} equipeDomicile 
     * @param {Equipe} equipeExterieur 
     */
    constructor(equipeDomicile, equipeExterieur) {
        this.equipe1 = equipeDomicile;
        this.equipe2 = equipeExterieur;
        this.nbButs1 = 0;
        this.nbButs2 = 0;
        this.estJoue = false;
    }

    jouer() {
        this.estJoue = true;
        this.nbButs1 = Math.floor(Math.random()*6);
        this.nbButs2 = Math.floor(Math.random()*5);
        this.equipe1.miseAJour(this.nbButs1, this.nbButs2);
        this.equipe2.miseAJour(this.nbButs2, this.nbButs1);
    }

    toString() {
        return this.equipe1.nom+"   "+this.nbButs1+" - "+this.nbButs2+"   "+this.equipe2.nom;
    }

}
