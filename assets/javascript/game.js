//window.onload = (function(){startGame()});

var words = [
	"whales",
	"badger",
	"hummingbird",
	"flacon",
	"jellyfish",
	"sealion"
	]

var currentWord = "";
var lettersInChosenWord = []; //turn array into a string
var numBlanks = 0;  //num of letters in array
var blanksAndSuccesses = []; //will restart game auto when game is complete
var wrongGuess = [];

var wins = 0;
var lossses = 0;
var numGuesses = 13;

function startGame(){
	var guesses = 13;
	var blanksAndSuccesses = [];
	var wrongGuess = [];

	currentWord = words[Math.floor(Math.random() * words.length)]
	lettersInChosenWord = currentWord.split("");
	numBlanks = lettersInChosenWord.length;
	console.log(currentWord);
	console.log(numBlanks);

	for(var i = 0; i < numBlanks; i++){
			blanksAndSuccesses.push("_");
		}
	console.log(blanksAndSuccesses);
	document.getElementById("guesses-left").innerHTML = numGuesses;	
	document.getElementById("word").innerHTML = blanksAndSuccesses.join("  ");
	}

function checkLetters(letter){
	var letterInWord = false;
	for (var i = 0; i < numBlanks; i++){
		if(currentWord[i] === letter){
			letterInWord = true;

	//console.log("we are in the right function", letter)

		}
	}
}

function levelUp(){  //update html here and determine if user wins


}


startGame();

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	//console.log("this is the letter typed", letterGuessed);
	checkLetters(letterGuessed);
}













