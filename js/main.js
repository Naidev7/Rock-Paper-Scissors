'use strict';

const selection = document.querySelector('.js-selection');
const btnStart = document.querySelector('.js-formBtn');
let varText = document.querySelector('.js-varText');
const resultJugadora = document.querySelector('.js-resultJugadora');
const resultPc = document.querySelector('.js-pText');


const pcMovement = (randomNumber)=>{
    if(randomNumber <= 3){
       return  'piedra';
   } else if (randomNumber >= 7){
       return 'papel';
   } else{return 'tijeras'};
};
function getRanfomNumber(max) {
    return Math.ceil(Math.random()* max);
};
const valuePc = ()=>{
    const randomNumber = getRanfomNumber(9);
    const valuePc = pcMovement(randomNumber);
    return valuePc;
}

const playGame = ()=>{
    const pcValue = valuePc();
    const userSelection = selection.value;
     if(userSelection === pcValue){
        varText.innerHTML  = 'Empate';
    } else if(userSelection === 'piedra'){
        if(pcValue === 'tijeras'){
            varText.innerHTML  = 'has ganado';
        }else{
            varText.innerHTML  = 'has perdido';
        }
    } else if(userSelection === 'papel'){
        if(pcValue === 'tijeras'){
            varText.innerHTML  = 'has perdido';
        }else{
            varText.innerHTML  = 'has ganado';
        }
    } else{
        if(pcValue === 'piedra'){
            varText.innerHTML  = 'has perdido';
        } else{
            varText.innerHTML  = 'has ganado';
        }
    }
    console.log(pcValue, userSelection);
};


function handleClick(event) {
    event.preventDefault();
    valuePc();
    playGame();
};

btnStart.addEventListener("click", handleClick);
