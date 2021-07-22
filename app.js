//selectors
const petrolPump1 = document.querySelector(".pertrol-pump1");
const petrolPump2 = document.querySelector(".pertrol-pump2");
const petrolPump3 = document.querySelector(".pertrol-pump3");
const petrolPump4 = document.querySelector(".pertrol-pump4");
const petrolPump5 = document.querySelector(".pertrol-pump5");
const petrolPump6 = document.querySelector(".pertrol-pump6");
const startBtn = document.querySelector(".start-btn");
const outputDiv = document.querySelector(".output");
const gamestartText = document.querySelector(".game-start");
const outputPetrolPump = document.querySelector(".output-petrolpump");
const errText = document.querySelector(".err-text");

//functions
const startGame = () => {
  let carRemainingPetrol = 50;
  let pump1 = parseInt(petrolPump1.value);
  let pump2 = parseInt(petrolPump2.value);
  let pump3 = parseInt(petrolPump3.value);
  let pump4 = parseInt(petrolPump4.value);
  let pump5 = parseInt(petrolPump5.value);
  let pump6 = parseInt(petrolPump6.value);
  let carMove = 1;
  let itretor = Math.floor(Math.random() * 6) + 1;

  //err handling
  errText.innerText = "";

  if (
    petrolPump1.value > 100 ||
    petrolPump2.value > 100 ||
    petrolPump3.value > 100 ||
    petrolPump4.value > 100 ||
    petrolPump5.value > 100 ||
    petrolPump6.value > 100 ||
    petrolPump1.value === "" ||
    petrolPump2.value === "" ||
    petrolPump3.value === "" ||
    petrolPump4.value === "" ||
    petrolPump5.value === "" ||
    petrolPump6.value === ""
  ) {
    let err = "Enter no. between 1 - 100";
    errText.innerText = err;
    console.log("err");
    return err;
  }

  //game started
  if (
    startBtn.innerText === "Start" &&
    pump1 &&
    pump2 &&
    pump3 &&
    pump4 &&
    pump5 &&
    pump6
  ) {
    gamestartText.innerText = "Game started";
    outputPetrolPump.innerText = `Petrol Pump generated at ${pump1}, ${pump2}, ${pump3}, ${pump4}, ${pump5}, ${pump6}`;

    for (let i = itretor; i <= 100; i = i + itretor) {
      let carStep = Math.floor(Math.random() * 6) + 1;

      carRemainingPetrol = carRemainingPetrol - itretor * 2;
      itretor = carStep;

      if (
        i === pump1 ||
        i === pump2 ||
        i === pump3 ||
        i === pump4 ||
        i === pump5 ||
        i === pump6
      ) {
        carRemainingPetrol = carRemainingPetrol + 30;
      }

      if (carRemainingPetrol > 0) {
        let output = `Move ${carMove} - car at ${i}, petrol remaining ${carRemainingPetrol} `;

        let outputP = document.createElement("p");
        outputP.classList.add("output-p");
        let outputPText = document.createTextNode(output);
        outputP.appendChild(outputPText);
        outputDiv.appendChild(outputP);
      } else {
        let output = `Move ${carMove} - car at ${i}, petrol remaining 0, Game Over `;

        let outputP = document.createElement("p");
        outputP.classList.add("output-p");
        let outputPText = document.createTextNode(output);
        outputP.appendChild(outputPText);
        outputDiv.appendChild(outputP);

        startBtn.innerText = "Reset";
        petrolPump1.disabled = true;
        petrolPump2.disabled = true;
        petrolPump3.disabled = true;
        petrolPump4.disabled = true;
        petrolPump5.disabled = true;
        petrolPump6.disabled = true;
        break;
      }
      carMove = carMove + 1;
    }
  } else {
    // resting game
    resetGame();
  }
};

const resetGame = () => {
  while (outputDiv.firstChild) {
    outputDiv.firstChild.remove();
  }
  petrolPump1.value = "";
  petrolPump2.value = "";
  petrolPump3.value = "";
  petrolPump4.value = "";
  petrolPump5.value = "";
  petrolPump6.value = "";
  gamestartText.innerText = "";
  outputPetrolPump.innerText = "";
  petrolPump1.disabled = false;
  petrolPump2.disabled = false;
  petrolPump3.disabled = false;
  petrolPump4.disabled = false;
  petrolPump5.disabled = false;
  petrolPump6.disabled = false;
  startBtn.innerText = "Start";
};

//events
startBtn.addEventListener("click", startGame);
