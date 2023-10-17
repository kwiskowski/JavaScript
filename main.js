import { questions } from "./questions.js";
import { congratulations } from "./questions.js";
import { password } from "./questions.js";

// import Notiflix from "notiflix";

const quizTitle = document.getElementById("quiz-title");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const quizBox = document.getElementById("quiz-wrapper");

const sarnaQuizButton = document.getElementById("sarna-quiz");
const dzikQuizButton = document.getElementById("dzik-quiz");
const losQuizButton = document.getElementById("los-quiz");
const bobrQuizButton = document.getElementById("bobr-quiz");
const dzieciolQuizButton = document.getElementById("dzieciol-quiz");
const pszczolaQuizButton = document.getElementById("pszczola-quiz");

sarnaQuizButton.addEventListener("click", quizHandler);
dzikQuizButton.addEventListener("click", quizHandler);
losQuizButton.addEventListener("click", quizHandler);
bobrQuizButton.addEventListener("click", quizHandler);
dzieciolQuizButton.addEventListener("click", quizHandler);
pszczolaQuizButton.addEventListener("click", quizHandler);

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Następne pytanie";
  quizBox.style.display = "none";
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
  quizBox.style.display = "none";

  if (score >= 6) {
    questionElement.style.display = "none";
    quizTitle.innerHTML = `Udało Ci się zdobyć ${score} z ${questions.length}! </br>  ${congratulations} ${password}`;
  } else {
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
    location.reload();
  }
});

function quizHandler() {
  startQuiz();
  quizTitle.innerHTML = quizButton.textContent;
  quizBox.style.display = "none";
}

// Modal
const backdrop = document.getElementById("modal-game");

// Lista gier
const quizGame = document.getElementById("quiz-game");
const secondGame = document.getElementById("second-game");
const thirdGame = document.getElementById("third-game");
// Otwieranie modala quizu
quizGame.addEventListener("click", openModal);
function openModal() {
  backdrop.classList.remove("is-hidden");
}
// Otwieranie modala pozostałych gier
secondGame.addEventListener("click", gameNotReady);
thirdGame.addEventListener("click", gameNotReady);
function gameNotReady() {
  // Notiflix.Notify.warning("Gra w produkcji, cierpliwości");
  alert("Gra w produkcji, cierpliwości :P");
}

// Zamykanie modala
const modalCloseBtn = document.getElementById("modal-close-btn");
modalCloseBtn.addEventListener("click", closeModal);

function closeModal() {
  backdrop.classList.add("is-hidden");
}
// _____________________________________________________________________________________________
