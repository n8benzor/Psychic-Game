// created an array with all of the letters the user can chose
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_"];
// orginal game settings 
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;
//computer randomly chooses a letter
var computerGuess = letters[Math.floor(Math.random() * letters.length)];

console.log(computerGuess);

// function grabs the first element with the ID #gueesesLeft and converts the html displayed with text and contents of guessesleft variable
function countUserGuess() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

// function for the guessedLetters array
function addToGuessed() {
    document.querySelector("#guessedLetters").innerHTML = "Your guesses so far: " + guessedLetters.join(' ');
}

// restart game function
function restart() {
    var guessesLeft = 9;
    var guessedLetters = [];
    var computerGuess = letters[Math.floor(Math.random() * letters.length)];
}

countUserGuess();

// users presses a key
document.onkeyup = function(event) {
    guessesLeft--;
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessedLetters.push(userGuess);
    countUserGuess();
    addToGuessed();

    if (userGuess === computerGuess) {
        wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        restart();
    }
    else if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = "losses: " + losses;
        restart();
    }
};

// comparison between the users guess and the randomly generated computer guess

// if the user guesses the correct letter then the game is over, it adds a win and the game resets with a new random number

// else the users guess is incorrect and it adds to the losses, adds to the guessed letter and updates guesses left

// reset game function