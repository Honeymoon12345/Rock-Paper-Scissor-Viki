function init() {
  const scissor = document.getElementById("scissor");
  const rock = document.getElementById("rock");
  const paper = document.getElementById("paper");

  const message = () => {
    let whoWon = playRound("schere");
    game(whoWon);
    const iconScissor = document.getElementById("scissorPlayer");
    iconScissor.style.color = "green";
    setTimeout(() => {
      iconScissor.style.color = "black";
    }, 2000);
  };
  const message2 = () => {
    let whoWon = playRound("stein");
    game(whoWon);
    const iconRock = document.getElementById("rockPlayer");
    iconRock.style.color = "green";
    setTimeout(() => {
      iconRock.style.color = "black";
    }, 2000);
  };

  const message3 = () => {
    let whoWon = playRound("papier");
    game(whoWon);
    const iconPaper = document.getElementById("paperPlayer");
    iconPaper.style.color = "green";
    setTimeout(() => {
      iconPaper.style.color = "black";
    }, 2000);
  };

  scissor.addEventListener("click", message);
  rock.addEventListener("click", message2);
  paper.addEventListener("click", message3);
}

function count(whoWon) {
  let count = document.getElementById("countPlayer");
  let zaehler = 0;
  if (pChoice == 2) {
    text.innerHTML = zaehler++;
  }
}

function computerPlay() {
  let zufall = ["schere", "stein", "papier"];
  let computerZufall = Math.floor(Math.random() * 3);
  return zufall[computerZufall];
}

function playRound(pChoice) {
  const playerSelect = pChoice;
  const computerSelect = computerPlay();
  const gewonnen = document.getElementById("gewonnen");

  if (computerSelect === "schere") {
    const iconScissor = document.getElementById("scissorComputer");
    iconScissor.style.color = "red";
    setTimeout(() => {
      iconScissor.style.color = "black";
    }, 2000);
  }

  if (computerSelect === "stein") {
    const iconRock = document.getElementById("rockComputer");
    iconRock.style.color = "red";
    setTimeout(() => {
      iconRock.style.color = "black";
    }, 2000);
  }

  if (computerSelect === "papier") {
    const iconPaper = document.getElementById("paperComputer");
    iconPaper.style.color = "red";
    setTimeout(() => {
      iconPaper.style.color = "black";
    }, 2000);
  }

  if (playerSelect === computerSelect) {
    gewonnen.textContent = "Unentschieden";
    return 0;
  } else if (
    (playerSelect === "papier" && computerSelect === "schere") ||
    (playerSelect === "schere" && computerSelect === "stein") ||
    (playerSelect === "stein" && computerSelect === "papier")
  ) {
    gewonnen.textContent = "Computer gewinnt";
    return 1;
  } else {
    gewonnen.textContent = "Spieler gewinnt";
    return 2;
  }
}
let playerScore = 0;
let computerScore = 0;
let keinScore = 0;

function game(winner) {
  let playerWin = document.getElementById("countPlayer");
  let computerWin = document.getElementById("countComputer");

  if (winner === 2) {
    playerScore++;
    playerWin.textContent = playerScore;
  } else if (winner === 1) {
    computerScore++;
    computerWin.textContent = computerScore;
  } else if (winner === 0) {
    keinScore++;
  }
  if (playerScore >= 5) {
    window.alert("Spieler hat gewonnen");
  }
  if (computerScore >= 5) {
    window.alert("Computer hat gewonnen");
  }
}

function clear() {
  const playerWin = document.getElementById("countPlayer");
  const computerWin = document.getElementById("countComputer");
  const gewonnen = document.getElementById("gewonnen");
  const clear = document.getElementById("clear");
  clear.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerWin.textContent = "0";
    computerWin.textContent = "0";
    gewonnen.textContent = "";
  });
}
clear();
init();
//game();
/*const myCallback = (event) =>{
    if(event.currentTarget.textContent === "rock"){
        playRound("rock")
    }
}
listElements.forEach((element)=>{
    element.addEventListener("click", myCallback);
})*/
