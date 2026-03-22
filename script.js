const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");
const rollBtn = document.getElementById("rollBtn");
const result = document.getElementById("result");
const mode = document.getElementById("mode");
const guessInput = document.getElementById("guess");
const toggleBtn = document.getElementById("toggleBtn");

const faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];

// Toggle Mode 🌙☀️
toggleBtn.addEventListener("click", () => {
document.body.classList.toggle("light");

if(document.body.classList.contains("light")){
toggleBtn.innerText = "☀️";
}
else{
toggleBtn.innerText = "🌙";
}
});

// Mode change (1 or 2 dice)
mode.addEventListener("change", () => {
if(mode.value === "2"){
dice2.style.display = "block";
}
else{
dice2.style.display = "none";
}
});

// Roll Dice
rollBtn.addEventListener("click", () => {

dice1.classList.add("roll");
dice2.classList.add("roll");

setTimeout(() => {

dice1.classList.remove("roll");
dice2.classList.remove("roll");

let r1 = Math.floor(Math.random() * 6);
let r2 = Math.floor(Math.random() * 6);

dice1.innerText = faces[r1];
dice2.innerText = faces[r2];

let total = mode.value === "2" ? (r1 + r2 + 2) : (r1 + 1);

// Guess Mode
let guess = Number(guessInput.value);

if(guess){
if(guess === total){
result.innerText = `🎉 Correct! You guessed ${total}`;
result.style.color = "lightgreen";
}
else{
result.innerText = `❌ Wrong! It was ${total}`;
result.style.color = "red";
}
}
else{
result.innerText = "Result: " + total;
}

},500);

});