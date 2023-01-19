//creating all required DOM element
var questionsEl = document.querySelector("#questions");
var timerEl = document.querySelector("#timer");
var choicesEl = document.querySelector("#choices");
var submitBtn = document.querySelector("#final-score");
var startBtn = document.querySelector("#start");
var nameEl = document.querySelector("#initial");
var feedbackEl = document.querySelector("#feedback");

var currentQuestionIndex = 0;
var time = questions.length * 15;
var timerId;

function quizStart() {
  var landingScreenEl = document.getElementById("start-screen");
  landingScreenEl.setAttribute("class", "hide");
  questionsEl.removeAttribute("class");
  getQuestion();
}

function getQuestion() {
  var currentQuestion = questions[currentQuestionIndex];
var quesEl = document.getElementById("question-title")
  quesEl.textContent = currentQuestion.question;
  choicesEl.innerHTML = "";
  currentQuestion.choices.forEach(function(choice, i) {
      var choiceBtn = document.createElement("button");
      choiceBtn.setAttribute("value", choice);
      choiceBtn.textContent = i + 1 + ". " + choice;
      choiceBtn.onclick = questionClick;
      choicesEl.appendChild(choiceBtn);
  });
}

function questionClick() {
  if (this.value !== questions[currentQuestionIndex].answer) {
    time -= 10;
    if (time < 0) {
      time = 0;
    }

    feedbackEl.textContent = `Wrong! The correct answer was ${questions[currentQuestionIndex].answer}.`;
    feedbackEl.style.color = "red";
  } else {
    feedbackEl.textContent = "Right!";
    feedbackEl.style.color = "green";
  }
  feedbackEl.setAttribute("class", "feedback");
  setTimeout(function() {
    feedbackEl.setAttribute("class", "feedback hide");
  }, 2000);
  currentQuestionIndex++;
  if (currentQuestionIndex === questions.length) {
    quizEnd();
  } else {
    getQuestion();
  }
}
function quizEnd() {
  clearInterval(timerId);
  var endScreenEl = document.getElementById("end-screen");
  endScreenEl.removeAttribute("class");
  var finalScoreEl = document.getElementById("score-final");
  
  questionsEl.setAttribute("class", "hide");
}

startBtn.onclick = quizStart;