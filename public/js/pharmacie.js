class Traitement{
    constructor(traitement, prix){
        this.traitement = traitement;
        this.prix = prix;
    };
};

export let ctrl = new Traitement("ctrl+maj+f", 60);
export let save = new Traitement("saveOnFocusChange", 100);
export let check = new Traitement("CheckLinkRelation", 35);
export let ventoline = new Traitement("Ventoline", 40);
export let f12 = new Traitement("f12+doc", 20);