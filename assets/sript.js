// use DOM to create varibles for funcitions 
// use event listeners to create actions

// create variable called something to do with answer and give it the data of an event listener that logs the users click on one of the possible answers??


// define variables below
var startQuiz = document.getElementById('advButton');
var timeLeft = 300;
var timerCount = document.getElementById('timeLeft');
timerCount = "Time Left: " + timeLeft;
var scoreBoard = document.getElementById('highScoresList');
var questions = document.getElementById('questions');
var ansOpt1 = document.getElementById('option1');
var ansOpt2 = document.getElementById('option2');
var ansOpt3 = document.getElementById('option3');
var ansOpt4 = document.getElementById('option4');



// create functions below
function beginQuiz() {
    questions.textContent = 'What breed of cat is typically always female?';
    ansOpt1.textContent = 'Bengal';
    ansOpt2.textContent = 'Ragdoll';
    ansOpt3.textContent = 'Calico';
    ansOpt4.textContent = 'Sphynx';
}
// 

// add event listener to begin quiz/timer

startQuiz.addEventListener('click', beginQuiz);