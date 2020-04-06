/* 
When begin button is clicked, countdown starts and start answering questions
Create variables - begin button - 
Create variable for questions - var question = Array
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
$("#begin-btn").on("click", function() {
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
var scores = document.getElementById('scores');
var score = 0

//Creating questions array
var questions = [
    {
        question : "What is the markup language for the internet?",
        answerA : "HTML",
        answerB : "CSS",
        answerC : "Java",
        correct : "A"
    },
    {
        question : "What dynamically changes a webpage?",
        answerA : "CSS",
        answerB : "Javascript",
        answerC : "HTML",
        correct : "B"
    },
    {
        question : "What is a library for Javascript?",
        answerA : "Linux",
        answerB : "Bootstrap",
        answerC : "JQuery",
        correct : "C"
    }
];

//Creating variables
var lastQuestion = questions.length - 1;
var runningQuestion = 0;
var count = 0;

// Functions
function renderQuestion(){
    var q = questions[runningQuestion];
    // if(runningQuestion < lastQuestion) {
    // runningQuestion++;
    // renderQuestion();
    // } else {
    //     return;
    // }
    question.innerHTML = "<p>"+ q.question +"</p>";
    firstAnswer.innerHTML = q.answerA;
    secondAnswer.innerHTML = q.answerB;
    thirdAnswer.innerHTML = q.answerC;
};

function checkAnswer(answer) {
    if(answer === questions[runningQuestion].correct) {
        score++;
    } else{
        alert('Wrong!');
    }
    count = 0;
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        clearInterval();
        return;
    }
};

function getScore() {
    scores.style.display = "block";
    scores.innerHTML = score
    localStorage.setItem('scores')
    console.log('getScore')
}

// for (var i = 0, l = questions.length; i < l; i++) {
//     var obj = questions[i];
// }

// runningQuestion = 0;
// renderQuestion();
// runningQuestion++
// renderQuestion();

// function selectAnswer(event) {
//     // Verify one that is clicked gets the true statement within the array
//     var text_received = event.target.innerText;
//     //Go through the questions array at the current index - this is the current question
//     questions[current_index].answers.forEach(answer => {
//         if (answer.text === text_received && answer.correct) {
//             console.log("Nailed it")
//         }
//     })
//     answerButtonsElement.innerHTML = ""
//     current_index += 1
//     if (current_index > questions.length) {
//         /// The game is over. Crush their dreams
//     } else {
//         displayQuestion(questions)
//     };
// firstAnswer.addEventListener("click", function(event) {
//     event.preventDefault();
    
// });

// for (i=0; i < questions.length; i++) {
//     console.log(questions);
//     document.writeIn(questions[i].question);
// }