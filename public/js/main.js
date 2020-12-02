// Lieux
import {salleAttente, cimetiere, pharmacie} from "./lieu.js";

// Traitements
import {ctrl, save, check, ventoline, f12} from "./pharmacie.js";

// Diagnostiques
import {malIndenté, unsave, error, azmatique, syntaxeError} from "./maladie.js";

// Patient

let chat;

// Docteur 
let doctor = {
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

console.log(doctor);

// chat.miauler();
// Chat
// let chat = {
//     nom: "Chat de ses morts",
//     miauler(){
//         setInterval(() => {
//             console.log(`Miaou !`);
//         }, 2000);
//     },
// };

console.log(pharmacie);