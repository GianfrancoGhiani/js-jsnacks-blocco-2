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
    // pulizia da numeri precedentemente visualizzati
    showNum.innerText = '';
    // controllo campo non vuoto
    if(!(number.value == '')){
        let num = parseInt(number.value);
        showNum.innerText = '';
        // se dispari darà resto -->   not(not(resto)) = true
        if (!(!(num % 2))){
            num++;
        }
        showNum.innerText = num;
    }
    number.value = '';
    
} )

//  snack2

// creo 2 liste: nomi e cognomi

const nameList = ['Leonardo', 'Francesco', 'Alessandro', 'Lorenzo', 'Mattia', 'Tommaso', 'Gabriele', 'Andrea', 'Sofia', 'Giulia', 'Aurora', 'Alice', 'Ginevra', 'Emma', 'Giorgia'];
const surnList = ['Rossi', 'Ferrari', 'Russo', 'Bianchi', 'Esposito', 'Colombo', 'Romano', 'Ricci', 'Gallo', 'Greco', 'Conti', 'Marino', 'De Luca', 'Bruno', 'Costa']
const invitations = [];

const div2 = snack2.querySelector('div');
const button2 = snack2.querySelector('button');


button2.addEventListener('click', function createInvitations(){
    // pulisco la lista "zona" della pagina di visualizzazione lista in caso sia già piena da cicli precedenti
    div2.innerHTML= ''; 
    // pulisco la lista invitati in caso sia già piena da cicli precedenti (liste sempre diverse)
    for (let i = 0; i < nameList.length; i++){ 
        invitations.splice(0, 1);
    }
    // unisco randomicamente le 2 liste in una terza lista "invitati" e stampo su pagina
    for (let i = 0; i < nameList.length; i++){ 
        let n = Math.floor(Math.random() * (14 - 0 + 1) ) + 0;
        let s = Math.floor(Math.random() * (14 - 0 + 1) ) + 0;
        invitations.push(`${nameList[n]} ${surnList[s]}`);
        let listLine = document.createElement('p');
        listLine.classList.add('col-4');
        snack2.querySelector('div').append(listLine);
        listLine.innerText = `${invitations[i]}`;
    }
})

// snack3
const arrayInt = []
let howMany = document.getElementById('howMany');
let valMax = document.getElementById('valMax');
const button3 = snack3.querySelector('button');
const showList = document.getElementById('list');



button3.addEventListener('click', function createAndAdd(){
    
    const printArray = document.createElement('p');
    showList.innerHTML = '';

    let howManyV = parseInt(howMany.value);
    let valMaxV = parseInt(valMax.value);
    console.log(arrayInt, howManyV);

   //per ogni i < di howMany crea un numero random e aggiungilo all'arrayInt
    for (let i = 0; i < howManyV; i++){ 
        let n = Math.floor(Math.random() * (valMaxV - 0 + 1) ) + 0;
        arrayInt.push(n);
        console.log(arrayInt);
    }
    //stampo a schermo la lista
    printArray.innerHTML = `${arrayInt} <br>`;
    showList.append(printArray);
    
    let addition = 0;
    for (let i = 1; i < howManyV; i+= 2){ 
        addition += arrayInt[i];
    }
    printArray.append(`  La somma dei numeri di indice dispari è: ${addition}`)


    let arraylength = arrayInt.length;
    //svuto arrayInt 
    for (let i = arraylength ; i > 0 ; i--){ 
        arrayInt.splice((i-1), 1);
    } 
    //svuoto i campi
    howMany.value='';
    valMax.value='';
})