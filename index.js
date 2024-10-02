const divApp = document.getElementById("div");
const table = document.querySelector("table");

const gameHeight = 10;
const gameWidth = 10;

let currentNumber = 1;
const maxNumbers = 100;
const randomNumber = Math.floor(Math.random() * 100) + 1;
const answer = randomNumber.toString();
console.log("Hey you're cheating! Well the answer is:" , answer);

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
    if (evt.target.textContent !== answer){

        window.alert("Try again!");
        evt.target.parentElement.style.backgroundColor = "red";

    } else {
        window.alert("You guess the right number!");
        evt.target.parentElement.style.backgroundColor = "green";
    }
    return;
  }  
});
// evt.target.style.backgroundColor = "red";