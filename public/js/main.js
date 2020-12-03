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
                this.cabinet[1].traitement = tableauMaladie[i].traitement;
                console.log(`Mon cher ${this.cabinet[1].nom} votre souffrance est ${this.cabinet[1].maladie}. Donne argent maintenant !`);
            };
        };
    },
    patientIn(){
        doctor.cabinet.push(salleAttente.personnes[0]);
        console.log(`Amenez-moi messire ${salleAttente.personnes[0].nom}`);
        salleAttente.personnes.splice(0, 1)
    },
    patientOut(){
        salleAttente.personnes.push(doctor.cabinet[1]);
        doctor.cabinet.pop();
        console.log(`Casse toi sale pestiféré !`);
    },
};

// Début de notre aventure
const salleLength = salleAttente.personnes.length;
chat.miauler();
for (let i = 0; i < salleLength; i++){
    doctor.patientIn();
    doctor.diagnostique();
    doctor.cabinet[1].paye("Debugger");
    var namePatient = doctor.cabinet[1];
    doctor.patientOut();
    namePatient.goTo("pharmacie");
    namePatient.takeCare("acheter");
    namePatient.takeCare("avaler");
    console.log("\n \n");
};

// En fin d'aventure
console.log(`Le bilan de cette aventure est comme suit :`);
console.log(`Les Komrads ${cimetiere.personnes[0].nom}, ${cimetiere.personnes[1].nom} et ${cimetiere.personnes[2].nom} ont perdu l'étincelle de vie aujourd'hui. Pray for them !`);
console.log(`\n \n`);
console.log(`Tandis que les Komrads ${taverne.personnes[0].nom} et ${taverne.personnes[1].nom} se détruisent bien com' faut à la taverne pour fêter leur santé renouvelée.`);