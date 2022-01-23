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
**Every button has a .on hover
*/
var startContent = document.querySelector('.start-content')
var quizContent = document.querySelector('.quiz-content')
var startQuiz = document.getElementById('start-quiz')
var timerEl = document.getElementById('timer')
var showHighscore = document.getElementById('highscores')
var questions = [
  // question index 0
  {question:"What is an array?",
  answer:"answer",
  choices: ["other choice", "other choice", "other choice", "answer"]},
  // question index 1
  {question:"How do you link a JS file?", 
  answer:"answer to question",
  choices: ["other choice", "answer", "other choice", "other choice"]}, 
  // question index 2 
  {question:"What does setAttribute method do?",
  answer:"answer to question",
  choices: ["answer", "other choice", "other choice", "other choice"]}]
// made our questions in to objects with key value pairs added other properties for the correct answer and the mult choice answer choices 
// in each element of the array we have an object w 3 properties
var next = 0

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
    }
  }, 1000);
}

function getQuestion(){
  var tempArray=questions[next]

  document.querySelector('.question').textContent = tempArray.question
  document.querySelector('.choice1').textContent = tempArray.choices[0]
  document.querySelector('.choice2').textContent = tempArray.choices[1]
  document.querySelector('.choice3').textContent = tempArray.choices[2]
  document.querySelector('.choice4').textContent = tempArray.choices[3]

  next++
}

document.querySelector('#next-question').addEventListener("click", function(){
  if (next<questions.length){
  getQuestion();
  }
  else {
    // Final Score, Input Initials, View Highscores 
  }
})

function gradeMessage(){
  var userChoice = this.textContent
  if (userChoice===questions[0].answer) {
  document.querySelector('.grade-message').textContent="Correct!"
  }
else {
  document.querySelector('.grade-message').textContent="Wrong!"
  timeLeft -=5
}}

// var answerButtons = document.querySelectorAll('choice')
document.querySelector('.choice1').addEventListener("click", gradeMessage)
document.querySelector('.choice2').addEventListener("click", gradeMessage)
document.querySelector('.choice3').addEventListener("click", gradeMessage)
document.querySelector('.choice4').addEventListener("click", gradeMessage)
// figure out how to tell it what the correct answer is! the answer wording has to match the string in the answer property exactly 





