export class Patient{
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
            pharmacie.personnes.push(Patient);
            salleAttente.personnes.splice(salleAttente.indexof(Patient), 1);
        };
    };
    takeCare(){
        
    };    
    paye(){

    };
}