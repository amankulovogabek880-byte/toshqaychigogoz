"use strict";

const selectBtns = document.querySelectorAll(".select-btn");
const tengEl = document.getElementById("teng");
const userEl = document.getElementById("user");
const computerEl = document.getElementById("computer");
const resultText = document.getElementById("resultText");
const choiceText = document.getElementById("choiceText");
const resetBtn = document.getElementById("resetBtn");

const choices = ["Stone", "Scissors", "Paper"];

let tenglik = 0;
let userWin = 0;
let computerWin = 0;

selectBtns.forEach(btn => {
    btn.addEventListener("click", () => {

        const userChoice = Number(btn.dataset.value);
        const computerChoice = Math.floor(Math.random() * 3);

        const userPick = choices[userChoice];
        const computerPick = choices[computerChoice];

        choiceText.textContent = `Siz: ${userPick} | Kompyuter: ${computerPick}`;

        if (userChoice === computerChoice) {
            tenglik++;
            tengEl.textContent = tenglik;
            resultText.textContent = "Teng!";
        }
        else if (
            (userChoice === 0 && computerChoice === 1) ||
            (userChoice === 1 && computerChoice === 2) ||
            (userChoice === 2 && computerChoice === 0)
        ) {
            userWin++;
            userEl.textContent = userWin;
            resultText.textContent = "🎉 Siz yutdingiz!";
        }
        else {
            computerWin++;
            computerEl.textContent = computerWin;
            resultText.textContent = "💻 Kompyuter yutdi!";
        }
    });
});

resetBtn.addEventListener("click", () => {
    tenglik = 0;
    userWin = 0;
    computerWin = 0;

    tengEl.textContent = 0;
    userEl.textContent = 0;
    computerEl.textContent = 0;

    resultText.textContent = "Tanlovni boshlang";
    choiceText.textContent = "";
});