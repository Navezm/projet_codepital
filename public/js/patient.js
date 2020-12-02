import {cimetiere, pharmacie, salleAttente} from "./lieu.js";
import {doctor} from "./main.js";

class Patient{
    constructor (nom, maladie, argent, etatSante){
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = [];
        this.etatSante = etatSante;
        this.traitement;
    };
    goTo(lieu){
        if (lieu == "pharmacie"){
            pharmacie.personnes.push(this);
            salleAttente.personnes.splice(salleAttente.personnes.indexOf(this), 1);
        } else {
            console.log(`Error`);
        }
    };
    takeCare(para){
        if (para == "acheter"){
            switch (this.traitement) {
                case ("ctrl+maj+f"):
                    if (this.argent < pharmacie.stock.ctrl.prix){
                        cimetiere.personnes.push(this);
                        pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1);
                    } else {
                        this.poche.push(pharmacie.stock.ctrl);
                        this.argent =- pharmacie.stock.ctrl.prix;
                    };
                    break;
                case ("saveOnFocusChange"):
                    if (this.argent < pharmacie.stock.save.prix){
                        cimetiere.personnes.push(this);
                        pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1);
                    } else {
                        this.poche.push(pharmacie.stock.save);
                        this.argent =- pharmacie.stock.save.prix;
                    };
                    break;
                case ("CheckLinkRelation"):
                    if (this.argent < pharmacie.stock.check.prix){
                        cimetiere.personnes.push(this);
                        pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1);
                    } else {
                        this.poche.push(pharmacie.stock.check);
                        this.argent =- pharmacie.stock.check.prix;
                    };
                    break;
                case ("Ventoline"):
                    if (this.argent < pharmacie.stock.ventoline.prix){
                        cimetiere.personnes.push(this);
                        pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1);
                    } else {
                        this.poche.push(pharmacie.stock.ventoline);
                        this.argent =- pharmacie.stock.ventoline.prix;
                    };
                    break;
                case ("f12+doc"):
                    if (this.argent < pharmacie.stock.f12.prix){
                        cimetiere.personnes.push(this);
                        pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1);
                    } else {
                        this.poche.push(pharmacie.stock.f12);
                        this.argent =- pharmacie.stock.f12.prix;
                    };
                    break;
            };  
        } else if (para == "avaler"){
            if (this.poche.length == 0){
                console.log(`Ta besace est trop légère`);
            } else {
                this.poche.pop();
                this.etatSante = "bonne santé";
            }
        };
    };    
    paye(personne){
        if(personne == "Debugger"){
            this.argent = this.argent - 50;
            doctor.argent = doctor.argent + 50;
        };
    };
};

export let marcus = new Patient("Marcus", "mal indenté", 100, "malade");
export let optimus = new Patient("Optimus", "unsave", 200, "malade");
export let sangoku = new Patient("Sangoku", "404", 80, "malade");
export let darthVader = new Patient("DarthVader", "azmatique", 110, "malade");
export let semicolon = new Patient("Semicolon", "syntaxeError", 60, "malade");

salleAttente.personnes.push(marcus, optimus, sangoku, darthVader, semicolon);