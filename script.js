let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
 return Math.floor(Math.random() * 10);
}; // gives target number between 0 and 9

const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  if (Math.abs(humanGuess - targetGuess) < Math.abs(computerGuess - targetGuess)) {
    return true;
  } else if (Math.abs(humanGuess - targetGuess) > Math.abs(computerGuess - targetGuess)) {
    return false;
  } else {
    return true;
  }
}; // evaluates all possibilities to determine winner

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore +=1;
  } else {
    computerScore += 1;
  }
}; // updates score counter


const advanceRound = () => {
  currentRoundNumber += 1;
}; // tracks the rounds and updates round counter
