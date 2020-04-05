/* 
When begin button is clicked, countdown starts and start answering questions
Create variables - begin button - 
Create variable for questions - var question = Array
- var questions = [
	{
		questions: "What is the markup language of the internet?",
		answers: {
			a: 'Java',
			b: 'HTML',
			c: 'CSS'
		},
		correctAnswer: 'b'
	},
	{
		question: "What do you use to style a webpage?",
		answers: {
			a: 'HTML',
			b: 'Javascript',
			c: 'CSS'
		},
		correctAnswer: 'c'
	}
];

// $( "#first").on("click", function() {
//     alert("Wrong!");
// });

// $( "#second").on("click", function() {
//     alert("Wrong!");
// });

// $( "#third").on("click", function() {
//     alert("Correct!");
// });

Function to start the quiz - getElementById - addEventListener
Function to go to next question
Function to do something when button selected - timer starts
- var playButton = document.querySelector("#play");

- beginBtn.addEventListener("click", startTimer);
Get timer to stop when questions are done being answered
Keep score - score is equal to time left
List of highscores - save to localStorage.getItem('');
*/


//Timer - starts on begin button
$( "#begin-btn").on("click", function() {
    addEventListener.counter;

var counter = 60;
var interval = setInterval(function() {
    counter--;
    if (counter <= 0) {
     		clearInterval(interval);
      	$('#timer').html("<h3>Game Over!</h3>");  
        return;
    }else{
    	$('#time').text("Timer: " + counter);
      console.log("Timer --> " + counter);
    }
}, 1000);
});

//Selecting elements
var questions = document.getElementById('question');
var firstAnswer = document.getElementById('first');
var secondAnswer = document.getElementById('second');
var thirdAnswer = document.getElementById('third');

//Creating questions array
var questions = [
    {
        question : "What is the markup language for the internet?",
        choiceA : "HTML",
        choiceB : "CSS",
        choiceC : "Java",
        correct : "A"
    },
    {
        question : "What dynamically changes a webpage?",
        choiceA : "CSS",
        choiceB : "Javascript",
        choiceC : "HTML",
        correct : "B"
    },
    {
        question : "What is a library for Javascript?",
        choiceA : "Linux",
        choiceB : "Bootstrap",
        choiceC : "JQuery",
        correct : "C"
    }
];

//Creating variables
var lastQuestion = questions.length - 1;
var runningQuestion = 0;