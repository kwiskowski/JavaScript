import { questions } from "./questions.js";
import { congratulations } from "./questions.js";
import { password } from "./questions.js";

const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const quizBox = document.getElementById("quiz-wrapper");

const quizButton = document.querySelectorAll(".app-wrapper button");
console.log(quizButton.textContent);
// const sarnaQuizButton = document.getElementById("sarna-quiz");
// const dzikQuizButton = document.getElementById("dzik-quiz");
// const losQuizButton = document.getElementById("los-quiz");
// const bobrQuizButton = document.getElementById("bobr-quiz");
// const dzieciolQuizButton = document.getElementById("dzieciol-quiz");
// const pszczolaQuizButton = document.getElementById("pszczola-quiz");

quizButton.addEventListener("click", quizHandler);
// sarnaQuizButton.addEventListener("click", quizHandler);
// dzikQuizButton.addEventListener("click", quizHandler);
// losQuizButton.addEventListener("click", quizHandler);
// bobrQuizButton.addEventListener("click", quizHandler);
// dzieciolQuizButton.addEventListener("click", quizHandler);
// pszczolaQuizButton.addEventListener("click", quizHandler);

let currentQuestionIndex = 0;
let score = 0;
// let quizName = "Quiz";

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  // quizTitle.innerHTML = quizName;
  nextButton.innerHTML = "Następne pytanie";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetState();
  // quizTitle.innerHTML = `Udało Ci się zdobyć ${score} z ${questions.length}!`;
  quizBox.style.display = "none";

  if (score >= 6) {
    // questionElement.innerHTML = `${congratulations} ${password}`;
    questionElement.style.display = "none";
    quizTitle.innerHTML = `Udało Ci się zdobyć ${score} z ${questions.length}! </br>  ${congratulations} ${password}`;
  } else {
    // questionElement.innerHTML = "Prawie!, aby zdobyć hasło spróbuj jeszcze raz";
    quizTitle.innerHTML = `Udało Ci się zdobyć ${score} z ${questions.length}! </br> Prawie!, aby zdobyć hasło spróbuj jeszcze raz`;
    questionElement.style.display = "none";
  }
  nextButton.innerHTML = "Zagraj jeszcze raz";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    // startQuiz();
    // quizBox.style.display = "flex";
    location.reload();
  }
});

function quizHandler() {
  startQuiz();
  quizTitle.innerHTML = quizButton.textContent;
  quizBox.style.display = "none";
}
// console.log(quizName);
