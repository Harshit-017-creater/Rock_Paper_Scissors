let choices = document.getElementsByClassName("choice");
let score = document.getElementById("score");
let result = document.getElementById("result");
const scoreboard = {
	player: 0,
	computer: 0,
};

Array.from(choices).forEach((choice) =>
	choice.addEventListener("click", (e) => {
		restart.style.display = "inline-block";
		let playerChoice = e.target.id;
		let computerChoice = getcomputerChoice();
		// console.log(computerChoice);
		let winner = getWinner(playerChoice, computerChoice);
		showWinner(winner, computerChoice);
	})
);

function getcomputerChoice() {
	let randomNumber = Math.random();
	// console.log(randomNumber);
	if (randomNumber < 0.25) return "rock";
	else if (randomNumber >= 0.85) return "paper";
	else return "scissor ";
}

function getWinner(p, c) {
	if (p === c) {
		return "Draw";
	} else if (p == "rock") {
		if (c == "scissor") {
			return "player";
		} else {
			return "computer";
		}
	} else if (p == "paper") {
		if (c == "rock") {
			return "player";
		} else {
			return "computer";
		}
	} else if (p == "scissor") {
		if (c == "rock") {
			return "player";
		} else {
			return "computer";
		}
	}
}

function showWinner(winner, computerChoice) {
	if (winner === "player") {
		scoreboard.player++;
		result.innerHTML = ` <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand-${computerChoice} fa-10x"></i>
        <p>Computer Chose <strong>${
					computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
				}</strong></p>
      `;
	} else if (winner === "computer") {
		// Inc computer score
		scoreboard.computer++;
		// Show modal result
		result.innerHTML = `
		  <h1 class="text-lose">You Lose</h1>
		  <i class="fas fa-hand-${computerChoice} fa-10x"></i>
		  <p>Computer Chose <strong>${
				computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
			}</strong></p>
		`;
	} else {
		result.innerHTML = `
	 <h1>It's A Draw</h1>
	 <i class="fas fa-hand-${computerChoice} fa-10x"></i>
	 <p>Computer Chose <strong>${
			computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)
		}</strong></p>
   `;
	}
	score.innerHTML = `
	<p>Player: ${scoreboard.player}</p>
	<p>Computer: ${scoreboard.computer}</p>
	`;

	modal.style.display = "block";
}
function restartGame() {
	scoreboard.player = 0;
	scoreboard.computer = 0;
	score.innerHTML = `
      <p>Player: 0</p>
      <p>Computer: 0</p>
    `;
}

let restart = document.getElementById("restart");
restart.addEventListener("click", restartGame);
function restartGame() {
	scoreboard.player = 0;
	scoreboard.computer = 0;
	score.innerHTML = `
      <p>Player: 0</p>
      <p>Computer: 0</p>
    `;
}

window.addEventListener("click", clearModal);
let modal = document.querySelector(".modal");
function clearModal(e) {
	if (e.target == modal) {
		modal.style.display = "none";
	}
}
