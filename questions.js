export const questions = [
  // {
  //   question: "PYTANIE?",
  //   answers: [
  //     { text: "A", correct: false },
  //     { text: "B", correct: true },
  //     { text: "C", correct: false },
  //   ],
  // },

  // Tematy quizów wpisywane w subject: sarna, dzik, łoś, bóbr, dzięcioł, pszczoła

  {
    subject: "sarna",
    question: "Czym się żywi sarna?",
    answers: [
      { text: "Jest drapieżnikiem", correct: false },
      { text: "Roślinami", correct: true },
      { text: "Jest wszystkożerna", correct: false },
    ],
  },

  {
    subject: "sarna",
    question: "Jak się nazywa samiec sarny?",
    answers: [
      { text: "Kozioł", correct: true },
      { text: "Byk", correct: false },
      { text: "Saren", correct: false },
    ],
  },

  {
    subject: "sarna",
    question: "Jak się nazywa kostny twór na głowie samca sarny?",
    answers: [
      { text: "poroże", correct: true },
      { text: "rogi", correct: false },
      { text: "łopaty", correct: false },
    ],
  },

  {
    subject: "sarna",
    question: "Gdzie odpoczywają sarny?",
    answers: [
      { text: "w domu", correct: false },
      { text: "w barłogu", correct: false },
      { text: "w ostoi", correct: true },
    ],
  },

  {
    subject: "sarna",
    question: "Kiedy możemy spotkać małe sarny?",
    answers: [
      { text: "na jesieni", correct: false },
      { text: "wiosną", correct: true },
      { text: "na początku zimy", correct: false },
    ],
  },

  {
    subject: "pszczoła",
    question: "Co takiego zbiera pszczoła z kwiatów?",
    answers: [
      { text: "pyłek i nektar", correct: true },
      { text: "węze", correct: false },
      { text: "miód", correct: false },
    ],
  },

  {
    subject: "pszczoła",
    question: "Co oznacza odcień wosku pszczelego?",
    answers: [
      { text: "im jaśniejszy tym starszy", correct: false },
      { text: "im ciemniejszy tym starszy", correct: true },
      { text: "u każdego gatunku pszczół jest innego koloru", correct: false },
    ],
  },

  {
    subject: "pszczoła",
    question: "w jakich porach roku pszczoły zapylają rośliny?",
    answers: [
      { text: "wiosną i latem", correct: true },
      { text: "latem i jesienią", correct: false },
      { text: "cały rok", correct: false },
    ],
  },
];

export const congratulations =
  "Gratulacje, udało Ci się przejść Quiz, Twoje tajne hasło, dzięki któremu odbierzesz swoją nagrodę to:";

export const password = "  Leśna Księga Życia";

// function losujPytanie(tablica) {
//   const losowyIndex = Math.floor(Math.random() * tablica.length);
//   return tablica[losowyIndex].pytanie;
// }

// // Przykładowa tablica obiektów
// const pytania = [
//   { pytanie: "Jaki jest Twój ulubiony kolor?", odpowiedz: "Niebieski" },
//   { pytanie: "Jakie jest Twoje ulubione zwierzę?", odpowiedz: "Pies" },
//   { pytanie: "Co lubisz robić w wolnym czasie?", odpowiedz: "Grać na gitarze" },
// ];

// // Wywołanie funkcji
// const losowePytanie = losujPytanie(pytania);
// console.log(losowePytanie);

export let selectedQuestions = [];

function selectQuestion() {
  // Funkcja pushnie wylosowane pytania do tablicy selectedQuestions
}

let questionsNumber = 4;

function getRandoQuestions(zbiorObiektow, questionsNumber) {
  // Upewnij się, że tablica nie jest pusta
  if (zbiorObiektow.length === 0) {
    console.log("Tablica obiektów jest pusta.");
    return;
  }

  // Upewnij się, że liczba losowanych obiektów nie przekracza długości tablicy
  if (questionsNumber > zbiorObiektow.length) {
    console.log("Liczba losowanych obiektów przekracza długość tablicy.");
    return;
  }

  // Losowanie obiektów bez zwracania
  const losowaneIndeksy = [];
  for (let i = 0; i < questionsNumber; i++) {
    let losowyIndeks;
    do {
      losowyIndeks = Math.floor(Math.random() * zbiorObiektow.length);
    } while (losowaneIndeksy.includes(losowyIndeks));
    losowaneIndeksy.push(losowyIndeks);
    console.log("Wylosowany obiekt:", zbiorObiektow[losowyIndeks]);
  }
}

// Wywołanie funkcji, aby wylosować x pytań
getRandoQuestions(questions, questionsNumber);
