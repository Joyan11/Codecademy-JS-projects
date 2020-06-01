const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput ==='rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
    return userInput;
}else {
  console.log(' error');
}
}


const getComputerChoice = ()=>{
  const choice =Math.floor(Math.random() * 3);
  switch(choice){
    case 0:
    return 'rock';
    break;
    case 1:
    return 'paper';
    break;
    case 2:
    return 'scissors';
    break;
  }
}

const determineWinner = (userChoice, computerChoice) =>{ if(userChoice==='bomb'){
  return 'User is the winner';
}else{
  if(userChoice === 'rock'){
    if(computerChoice === 'paper'){
      return 'Computer has won';
    }else {
      return 'User has won';
    }
  }

  if(userChoice === 'paper'){
    if(computerChoice === 'rock'){
      return 'Computer has won';
    }else {
      return 'User has won';
    }
  }

  if(userChoice === 'scissors'){
    if(computerChoice === 'rock'){
      return 'Computer has won';
    }else {
      return 'User has won';
    }
  }
}
}


const playGame = ()=>{
  let userChoice = getUserChoice('bomb');
  let computerChoice = getComputerChoice();
  console.log(determineWinner(userChoice,computerChoice));
}

playGame();






