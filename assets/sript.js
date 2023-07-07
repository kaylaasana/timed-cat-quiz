// define question and answers object
var questionsArray = [{
    question: 'What breed of cat is typically always female?',
    answerArray: ['Bengal','Ragdoll','Calico','Sphynx'],
    correctAns: 'Calico',
},
{
    question: 'How many whiskers do cats usually have on each side of their face?',
    answerArray: ['6', '12', '15','32'],
    correctAns: '12',
},
{
    question: 'What is a group of cats called?',
    answerArray: ['Clowder', "Meowdur", "Prowl", "Bagel"],
    correctAns: "Clowder",
}]

//define global variable and HTML selectors
var startQuiz = document.getElementById('advButton');
var timeLeft = 300;
var timeDeduction = 100;
var timerCount = document.getElementById('timeLeft');
timerCount.textContent = "Time Left: " + timeLeft;
var scoreBoard = document.getElementById('highScoresList');
var hallOfFame = document.getElementById('hall-of-fame');
var quizContent = document.getElementById('quiz-content');
var questionText = document.getElementById('questions');
var ansOpt1 = document.getElementById('option1');
var ansOpt2 = document.getElementById('option2');
var ansOpt3 = document.getElementById('option3');
var ansOpt4 = document.getElementById('option4');
var inputTextBox = document.getElementById('inputNameText')
var saveButton = document.getElementById('save-button');
var saveForm = document.getElementById('save-score');
var finalTime = document.getElementById('time-remaining');
var finalScore = document.getElementById('score');
var currentQuestion = 0;
var score = 0;
var storeName = document.getElementById('save-name');
var saveScore = document.getElementById('score');
var timerInterval;

// create functions below
function beginQuiz() {
    startQuiz.style.display = 'none';
    quizContent.style.display = 'block';
    //start timer
    countdown();
    // activate quiz questions
    questionDisplay();
}

// create timer countdown function and set up interval
function countdown(){
    timerInterval = setInterval(function() {
        //add interval for each second subtract time by one second and update timer count text content
        timeLeft--;
        timerCount.textContent = "Time Left: " + timeLeft;        
    //if statement for if timer reaches zero, if so end quiz, if questions are done, end timer
    if (timeLeft <= 0 || currentQuestion === questionsArray.length) {
        clearInterval(timerInterval);
        timerCount.textContent = "oops! all gone :("
        endQuiz();
    }
    }, 1000);
}

// create question display
function questionDisplay() {
    // update the content of questions and answers
     //overrite text for questions and answer elements
        questionText.textContent = questionsArray[currentQuestion].question;
        ansOpt1.textContent = questionsArray[currentQuestion].answerArray[0];
        ansOpt1.setAttribute('value', questionsArray[currentQuestion].answerArray[0]);
        ansOpt1.onclick = checkAnswer
        ansOpt2.textContent = questionsArray[currentQuestion].answerArray[1];
        ansOpt2.setAttribute('value', questionsArray[currentQuestion].answerArray[1]);
        ansOpt2.onclick = checkAnswer
        ansOpt3.textContent = questionsArray[currentQuestion].answerArray[2];
        ansOpt3.setAttribute('value', questionsArray[currentQuestion].answerArray[2]);
        ansOpt3.onclick = checkAnswer
        ansOpt4.textContent = questionsArray[currentQuestion].answerArray[3];
        ansOpt4.setAttribute('value', questionsArray[currentQuestion].answerArray[3]);
        ansOpt4.onclick = checkAnswer;
}

// triggered by a guess
//pull text content, compare to correct answer
function checkAnswer() {
    console.log(this.value);
    // tell user if they got it right or wrong and proceed to next question
    if (this.value === questionsArray[currentQuestion].correctAns) {
        console.log('correct');
        score++
    }else {
        console.log('incorrect');
            //if wrong subtract time
            timeLeft -= timeDeduction;
    }
    currentQuestion++
    
    if (currentQuestion === questionsArray.length) {
        endQuiz();
    }else {
        questionDisplay();
    }
}

//add end quiz function
function endQuiz() {
    //clear the questions and present score
    quizContent.style.display = 'none';
    //clear interval needed
    clearInterval(timerInterval);
    saveForm.removeAttribute('class', 'hidden'); 
    //trigger form for entering name
    enterName()
}

//create save name after game over
function enterName() {
    //present form from HTML
    saveForm.setAttribute('data-state', 'visible');
    //display final score and allow for name input 
    finalScore.textContent = 'Score: ' + score;
    inputTextBox.textContent = 'Input initials below: ';
}

//display scoreboard
function saveName() {
//fetch value of input from enterName
    var scoreArray = JSON.parse(localStorage.getItem('Final Scores')) || [];
    //add new score into array
    var newScore = {
        userScore: score,
        userName: storeName.value,
    }
    scoreArray.push(newScore);
    localStorage.setItem('Final Scores', JSON.stringify(scoreArray));
}

//set function to view high scores
function highScores() {
    //read saved scores, create variable and set equal to local storage
    var scoreArray = JSON.parse(localStorage.getItem('Final Scores')) || [];
    scoreArray.forEach(element => {
        var scoreItem = document.createElement('li');
        scoreItem.textContent = "Name: " + element.userName + " - Score: " + element.userScore;
        hallOfFame.append(scoreItem);
    });
}

scoreBoard.addEventListener("click", highScores);
//add event listener for submit button 
saveButton.addEventListener('click', saveName);
// add event listener to begin quiz/timer
startQuiz.addEventListener('click', beginQuiz);