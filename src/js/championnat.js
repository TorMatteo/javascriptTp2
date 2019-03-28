class Championnat {

	constructor(equ1,equ2,equ3,equ4,equ5,equ6,equ7,equ8) {
		this.tabEquipes = new Array();
		this.tabEquipes.push(equ1,equ2,equ3,equ4,equ5,equ6,equ7,equ8);
		this.numJournee = 1;
		this.journees = new Array();
		this.journees.push(new Journee(new Match(equ1,equ2),new Match(equ3,equ4),new Match(equ5,equ6),new Match(equ7,equ8))); // journée 01
		this.journees.push(new Journee(new Match(equ1,equ3),new Match(equ2,equ4),new Match(equ5,equ7),new Match(equ6,equ8))); // journée 02
		this.journees.push(new Journee(new Match(equ4,equ1),new Match(equ3,equ2),new Match(equ8,equ5),new Match(equ7,equ6))); // journée 03
		this.journees.push(new Journee(new Match(equ1,equ5),new Match(equ2,equ6),new Match(equ3,equ7),new Match(equ4,equ8))); // journée 04
		this.journees.push(new Journee(new Match(equ8,equ1),new Match(equ2,equ7),new Match(equ6,equ3),new Match(equ4,equ5))); // journée 05
		this.journees.push(new Journee(new Match(equ6,equ1),new Match(equ5,equ2),new Match(equ8,equ3),new Match(equ7,equ4))); // journée 06
		this.journees.push(new Journee(new Match(equ1,equ7),new Match(equ2,equ8),new Match(equ3,equ5),new Match(equ4,equ6))); // journée 07
		this.journees.push(new Journee(new Match(equ3,equ1),new Match(equ4,equ2),new Match(equ7,equ5),new Match(equ8,equ6))); // journée 08
		this.journees.push(new Journee(new Match(equ1,equ4),new Match(equ2,equ3),new Match(equ5,equ8),new Match(equ6,equ7))); // journée 09
		this.journees.push(new Journee(new Match(equ5,equ1),new Match(equ6,equ2),new Match(equ7,equ3),new Match(equ8,equ4))); // journée 10
		this.journees.push(new Journee(new Match(equ2,equ1),new Match(equ4,equ3),new Match(equ6,equ5),new Match(equ8,equ7))); // journée 11
		this.journees.push(new Journee(new Match(equ1,equ8),new Match(equ7,equ2),new Match(equ3,equ6),new Match(equ5,equ4))); // journée 12
		this.journees.push(new Journee(new Match(equ1,equ6),new Match(equ2,equ5),new Match(equ3,equ8),new Match(equ4,equ7))); // journée 13
		this.journees.push(new Journee(new Match(equ7,equ1),new Match(equ8,equ2),new Match(equ5,equ3),new Match(equ6,equ4))); // journée 14
	}

	jouer_journee(i) {
		// à compléter
	}

	afficher_journee(i) {
		// à compléter
	}

	afficher_classement() {
		// à compléter
	}

	classer_equipes() {
		// à compléter
	}

}
