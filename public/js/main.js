// Lieux
import {salleAttente, cimetiere, pharmacie, taverne} from "./lieu.js";

// Diagnostiques
import {tableauMaladie} from "./maladie.js";

// Patient
import {marcus, optimus, sangoku, darthVader, semicolon} from "./patient.js";

// Chat
let chat;

// Docteur 
export let doctor = {
    nom: "Debugger",
    argent: 0,
    cabinet: [chat = {
        nom: "Chat de ses morts",
        miauler(){
        setInterval(() => {
            alert(`Miaou !`);
        }, 2000);},
    }],
    diagnostique(){
        for (let i = 0; i < tableauMaladie.length; i++) {
            if (this.cabinet[1].maladie == tableauMaladie[i].maladie){
                this.cabinet[1].traitement == tableauMaladie[i].traitement;
            };
        };
    },
    patientIn(name){
        doctor.cabinet.push(salleAttente.personnes.indexOf(name));
        salleAttente.personnes.splice(salleAttente.personnes.indexOf(name), 1)
    },
    patientOut(){
        salleAttente.personnes.push(doctor.cabinet[1]);
        doctor.cabinet.pop();
    },
};