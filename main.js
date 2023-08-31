import { myQuestions } from "./questions.js";
import { congratulations } from "./questions.js";
import { password } from "./questions.js";
console.log(myQuestions);

// Początek kodu quizu

const quizContainer = document.getElementById("quiz");
const resultsContainer = document.getElementById("results");
const submitButton = document.getElementById("submit");

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(
  questions,
  quizContainer,
  resultsContainer,
  submitButton
) {
  function showQuestions(questions, quizContainer) {
    // we'll need a place to store the output and the answer choices
    const output = [];
    let answers;
    let letter = ["a", "b", "c"];

    // for each question...
    let i;
    for (let i = 0; i < questions.length; i++) {
      // first reset the list of answers
      answers = [];

      // for each available answer...
      for (letter in questions[i].answers) {
        // ...add an html radio button
        answers.push(
          "<label>" +
            '<input type="radio" name="question' +
            i +
            '" value="' +
            letter +
            '">' +
            letter +
            ": " +
            questions[i].answers[letter] +
            "</label>"
        );
      }

      // add this question and its answers to the output
      output.push(
        '<div class="question">' +
          questions[i].question +
          "</div>" +
          '<div class="answers">' +
          answers.join("") +
          "</div>"
      );
    }

    // finally combine our output list into one string of html and put it on the page
    quizContainer.innerHTML = output.join("");
  }

  function showResults(questions, quizContainer, resultsContainer) {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    let userAnswer = "";
    let numCorrect = 0;

    // for each question...
    let i;
    for (i = 0; i < questions.length; i++) {
      // find selected answer
      userAnswer = (
        answerContainers[i].querySelector(
          "input[name=question" + i + "]:checked"
        ) || {}
      ).value;

      // if answer is correct
      if (userAnswer === questions[i].correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[i].style.color = "lightgreen";
      }
      // if answer is wrong or blank
      else {
        // color the answers red
        answerContainers[i].style.color = "red";
      }
    }

    // show number of correct answers out of total
    resultsContainer.innerHTML = numCorrect + " na " + questions.length;

    console.log(numCorrect);
    if (numCorrect >= 6) {
      const rewardContainer = document.getElementById("reward");
      // rewardContainer.innerHTML = congratulations + password;
      alert(congratulations + password);
    }
  }

  // show questions right away
  showQuestions(questions, quizContainer);

  // on submit, show results
  submitButton.onclick = function () {
    showResults(questions, quizContainer, resultsContainer);
  };
}

// Koniec kodu quizu
