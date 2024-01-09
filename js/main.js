'use strict';

const selection = document.querySelector('.js-selection');
const btnStart = document.querySelector('.js-formBtn');
let varText = document.querySelector('.js-varText');
const resultJugadora = document.querySelector('.js-resultJugadora');
const resultPc = document.querySelector('.js-pText');


function getComparateNumber(pcMovement){
    const userSelection = selection.ariaValueMax;
    if(pcMovement === 'piedra' && userSelection === 'piedra'|| pcMovement === 'papel' && userSelection === 'papel' || pcMovement === 'tijeras' && userSelection === 'tijeras'){
        varText.innerHTML = '¡Empate!';
        resultJugadora.innerHTML = '0';
        resultPc.innerHTML = '0';
    } else{
        if (pcMovement === 'piedra' && userSelection === 'papel') {
            varText.innerHTML = '¡Has ganado!';
            resultJugadora.innerHTML = '1';
            resultPc.innerHTML = '0';
            console.log('aquí');
        }
        if(pcMovement === 'piedra' && userSelection === 'tijeras'){
            varText.innerHTML = '¡Has perdido!';
            resultJugadora.innerHTML = '0';
            resultPc.innerHTML = ' 1';
        }
        if(pcMovement === 'tijeras' && userSelection === 'papel'){
            varText.innerHTML = '¡Has perdido!';
            resultJugadora.innerHTML = '0';
            resultPc.innerHTML = '1';
        }
        if(pcMovement === 'tijeras' && userSelection === 'papel'){
            varText.innerHTML = '¡Has perdido!';
            resultJugadora.innerHTML = '0';
            resultPc.innerHTML = '1';
        }
    }
};



function pcMovement(randomNumber) {
    let pc = '';
    if(randomNumber <= 3){
         pc = 'piedra';
    } else if (randomNumber >= 7){
         pc = 'papel';
    } 
    else( pc = 'tijeras');

    return pcMovement;
};



//Función encargada de generar el número random
function getRanfomNumber(max) {
    return Math.ceil(Math.random()* max);
}
//Función manejadora del evento click
function handleClick(event) {
    event.preventDefault();
    const randomNumber = getRanfomNumber(10);
    const pcMovement = pcMovement();
    const comparation = getComparateNumber(pcMovement);
    
}

btnStart.addEventListener("click", handleClick);