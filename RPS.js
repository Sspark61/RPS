function GetCompChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function GetPlayerChoice() {
  let Choice = prompt("Choose one of the Weapons\n1.Rock\n2.Paper\n3.Scissors");
  return Choice.toLowerCase();
}

function FetchWeapons(PlayerChoice, CompChoice) {
  PlayerChoice = GetPlayerChoice();
  CompChoice = GetCompChoice();
  return { PlayerChoice, CompChoice };
}

function Play(PlayerChoice, CompChoice) {
  let Pscore = 0;
  let Cscore = 0;
  let P;
  let C;
  console.log("Welcome To Rock Paper Scissors");
  while (Pscore !== 5 && Cscore !== 5) {
    ({ PlayerChoice, CompChoice } = FetchWeapons(P, C));
    if (
      (PlayerChoice === "rock" && CompChoice === "scissors") ||
      (PlayerChoice === "paper" && CompChoice === "rock") ||
      (PlayerChoice === "scissors" && CompChoice === "paper")
    ) {
      Pscore++;
      console.log(`Nice One\nSCORE:\nYou: ${Pscore}    Computer: ${Cscore}`);
    } else if (
      (CompChoice === "rock" && PlayerChoice === "scissors") ||
      (CompChoice === "paper" && PlayerChoice === "rock") ||
      (CompChoice === "scissors" && PlayerChoice === "paper")
    ) {
      Cscore++;
      console.log(`You Idiot\nSCORE\nYou: ${Pscore}    Computer: ${Cscore}`);
    } else {
      console.log(`It's a tie\nSCORE\nYou: ${Pscore}    Computer: ${Cscore}`);
    }
  }
  if (Pscore === 5) {
    console.log("The crazy son of a bitch did it");
  } else {
    console.log("a robot has beaten you ? shame ...");
  }
}

Play();
