let score = JSON.parse(localStorage.getItem('score')) || {
    win:0,
    lose:0,
    tie:0
};

function resetScore() {
    score.win = 0;
    score.lose = 0;
    score.tie = 0;
    localStorage.removeItem(score);
    document.querySelector('.js-score').innerHTML = `Wins: ${score.win} Loses: ${score.lose} Tie: ${score.tie}`;
}

function computerGame(){
    let computerMove = Math.random();
    if (computerMove >= 0 && computerMove < 1/3) {
        return 'Rock'
    } else if (computerMove >= 1/3 && computerMove < 2/3) {
        return 'Paper';
    } else {
        return 'Scissor'
    }
}

function playGame(playerMove){
    let computerMove = computerGame();
    let result = '';

    if (playerMove === 'Rock') {
        if (computerMove === 'Rock') {
            result = 'Tie';
        } else if (computerMove === 'Paper') {
            result = 'You lose';
        } else {
            result = 'You win';
        } 
    } else if (playerMove === 'Paper') {
        if (computerMove === 'Rock') {
            result = 'You win';
        } else if (computerMove === 'Paper') {
            result = 'Tie';
        } else {
            result = 'You lose';
        }
    } else {
        if (computerMove === 'Rock') {
            result = 'You lose';
        } else if (computerMove === 'Paper') {
            result = 'You win';
        } else {
            result = 'Tie';
        }
    }

    if (result === 'You win') {
        score.win++;
    } else if (result === 'You lose') {
        score.lose++;
    } else {
        score.tie++;
    }

    localStorage.setItem('score', JSON.stringify(score));

    document.querySelector('.js-score').innerHTML= `Win:${score.win} Loses:${score.lose} Tie:${score.tie}`;

    if (playerMove === 'Rock') {
        playerMove = '✊';
      } else if (playerMove === 'Paper'){
        playerMove = '✋';
      } else {
        playerMove = '✌️'
      }

      let move = '';
      move = computerMove;

      if (move === 'Rock') {
        move = '✊';
      } else if (move === 'Paper'){
        move = '✋';
      } else {
        move = '✌️';
      }

    document.querySelector('.js-choice').innerHTML = `You: ${playerMove} - ${move} computer`;
    
    document.querySelector('.js-result').innerHTML = result;
}