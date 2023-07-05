// use DOM to create varibles for funcitions 
// use event listeners to create actions

// create variable called something to do with answer and give it the data of an event listener that logs the users click on one of the possible answers??


// define variables below
var question1 = ['What breed of cat is typically always female?', 'How many whiskers do cats usually have on each side of their face?', 'What is a group of cats called?'
]

var ansArrays = [ ['Bengal','Ragdol','Calico','Sphynx'],['6', '12', '15','32'],['Clowder', "Meowdur", "Prowl", "Bagel"]];

var correstAns = ['Calico', "12", "Clowder"];

var startQuiz = document.getElementById('advButton');
var timeLeft = 300;
var timerCount = document.getElementById('timeLeft');
timerCount = "Time Left: " + timeLeft;
var scoreBoard = document.getElementById('highScoresList');
var questDisplay = document.getElementById('questions');
var ansOpt1 = document.getElementById('option1');
var ansOpt2 = document.getElementById('option2');
var ansOpt3 = document.getElementById('option3');
var ansOpt4 = document.getElementById('option4');



// create functions below
// activate quiz questions and timer
function beginQuiz() {
    // countdown();
    // questionDisplay();
}

function countdown(){

}

function questionDisplay() {
    
}
// create timer countdown function


// create question display


// add event listener to begin quiz/timer

startQuiz.addEventListener('click', beginQuiz);