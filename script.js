function playGame(userMove) {
  const randomNumber = Math.random();

  let computerMove = '';
  if (randomNumber < 1/3) {
    computerMove = 'Rock';
  } else if (randomNumber < 2/3) {
    computerMove = 'Paper';
  } else {
    computerMove = 'Scissors';
  }

  let result = '';
  if (userMove === 'Rock') {
    if (computerMove === 'Rock') {
      result = 'Tie';
    } else if (computerMove === 'Paper') {
      result = 'You lose';
    } else {
      result = 'You win';
    }
  } else if (userMove === 'Paper') {
    if (computerMove === 'Rock') {
      result = 'You win';
    } else if (computerMove === 'Paper') {
      result = 'Tie';
    } else {
      result = 'You lose';
    }
  } else if (userMove === 'Scissors') {
    if (computerMove === 'Rock') {
      result = 'You lose';
    } else if (computerMove === 'Paper') {
      result = 'You win';
    } else {
      result = 'Tie';
    }
  }

  alert(`You picked ${userMove}. Computer picked ${computerMove}. ${result}`);
}

