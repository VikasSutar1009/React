let count = 0;

const countDisplay = document.getElementById("count");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const resetBtn = document.getElementById("reset");

incrementBtn.addEventListener("click", () => {
    count++;
    updateDisplay();
});

decrementBtn.addEventListener("click",() =>{
    count--;
    updateDisplay();
});

resetBtn.addEventListener("click",() => {
    count = 0;
    updateDisplay();
});

function updateDisplay() {
    countDisplay.textContent = count;

    // Optional: Change color based on value
    if(count > 0){
        countDisplay.style.color = "green";
    } else if(count < 0){
        countDisplay.style.color = "red";
    } else {
        countDisplay.style.color = "black";
    }
}