// Generate random numbers for Player 1 and Player 2
const randomNumber1 = Math.floor(Math.random() * 6) + 1;
const randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Select the dice image elements for Player 1 and Player 2
const player1Dice = document.querySelector(".img1");
const player2Dice = document.querySelector(".img2");

// Set the dice images for Player 1 and Player 2
player1Dice.src = `./images/dice${randomNumber1}.png`;
player2Dice.src = `./images/dice${randomNumber2}.png`;

// Select the <h1> element
const heading = document.querySelector("h1");

// Update the <h1> text based on the dice rolls
if (randomNumber1 > randomNumber2) {
  heading.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = "Player 2 Wins!";
} else {
  heading.textContent = "It's a Draw!";
}


