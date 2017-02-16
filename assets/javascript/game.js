var words = [
	"whales",
	"badger",
	"hummingbird",
	"falcon",
	"jellyfish",
	"sealion"
	]

var currentWord = "";
var chosenLetters = []; //turn array into a string
var numBlanks = 0;  //num of letters in array
var levelUp = []; //will restart game auto when game is complete
var wrongGuess = [];

var wins = 0;
var losses = 1;
var numGuesses = 8;

function startGame(){
	var numGuesses = 8;
	var levelUp = [];
	var wrongGuess = [];

	currentWord = words[Math.floor(Math.random() * words.length)]
	chosenLetters = currentWord.split("");
	numBlanks = chosenLetters.length;
	console.log(currentWord);
	console.log(numBlanks);

	for(var i = 0; i < numBlanks; i++){    
			levelUp.push("_");
		}
	console.log(levelUp);
	document.getElementById("guesses-left").innerHTML = numGuesses;	
	document.getElementById("word-blank").innerHTML = levelUp.join("  ");
	}

function checkLetters(letter){
	var letterInWord = false; //how do you show if the letter is in the word?

	for (var i = 0; i < numBlanks; i++){
		if(currentWord[i] === letter){
			letterInWord = true;  //how do you check if te guess ixs in the word?
		}
	}

	if(letterInWord){                            //how do you keep score if they guess right?
		for(i = 0; i < numBlanks; i++){
			if(currentWord[i] === letter){
			levelUp[i] = letter;
			}
			}
		}
	
	else{
		numGuesses --;
		wrongGuess.push(letter);
	}
	
}

function roundComplete(){  //update html here and determine if user wins
	document.getElementById("word-blank").innerHTML = levelUp.join(" _ ");
	document.getElementById("guesses-left").innerHTML = numGuesses;
	

	console.log(chosenLetters);

	if(chosenLetters === levelUp){
		wins++;
		alert("You Win!!!");
		document.getElementById("wincounter").innerHTML = wins;
		startGame();
	}
	else if(numGuesses === 0){
		document.getElementById("losscounter").innerHTML = losses++;
		document.getElementById("wrong-guesses").innerHTML = " ";
		alert("Sorry, you lost this round");
		var wrongGuess = [];
		startGame();
	}
}


startGame();

document.onkeyup = function(event){
	var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
	checkLetters(letterGuessed);
	roundComplete();
}













