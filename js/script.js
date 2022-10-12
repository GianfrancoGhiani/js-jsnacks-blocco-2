'use strict'

/*
**Snack1**
Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo.

**Snack2**
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha  una lista di nomi e una lista di cognomi,
e da queste vuole generare una falsa lista di invitati con nome e cognome.

**Snack3**
Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari

**Snack4 (Bonus)**
Crea due array che hanno un numero di elementi diversi.  Aggiungi elementi all’array che ha meno elementi fino a quando
ne avrà tanti quanti l’altro.
*/



//          section identification
const snack1 = document.getElementById('snack1');
const snack2 = document.getElementById('snack2');
const snack3 = document.getElementById('snack3');
const snack4 = document.getElementById('snack4');

// snack1
let number = snack1.querySelector('input');
const button = snack1.querySelector('button');
let showNum = document.createElement('p');
showNum.classList.add('m-0');
showNum.classList.add('ms-4');
snack1.append(showNum);

button.addEventListener('click', function printingEven(){
    let num = parseInt(number.value);
    showNum.innerText = '';
    if (!(!(num % 2))){
        num++;
    }
    showNum.innerText = num;
    number.value = '';
} )

//  snack2
const nameList = ['Leonardo', 'Francesco', 'Alessandro', 'Lorenzo', 'Mattia', 'Tommaso', 'Gabriele', 'Andrea', 'Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia'];
const surnList = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Esposito', 'Colombo', 'Romano', 'Ricci', 'Gallo', 'Greco', 'Conti', 'Marino', 'De Luca', 'Bruno', 'Costa']
const invitations = [];

const button2 = snack2.querySelector('button');


button2.addEventListener('click', function createInvitations(){

        let listLine = 0;
    
    for (let i = 0; i < nameList.length; i++){
        let n = Math.floor(Math.random() * (14 - 0 + 1) ) + 0;
        let s = Math.floor(Math.random() * (14 - 0 + 1) ) + 0;
        invitations.push(`${nameList[n]} ${surnList[s]}`);
        listLine = document.createElement('p');
        listLine.classList.add('w-25');
        listLine.classList.add('border-bottom-1');
        snack2.querySelector('div').append(listLine);
        listLine.innerText = `${invitations[i]}`;
    }
    
})


