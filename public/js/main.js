// Lieux
import {salleAttente, cimetiere, pharmacie} from "./lieu.js";

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
        
    },
    patientIn(){
        
    },
    patientOut(){
        
    },
};

console.log(salleAttente);
console.log(doctor);
console.log(pharmacie);

marcus.paye("Debugger");
console.log(marcus);
marcus.goTo("pharmacie");
console.log(tableauMaladie);

console.log(marcus);
console.log(pharmacie);
console.log(doctor);