class Maladie{
    constructor(maladie, traitement){
        this.maladie = maladie;
        this.traitement = traitement;
    };
};

export let malIndenté = new Maladie("mal indenté", "ctrl+maj+f");
export let unsave = new Maladie("unsave", "saveOnFocusChange");
export let error = new Maladie("404", "CheckLinkRelation");
export let azmatique = new Maladie("azmatique", "Ventoline");
export let syntaxeError = new Maladie("syntaxError", "f12+doc");