// use DOM to create varibles for funcitions 
// use event listeners to create actions

// create variable called something to do with answer and give it the data of an event listener that logs the users click on one of the possible answers??


// define variables below
var questionsArray = [{
    question: 'What breed of cat is typically always female?',
    answerArray: ['Bengal','Ragdoll','Calico','Sphynx'],
    correctAns: 'Calico',
},
{
    question: 'How many whiskers do cats usually have on each side of their face?',
    answerArray: ['6', '12', '15','32'],
    correstAns: '12',
},
{
    question: 'What is a group of cats called?',
    answerArray: ['Clowder', "Meowdur", "Prowl", "Bagel"],
    correstAns: "Clowder",
}]

var startQuiz = document.getElementById('advButton');
var timeLeft = 300;
var timerCount = document.getElementById('timeLeft');
timerCount.textContent = "Time Left: " + timeLeft;
var scoreBoard = document.getElementById('highScoresList');
var questionText = document.getElementById('questions');
var ansOpt1 = document.getElementById('option1');
var ansOpt2 = document.getElementById('option2');
var ansOpt3 = document.getElementById('option3');
var ansOpt4 = document.getElementById('option4');
var currentQuestion = 0
var score = 0



// create functions below
// activate quiz questions and timer
function beginQuiz() {
    countdown();
    questionDisplay();
}
// create timer countdown function and set up interval
function countdown(){
    var timerInterval = setInterval(function() {
        timeLeft--;
        timerCount.textContent = "Time Left: " + timeLeft;
        if (timeLeft === 0) {
            clearInterval(timerInterval);
            endQuiz();
        }
    }, 1000);
//add interval for each second subtract time by one second and update timer count text content
//if statement for if timer reaches zero, if so end quiz endQuiz()
}
// create question display
function questionDisplay() {
    for (var i = 0; i < questionsArray.length; i++) {
        questionText.textContent = questionsArray[i].question;
        ansOpt1.textContent = questionsArray[i].answerArray[0];
        ansOpt2.textContent = questionsArray[i].answerArray[1];
        ansOpt3.textContent = questionsArray[i].answerArray[2];
        ansOpt4.textContent = questionsArray[i].answerArray[3];
    }
    // update the content of questions and answers
    //overrite text for questions and answer elements
    //know which one is correct answer
}

// triggered by a guess
function checkAnswer(event) {
   
    //pull text content, compare to correct answer
    if (event.target.textContent === questionsArray[currentQuestion].correstAns) {
        score++
        questionDisplay();
    }else {
        questionDisplay();
        timeLeft--
    }
    // tell user if they got it right or wrong and proceed to next question
    //if wrong subtract time
}

//add end quiz function
function endQuiz() {
//clear the questions and present score
//clear interval needed
//enterName()
}

//create save name after game over
function enterName() {
//present form from HTML
//look up display none/display hidden for CSS
}

//display scoreboard
function saveName() {
//fetch value of input from enterName 
//add score to highScoresList, store under key
    //read saved scores, create variable and set equal to local storage
    //add new score into array
    //include localstorage getItem, stringify, pars. check notes from class
    //save new update array/list of scores and overwrite current list
// display content from highScoresList
}

//add event listener for submit button 
//variable.addEventListener('click', saveName);
// add event listener to begin quiz/timer
startQuiz.addEventListener('click', beginQuiz);