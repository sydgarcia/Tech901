document.getElementById('startGameBtn').onclick = function startRockPaperScissors() {
    document.getElementById("play-by-play").innerHTML = "";
    document.getElementById("playerOneScore").innerHTML = "";
    document.getElementById("playerTwoScore").innerHTML = "";
    document.getElementById("numberOfTies").innerHTML = "";
    var playerOne = document.getElementById('playerOne').value;
    var playerTwo = document.getElementById('playerTwo').value;
    var weapons = ['rock' , 'paper', 'scissors'];
    var weaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    var numberOfHands = 0;
    var numberOfTies = 0;
    var playerOneNumberOfWins = 0;
    var playerTwoNumberOfWins = 0;
    var ulPlay = document.getElementById("play-by-play");
    var ulScores = document.getElementById("scores");
    var playerOneWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    var playerTwoWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
    
  
    while (playerOneNumberOfWins < 3 && playerTwoNumberOfWins < 3){
        console.log('>>>>>>>', playerOneNumberOfWins)
        console.log('>>>>>>>', playerTwoNumberOfWins)
      var playerOneWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
      var playerTwoWeaponOfChoice = weapons[parseInt(Math.random()*weapons.length) %3];
        if (playerOneWeaponOfChoice === 'rock' && playerTwoWeaponOfChoice === 'rock'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>It\'s a tie!</li>');
          numberOfHands++;
          numberOfTies++;
        }else if (playerOneWeaponOfChoice === 'rock' && playerTwoWeaponOfChoice === 'scissors'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>Rock Crushes Scissors! Player One Wins!</li>');           
          numberOfHands++;
          playerOneNumberOfWins++;
        }else if (playerOneWeaponOfChoice === 'rock' && playerTwoWeaponOfChoice === 'paper'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>Paper covers rock! Player Two Wins!</li>');
          numberOfHands++;
          playerTwoNumberOfWins++;
        }else if (playerOneWeaponOfChoice === 'paper' && playerTwoWeaponOfChoice === 'paper'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>It\'s a tie!</li>');
          numberOfHands++;
          numberOfTies++;
        }else if (playerOneWeaponOfChoice === 'paper' && playerTwoWeaponOfChoice === 'rock'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>Paper covers rock! Player One Wins!</li>'); 
          numberOfHands++;
          playerOneNumberOfWins++;
        }else if (playerOneWeaponOfChoice === 'paper' && playerTwoWeaponOfChoice === 'scissors'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>Scissors cut paper! Player Two Wins!</li>');
          numberOfHands++;
          playerTwoNumberOfWins++;
        }else if (playerOneWeaponOfChoice === 'scissors' && playerTwoWeaponOfChoice === 'scissors'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>It\'s a tie!</li>'); 
          numberOfHands++;
          numberOfTies++;
        }else if (playerOneWeaponOfChoice === 'scissors' && playerTwoWeaponOfChoice === 'paper'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>Scissors cut paper! Player One Wins!</li>');
          numberOfHands++;
          playerOneNumberOfWins++;
        }else if (playerOneWeaponOfChoice === 'scissors' && playerTwoWeaponOfChoice === 'rock'){
          ulPlay.insertAdjacentHTML('afterbegin', '<li>Rock Crushes Scissors! Player Two Wins!</li>');
          numberOfHands++;
          playerTwoNumberOfWins++;
        }
  
    }
    document.getElementById("playerOneScore").innerHTML = (playerOne + ' has ' + playerOneNumberOfWins + ' wins.');
    document.getElementById("playerTwoScore").innerHTML = (playerTwo + ' has ' + playerTwoNumberOfWins + ' wins.');
    document.getElementById("numberOfTies").innerHTML = ('There were ' + numberOfTies + ' ties.');
    
  
  };