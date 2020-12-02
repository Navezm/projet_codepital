import {ctrl, save, check, ventoline, f12} from "./pharmacie.js";

class Lieu {
    constructor(nom){
        this.nom = nom;
        this.personnes = [];
    };
};

class Pharm extends Lieu{
    constructor(nom, classe){
        super(nom);
        this.stock = [],
        this.argent = 0;
    };
};

export let salleAttente = new Lieu("salleAttente");
export let cimetiere = new Lieu("cimetiere");
export let pharmacie = new Pharm("pharmacie");

pharmacie.stock.push(ctrl, save, check, ventoline, f12);