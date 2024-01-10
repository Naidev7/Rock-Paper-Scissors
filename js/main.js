"use strict";

const selection = document.querySelector(".js-selection");
const btnStart = document.querySelector(".js-formBtn");
let varText = document.querySelector(".js-varText");
const resultJugadora = document.querySelector(".js-resultJugadora");
const resultPc = document.querySelector(".js-pText");
let accJugadora = 0;
let accPc = 0;

const pcMovement = (randomNumber) => {
  if (randomNumber <= 3) {
    return "piedra";
  } else if (randomNumber >= 7) {
    return "papel";
  } else {
    return "tijeras";
  }
};
function getRanfomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const valuePc = () => {
  const randomNumber = getRanfomNumber(9);
  const valuePc = pcMovement(randomNumber);
  return valuePc;
};

const playGame = () => {
  const pcValue = valuePc();
  const userSelection = selection.value.toLowerCase();
  if (userSelection === pcValue) {
    renderReturn("Empate");
  } else if (userSelection === "piedra") {
    if (pcValue === "tijeras") {
      renderReturn("¡Has ganado!", accJugadora++);
    } else {
      renderReturn("Has perdido...", accPc++);
    }
  } else if (userSelection === "papel") {
    if (pcValue === "tijeras") {
      renderReturn("Has perdido...", accPc++);
    } else {
      renderReturn("¡Has ganado!", accJugadora++);
    }
  } else {
    if (pcValue === "piedra") {
      renderReturn("Has perdido...", accPc++);
    } else {
      renderReturn("¡Has ganado!", accJugadora++);
    }
  }
  /*console.log(pcValue, userSelection, accJugadora, accPc);*/
};

const contador = ( sumAcc) => {
  if (sumAcc === 11) {
    varText.innerHTML = '¡Vamos a jugar!'
    resultJugadora.innerHTML = '';
    resultPc.innerHTML = '';

  }
};

function renderReturn(text) {
  varText.innerHTML = text;
  resultJugadora.innerHTML = accJugadora;
  resultPc.innerHTML = accPc;
  const sumAcc = accJugadora + accPc;
  contador(sumAcc);
}

function handleClick(event) {
  event.preventDefault();
  valuePc();
  playGame();
}

btnStart.addEventListener("click", handleClick);
