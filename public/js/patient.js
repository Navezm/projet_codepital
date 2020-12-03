import {cimetiere, pharmacie, salleAttente, taverne} from "./lieu.js";
import {doctor} from "./main.js";
import {tableauMaladie} from "./maladie.js";

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
            console.log(`Je me meus vers l'apothicaire`);
        } else if (lieu == "taverne"){
            taverne.personnes.push(this);
            pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1);
            console.log(`Maintenant que la santé me souris je vais aller m'aviner`);
        } else {
            console.log(`Error`);
        };
    };
    takeCare(para){
        if (para == "acheter"){
            for (let i = 0; i < pharmacie.stock.length; i++) {
                if (this.traitement == pharmacie.stock[i].traitement){
                    if (this.argent >= pharmacie.stock[i].prix){
                        this.argent = this.argent - pharmacie.stock[i].prix;
                        pharmacie.argent = pharmacie.argent + pharmacie.stock[i].prix;
                        this.poche.push(pharmacie.stock[i]);
                        console.log(`J'ai bien acheté mon remède. Il me reste maintenant ${this.argent}$`);
                    } else {
                        cimetiere.personnes.push(this);
                        pharmacie.personnes.splice(pharmacie.personnes.indexOf(this), 1)
                        console.log(`Too bad t'es trop pauvre pour rester en vie. On se verra sur ta tombe.`);
                    };
                };
            }; 
        } else if (para == "avaler"){
            if (this.poche.length == 0){
                
            } else {
                this.poche.pop();
                this.etatSante = "bonne santé";
                console.log(`*accent québécois* J'ai pris ma médecine`);
                this.goTo("taverne");
            }
        };
    };    
    paye(personne){
        if(personne == "Debugger"){
            this.argent = this.argent - 50;
            doctor.argent = doctor.argent + 50;
            console.log(`Docteur Debugger a récupéré son arrhes`);
            console.log(`Il a maintenant ${doctor.argent}$. Debugger il pèèèèèèèèèèze y a kwa ?!?`);
        };
    };
};

export let marcus = new Patient("Marcus", "mal indenté", 100, "malade");
export let optimus = new Patient("Optimus", "unsave", 200, "malade");
export let sangoku = new Patient("Sangoku", "404", 80, "malade");
export let darthVader = new Patient("DarthVader", "azmatique", 110, "malade");
export let semicolon = new Patient("Semicolon", "syntaxError", 60, "malade");

salleAttente.personnes.push(marcus, optimus, sangoku, darthVader, semicolon);