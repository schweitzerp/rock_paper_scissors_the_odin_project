let play_choice = ''
let comp_choice = ''
let comp_rand
let low_case_choice
let pc_points = 0
let player_points = 0

function computerChoice() {
  comp_rand = Math.random()
  if (comp_rand < 0.33) {
    comp_choice = 'rock';
  } else if (comp_rand > 0.67) {
    comp_choice = 'paper';
  } else {
    comp_choice = 'scissors'
  }
  return comp_choice;
}

function playerChoice() {
  play_choice = prompt("what would you choose?")
  low_case_choice = play_choice.toLowerCase()
  console.log(low_case_choice)
  if (low_case_choice == 'rock' || low_case_choice == 'paper' || low_case_choice == 'scissors') {
    return low_case_choice
  } else {
    alert('error')
    playerChoice()
  }
}

function chooseWinner(computer, player) {
  if (player == 'rock' && computer == 'scissors' ||
    player == 'paper' && computer == 'rock' ||
    player == 'scissors' && computer == 'paper' ) {
    player_points++
    console.log("Player Wins")
  } else if (player == computer) {
    console.log("Tie")
  } else {
    pc_points++
    console.log("PC Won")
  }
}

function playRound() {
  playerChoice();
  computerChoice();
  chooseWinner(low_case_choice, comp_choice);
}

function game() {
 /* playRound();
  playRound();
  playRound();
  playRound();
  playRound();
  console.log(`computer points ${pc_points}`)
  console.log(`player points ${player_points}`)*/
  while(pc_points < 5 && player_points < 5){
    playRound();
  }
  if (player_points > pc_points) {
    console.log(`You won ${player_points} to ${pc_points}`)
  }
  else {
    console.log(`You lost ${pc_points} to ${player_points}`)
  }
}
//playRound()

game();
