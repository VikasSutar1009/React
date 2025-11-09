let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");  // fixed typo
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");

checkBtn.addEventListener("click", checkGuess);   // fixed function reference
restartBtn.addEventListener("click", restartGame); // fixed function reference

function checkGuess() {
    const userGuess = Number(guessInput.value);
    attempts++;

    if (!userGuess) {
        message.textContent = "Please enter a number!";
        return;
    }

    if (userGuess < 1 || userGuess > 100) {
        message.textContent = "Number must be between 1 and 100!";
        return;
    }

    if (userGuess === randomNumber) {
        message.textContent = `🎉 Correct! The number was ${randomNumber}`;
        message.style.color = "green";
        checkBtn.disabled = true;
    } else if (userGuess > randomNumber) {
        message.textContent = "📉 Too high! Try again.";
        message.style.color = "red";
    } else {
        message.textContent = "📈 Too low! Try again.";
        message.style.color = "red";
    }

    attemptsDisplay.textContent = `Attempts: ${attempts}`;
    guessInput.value = "";
    guessInput.focus();
}

function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    message.textContent = "";
    attemptsDisplay.textContent = "";
    guessInput.value = "";
    checkBtn.disabled = false;
    message.style.color = "black";
}
