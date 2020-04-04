/* 
When begin button is clicked, countdown starts and start answering questions
Create variables - begin button - 
Create variable for questions - var question = Array
- var myQuestions = [
	{
		question: "What is the markup language of the internet?",
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
Function to start the quiz - getElementById - addEventListener
Function to go to next question
Function to do something when button selected - timer starts
- var playButton = document.querySelector("#play");

- beginBtn.addEventListener("click", startTimer);
Keep score
*/

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
    	$('#time').text(counter);
      console.log("Timer --> " + counter);
    }
}, 1000);
});