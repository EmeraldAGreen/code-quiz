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
  answer:"answer to question",
  choices: ["other choice1", "other choice 2", "other choice 3", "answer"]},
  // question index 1
  {question:"How do you link a JS file?", 
  answer:"answer to question",
  choices: ["other choice1", "other choice 2", "other choice 3"]}, 
  // question index 2 
  {question:"What does setAttribute method do?",
  answer:"answer to question",
  choices: ["other choice1", "other choice 2", "other choice 3"]}]
// made our questions in to objects with key value pairs added other properties for the correct answer and the mult choice answer choices 
// in each element of the array we have an object w 3 properties

startQuiz.addEventListener("click", init)
function init() {
// change the css to hide the h1, p, and start button on click of start button
startContent.setAttribute("style", "display: none;")
quizContent.setAttribute("style", "display:inline;")

document.querySelector('.question').textContent = questions[0].question
document.querySelector('.choice1').textContent = questions[0].choices[0]
document.querySelector('.choice2').textContent = questions[0].choices[1]
document.querySelector('.choice3').textContent = questions[0].choices[2]
document.querySelector('.choice4').textContent = questions[0].choices[3]

function countdown() {
    var timeLeft = 74;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        displayMessage();
      }
    }, 1000);
  }
countdown();
}

function gradeMessage(){
  var userChoice = this.textContent
  if (userChoice===questions[0].answer) {
  document.querySelector('.grade-message').textContent="Correct!"
  }
else {
  document.querySelector('.grade-message').textContent="Wrong!"
}}

// var answerButtons = document.querySelectorAll('choice')
document.querySelector('.choice1').addEventListener("click", gradeMessage)
document.querySelector('.choice2').addEventListener("click", gradeMessage)
document.querySelector('.choice3').addEventListener("click", gradeMessage)
document.querySelector('.choice4').addEventListener("click", gradeMessage)

// figure out how to tell it what the correct anser is! 


