/* 
GIVEN I am taking a code quiz
WHEN I click the Start-Quiz button
THEN a timer starts
    The first quiz question with multiple choice options will appear
    user will be able to select from four options: A B C D
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and my score
5. display leaderboard with button options to go back (reload initial webpage w saved highscores) or clear highscores (clear leaderboard then return to inital load)
*/
var startContent = document.querySelector('.start-content')
var quizContent = document.querySelector('.quiz-content')
var scoreContent = document.querySelector('.final-score')
var startQuiz = document.getElementById('start-quiz')
var timerEl = document.getElementById('timer')
var viewHighscoresButton = document.getElementById('highscores')
var leaderboardEl = document.querySelector('.leaderboard')
var leaderboardScoresEl = document.querySelector('#scores')
var goBackButton = document.querySelector('#go-back')
var clearScoresButton = document.querySelector('#clear-scores')
var questions = [
  // question index 0
  {question:"What is the primary statement used to exit a Javascript function?",
  answer:"return",
  choices: ["break", "throw", "try and catch", "return"]},
  // question index 1
  {question:"When you set the flex-direction to column, the justify-content property of the flexbox uses the ____ axis.", 
  answer:"vertical",
  choices: ["horizontal", "vertical", "z", "y"]}, 
  // question index 2 
  {question:"Which of the following is NOT a way to manipulate files and folders in terminal?",
  answer:"cd",
  choices: ["cd", "touch", "mkdir", "cp"]},
  // question index 3
  {question:"What selector can be used with pseudo-elements to change the appearance of an element when the user is pressing down on it? (e.g. the color of a button changes when you click on it)",
  answer:"element:active",
  choices: ["element:click", "element:focus", "element:active", "element:hover"]},
  // question index 4
  {question:"Choose the variable name that's written in camal case.",
  answer:"variableName",
  choices: ["variable-name", "VariableName", "<variable-name>", "variableName"]},
  // question index 5
  {question:"Which of the following is NOT a component of a CSS media query?",
  answer:"Javascript method",
  choices: ["media type", "Javascript method", "media feature expression", "logical operators"]},
  // question index 6
  {question:"What is data that is NOT an object and has NO methods?",
  answer:"primitive data type",
  choices: ["logical comparison operator", "arithmetic operator", "primitive data type", "conditional operator"]},
  // question index 7
  {question:"How do we interact with HTML and CSS using JS?",
  answer:"DOM",
  choices: ["DOM", "API", "localStorage", "JSON"]},
  // question index 8 
  {question:"What array method returns a new array containing the results of calling a function on every element in the array?",
  answer:"map",
  choices: ["push", "pop", "filter", "map"]},
  // question index 9 
  {question:"What is correct JavaScript file structure?",
  answer:"variables, functions, special functions (e.g. event listeners), logic",
  choices: ["logic, functions, variables, special functions (e.g. event listeners)", "variables, functions, special functions (e.g. event listeners), logic", "variables, logic, functions, special functions(e.g. event listeners)", "logic, special functions(e.g. event listeners), functions, variables"]}]
  
// made our questions in to objects with key value pairs added other properties for the correct answer and the mult choice answer choices 
// in each element of the array we have an object w 3 properties
var next = 0
var currentQuestion = 0
var correctAnswers = 0
const initialsEl = document.querySelector("#user-initials");
const submitInitialsBtnEl = document.querySelector("#submit-initials");
const userScoreEl = document.querySelector("#score-count");


startQuiz.addEventListener("click", init)
function init() {
// change the css to hide the h1, p, and start button on click of start button
startContent.setAttribute("style", "display: none;")
quizContent.setAttribute("style", "display:inline;")

getQuestion();
countdown();
}

var timeLeft = 74;
function countdown() {
  // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + ' seconds remaining';
      // Decrement `timeLeft` by 1
      timeLeft--;

    } else if (timeLeft===1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    }
    else if (timeLeft===0) {
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "Time's Up!";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      scoreContent.setAttribute("style", "display:block;")
      quizContent.setAttribute("style", "display:none;")
    }
  }, 1000);
}

function getQuestion(){
  var tempArray=questions[next]
  console.log(questions[next])
  document.querySelector('.question').textContent = tempArray.question
  document.querySelector('.choice1').textContent = tempArray.choices[0]
  document.querySelector('.choice2').textContent = tempArray.choices[1]
  document.querySelector('.choice3').textContent = tempArray.choices[2]
  document.querySelector('.choice4').textContent = tempArray.choices[3]

  next++
  currentQuestion++
  console.log(currentQuestion)
}

function gradeMessage(){
  var userChoice = this.textContent
  console.log(this.textContent)
  buttonClick = true
  console.log(questions[currentQuestion-1].answer)
  if (userChoice===questions[currentQuestion-1].answer){
    document.querySelector('.grade-message').textContent="Correct!"
    correctAnswers++
    console.log(correctAnswers)
  } else {document.querySelector('.grade-message').textContent="Wrong!"
      timeLeft -=5}
  }

var buttonClick=false

document.querySelector('#next-question').addEventListener("click", function(){
  if (buttonClick===false) {
    return;
  } else if (next<questions.length){
  getQuestion();
  }
  else {
    var finalScore = correctAnswers*10
    // Final Score, Input Initials, View Highscores
    scoreContent.setAttribute("style", "display:block;")
    quizContent.setAttribute("style", "display:none;")
    document.querySelector('#score-count').textContent=finalScore
    console.log(finalScore)
    localStorage.setItem(finalScore, "")
  }
  buttonClick=false
})

document.querySelector('.choice1').addEventListener("click", gradeMessage)
document.querySelector('.choice2').addEventListener("click", gradeMessage)
document.querySelector('.choice3').addEventListener("click", gradeMessage)
document.querySelector('.choice4').addEventListener("click", gradeMessage)

// highscoreInfo = localStorage.getItem("finalScore", JSON.stringify(finalScore)
    // populate the highscoreInfo array with the console logged scores 
    
    // 
    
// function storeInitials() {
//     let initValue = initialsEl.value.trim();
//     if (initValue) {
//         let userScore = { username: initValue, userScore: score };
//         initialsEl.value = '';
//         highScores = JSON.parse(localStorage.getItem("scores")) || [];
//         highScores.push(userScore)
//         localStorage.setItem("scores", JSON.stringify(highScores));
//         hide(inputScoreEl);
//         renderHighScores();
//         reset();
//     }

// submitInitialsBtnEl.addEventListener("click", storeInitials)

viewHighscoresButton.addEventListener("click", showLeaderboard)

function showLeaderboard() {
  scoreContent.setAttribute("style", "display:none;")
  quizContent.setAttribute("style", "display:none;")
  leaderboardEl.setAttribute("style", "display:block;")
  goBackButton.setAttribute("style", "display:block;")
  clearScoresButton.setAttribute("style", "display:block;")
}