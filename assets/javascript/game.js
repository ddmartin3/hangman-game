    $(document).ready(function() {
		//PROPERTIES:
		//make object that includes array for words

		var gameDisplay = document.getElementById("game");

		var gameWord;

		var gameWordArray= [];

		var blankWord= [];

		var winCounter= 0;



		var gameObject = { 
			"words": [
        	"klingon",
        	"ferengi",
        	"nelix",
        	"archer",
        	"tuvoc",
        	"riker",
        	"janeway",
        	"kirk",
        	"spock",
        	"borg",
        	"picard",
        	"sulu",
        	"sisko",
        	"enterpise",
        	"voyager",
        	"defiant"
        	],
        	"redDeath":[
        	"assets/images/reddeath1.gif",
        	"assets/images/reddeath2.gif",
        	"assets/images/reddeath3.gif",
        	"assets/images/reddeath4.gif",
        	"assets/images/reddeath5.gif",
        	]


         }

		//pull words from array randomly and determine their length 

			function selectWord() {


		 		var gameWord = gameObject.words[Math.floor(Math.random() * gameObject.words.length)];

		 		var playedLetter = [];
		 		var win= 0;
		 		var misses = 0;


		 		//Resets
		 		blankWord= [];
		 		$("#game").html(blankWord);
		 		$("#played").text("playedLetter: " + playedLetter);
		 		$("#startButton").text("Make It So.");

		 		//Build the check and blank arrays
		 		for (var i = 0; i < gameWord.length; i++) {
		 	 		blankWord.push("_ ");
		 		}

		 		for (var i = 0; i < gameWord.length; i++) {
		 	 		gameWordArray.push(gameWord[i]);
		 	 	}

		 	 	//display blankWord
 				$("#game").html(blankWord);

 				$("#wins").text("Number of days without incident: " + winCounter);

		 			 //ACCEPTING USER INPUT:
			//use event to aquire user guesses

			document.onkeyup = function(event) {

      			var guess = event.key;
      			
      			if (playedLetter.includes(guess)){
      				alert("You've already played " + guess);
      				misses--;
      			}

      			playedLetter.push(guess);

      			$("#played").text("Letters Tried: " + playedLetter);

      		//test guesses against gameWord string

      			if (gameWord.includes(guess)) {

      				// figure out what locations in the blankWord array to change.
      				for (var i = gameWord.length - 1; i >= 0; i--) {
      					if (gameWord[i] == guess) {
      					// change the blank space associated with the letter chosen.
      						//set blankWord[i] equal to gameword[i]
      						blankWord[i] = gameWord[i];
      						//redisplay blankWord.
      						$("#game").html(blankWord);

      						//add one point to win
      						win++;
      						console.log("letters down: " + win);

      					} 
      				}
					
				}else{ 
					//subtract a chance.
					misses++;
					console.log("bad guesses: " + misses);
				// End game at loss
				}

				if (win == gameWord.length) {
					alert("You Win!");
					winCounter++;
					$("#wins").text("Number of days without incident: " + winCounter);
				}

				if (misses === 10) {
					var deadRedShirt = gameObject.redDeath[Math.floor(Math.random() * gameObject.words.length)];

					$("#game").html("<img src="+deadRedShirt + " width= 400px>");
					$("#startButton").text("Try Again");
					alert("You let the Red Shirt die!!! Streak lost");
					winCounter= 0;

				}
				

		 	}



		 }

		$("#startButton").on("click", function() {
        	selectWord()
      	});

	})




