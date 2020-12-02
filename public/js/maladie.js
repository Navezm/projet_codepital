class Maladie{
    constructor(maladie, traitement){
        this.maladie = maladie;
        this.traitement = traitement;
    };
};

let malIndenté = new Maladie("mal indenté", "ctrl+maj+f");
let unsave = new Maladie("unsave", "saveOnFocusChange");
let error = new Maladie("404", "CheckLinkRelation");
let azmatique = new Maladie("azmatique", "Ventoline");
let syntaxeError = new Maladie("syntaxError", "f12+doc");

export let tableauMaladie = [];
tableauMaladie.push(malIndenté, unsave, error, azmatique, syntaxeError);