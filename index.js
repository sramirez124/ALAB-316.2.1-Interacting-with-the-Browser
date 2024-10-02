const divApp = document.getElementById("div");
const table = document.querySelector("table");

const gameHeight = 10;
const gameWidth = 10;

let currentNumber = 1;
const maxNumbers = 100;
const answerNumber = Math.random(1, maxNumbers);

for (let i = 0; i < gameHeight; i++) {
  const tr = document.createElement("tr");

  for (let j = 0; j < gameWidth; j++) {
    const td = document.createElement("td");

    tr.appendChild(td);

    if (currentNumber <= maxNumbers) {
      const text = document.createElement("p");
      text.textContent = currentNumber;
      td.append(text);
      currentNumber++;
    }
  }
  table.appendChild(tr);
}

table.addEventListener("click", (evt) => {
  if (evt.target.localName !== "td") {
    return;
  }
  if (numberGuess)
  evt.target.style.backgroundColor = "red";
});