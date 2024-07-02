let user_score = 0;
let comp_score = 0;

let boxes = document.querySelectorAll(".icons");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");
let msg = document.getElementById("msg");

let compTurn = () => {
  let compChoice = Math.floor(Math.random() * 3);
  return compChoice;
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    userChoice = box.getAttribute("id");
    console.log(`${userChoice} has been clicked`);
    let compChoice = compTurn();
    let box_icons = ["rock", "paper", "scissor"];
    compChoice = box_icons[compChoice];
    console.log(compChoice);

    if (userChoice === compChoice) {
      console.log("draw");
      msg.innerText = "Game was Draw. Play again. ";
      msg.style.backgroundColor = "#081b31";
    } else {
      if (userChoice === "rock") {
        if (compChoice === "scissor") {
          msg.innerText = "You Win. Your Rock beats Scissor";
          user_score += 1;
          userScore.innerText = user_score;
          msg.style.backgroundColor = "green";
        } else {
          msg.innerText = "You Lost. Paper beats Your Rock";
          comp_score += 1;
          compScore.innerText = comp_score;
          msg.style.backgroundColor = "red";
        }
      } else if (userChoice === "scissor") {
        if (compChoice === "paper") {
          msg.innerText = "You Win. Your Scissor beats Paper";
          user_score += 1;
          userScore.innerText = user_score;
          msg.style.backgroundColor = "green";
        } else {
          msg.innerText = "You Lost. Rock beats Your Scissor";
          comp_score += 1;
          compScore.innerText = comp_score;
          msg.style.backgroundColor = "red";
        }
      } else if (userChoice === "paper") {
        if (compChoice === "rock") {
          msg.innerText = "You Win. Your Paper beats Rock";
          user_score += 1;
          userScore.innerText = user_score;
          msg.style.backgroundColor = "green";
        } else {
          msg.innerText = "You Lost. Scissors beats Your Paper";
          comp_score += 1;
          compScore.innerText = comp_score;
          msg.style.backgroundColor = "red";
        }
      }
    }
  });
});
