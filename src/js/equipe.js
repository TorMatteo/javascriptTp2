class Equipe {

    constructor(nom) {
        this.nom = nom;
        this.classement = 1;
        this.points = 0;
        this.nbMatchsGagnes = 0;
        this.nbMatchsNuls = 0;
        this.nbMatchsPerdus = 0;
        this.nbButsPour = 0;
        this.nbButsContre = 0;
        this.nbAleatoire = Math.random();
    }

    /**
     * Compare deux équipes passées en argument selon les critères du classement.
     * Les équipes sont comparées selon leur nombre de points, puis en cas d'égalité selon leur différence de buts, puis en cas
     * d'égalité selon leur nombre de buts marqués. En cas d'égalité complète, elles sont départagées en fonction
     * de la valeur aléatoire générée à la création de chaque équipe.
     *
     * @param {Equipe} eq1 une équipe du championnat
     * @param {Equipe} eq2 une équipe du championnat
     * @return {Number} une valeur strictement négative si eq2 est devant eq1, une valeur strictement positive si
     * eq1 est devant eq2, 0 si eq1 === eq2.
     */
    static compare(eq1, eq2) {
        if (eq1.points === eq2.points) {
            if ((eq1.nbButsPour - eq1.nbButsContre) === (eq2.nbButsPour - eq2.nbButsContre)) {
                if (eq1.nbButsPour === eq2.nbButsPour) {
                    return eq1.nbAleatoire - eq2.nbAleatoire;
                } else {
                    return eq1.nbButsPour - eq2.nbButsPour;
                }
            } else {
                return (eq1.nbButsPour - eq1.nbButsContre) - (eq2.nbButsPour - eq2.nbButsContre);
            }
        } else {
            return eq1.points - eq2.points;
        }
    }

    toString() {
        return  this.classement+" "+this.nom+" "+this.points+" "+this.nbMatchsGagnes+" "+this.nbMatchsNuls+" "+this.nbMatchsPerdus+" "+this.nbButsPour+" "+this.nbButsContre+" "+(this.nbButsPour - this.nbButsContre);
    }

    miseAJour(nbButsMarques, nbButsEncaisses) {
        this.nbButsContre += nbButsEncaisses;
        this.nbButsPour += nbButsMarques;
        if(nbButsMarques > nbButsEncaisses){
            this.nbMatchsGagnes += 1;
            this.points += 3;
        }else if (nbButsMarques < nbButsEncaisses){
            this.nbMatchsPerdus += 1;

        }else{
            this.nbMatchsNuls += 1;
            this.points+= 1;
        }
    }

    toHTML(){
        return "<td>" + this.classement + "</td><td>" + this.nom + "</td><td>" + this.points + "</td><td>" + this.nbMatchsGagnes + "</td><td>" + this.nbMatchsNuls + "</td><td>" + this.nbMatchsPerdus + "</td><td>" +  this.nbButsPour + "</td><td>" + this.nbButsContre + "</td><td>" +(this.nbButsPour - this.nbButsContre)+ "</td>";
    }

}
