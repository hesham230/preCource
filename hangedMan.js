let readlineSync = require('readline-sync');
let figlet = require('figlet');
 

console.log(figlet.textSync('Hang Man', {
    font: 'Ghost',
    horizontalLayout: 'default',
    verticalLayout: 'default'
}));


const easy_wrods = ["python","json","java","html","css","c","R","php","sql","ruby"];
const hard_words = ["javascript","mongodb","kotlin","noSQL"];
                                

function hangman() {
  
  let randomWordArr = [];
  let randomWordStr = "";
  let whichGame;
  let reveal = [];
  let wrongGuesses = [];
  let losingPoints = 0;
  let totalGuesses = [];
  let gameOver = false;
  let score = 100;
  let warGamesText = "\n Do you want to play a game?\n\nType yes or no. \n\n";
  let badInput = "\n\nI don't understand your input.\n\nClick 'OK' and try again.\n ";
  let aiRandomWord = "I have picked a random word.";
  let revealDisplay = '';

  
  const wannaPlay = () => {
    let userResponse = readlineSync.question(warGamesText).toLowerCase();

    if (userResponse === "no") {
      console.log("Bye, see you later");
    } else if (userResponse === "yes") {
      return diffChoice();
    } else {
      console.log(badInput);
    }

    return wannaPlay();
  }

  function diffChoice() {
    let wordBank = [];
    let userResponse = readlineSync.question("\n Choose a difficulty level: 'easy' or 'hard'\n").toLowerCase();

    if (userResponse === 'easy') {
      wordBank = easy_wrods;
      whichGame = "easy";
    }else if (userResponse ==='hard'){
      wordBank = hard_words;
     
    } else {
       console.log(badInput);
       return diffChoice();
    }

    randomWordStr = wordBank[Math.floor(Math.random() * wordBank.length)];
    randomWordArr = randomWordStr.split('');
    randomWordArr.forEach(function(el) {
      reveal.push("_")
    });
    revealDisplay = reveal.join(" ");
  }

  function playGame() {
    if (totalGuesses.length === 0) {
      userGuess = readlineSync.question(aiRandomWord +"\n" + revealDisplay + "\n" + wrongGuesses + "\n" + "Guess a letter or go to sudden\ndeath by guessing the whole word: ");
    } else {
      userGuess = readlineSync.question(revealDisplay + "\n" + "Guessed Letters: " + wrongGuesses + "\n" + "Guess a letter or go to sudden\ndeath by guessing the whole word: ");
    }

    while (userGuess === "" || userGuess.match(/[^a-zA-Z]/g)) {
      if (userGuess.match(/[^a-zA-Z]/g)) {
        console.log("\n\n\nOnly letters will be accepted.\n\n\n\n      Click 'OK' to continue.\n\n\n")
        userGuess = playGame();
      } else {
        console.log(badInput);
        userGuess = playGame();
      }
    }

    userGuess = userGuess.toLowerCase().trim();
    return userGuess;
  }

  function afterCorrectGuess(arr, val) {
    const indexes = [];
    arr.forEach(function(el, index) {
      if (el === val) {
        indexes.push(index);
      }
    });

    indexes.forEach(function(el) {
      reveal.splice(el, 1, userGuess);
    });

    revealDisplay = reveal.join(" ");
    totalGuesses.push(userGuess);

    if (reveal.indexOf('_') < 0) {
      gameOverStatus("win");
    }
  }

  function afterWrongGuess() {
    wrongGuesses.push(userGuess);
    gallow = 10;
    losingPoints++;
    totalGuesses.push(userGuess);

    if (losingPoints === 10) {
      gameOverStatus("lose")
    }
  }

  function gameOverStatus (status) {
    gameOver = true;
    if (status === "win") {
      return console.log('\nYOU WON the ' + whichGame + ' game!\n   You guessed: ' +randomWordStr +'\n   Your score is ' + (score - (wrongGuesses.length*2)));
    } else {
      return console.log('\nYOU LOST the ' + whichGame + ' game :(\n' + 'The chosen word was: ' + randomWordStr + '.');
    }
  }

  wannaPlay();
  while (gameOver === false) {
    let userGuess = "";
    userGuess = playGame();

    while (totalGuesses.includes(userGuess)) {
      console.log ("\nYou already guessed that you FOOL!\nHere are the letters you've guessed so far: " + totalGuesses.sort()+"\n\nClick 'OK' to continue\n");
      userGuess = playGame();
    }

    if (userGuess.length > 1) {
      (userGuess === randomWordStr) ? gameOverStatus("win") : gameOverStatus("lose");
    }

    if (randomWordArr.includes(userGuess)) {
      afterCorrectGuess(randomWordArr, userGuess);
    }
  
    else {
      afterWrongGuess();
    }
  }

hangman();
}

hangman();