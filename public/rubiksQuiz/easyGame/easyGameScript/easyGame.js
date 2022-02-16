const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
  {
    question: "How Many Possible Mixups Are There For A Rubiks Cube?",
    choice1: "43 Quintillion",
    choice2: "24000",
    choice3: "34 Billion",
    choice4: "52 Quintillion",
    answer: 1,
  },

  {
    question:
      "Which of the following organizations governs competitions for all puzzles labeled as Rubik puzzles?",
    choice1: "WCA",
    choice2: "ICA",
    choice3: "RCA",
    choice4: "CubeOrg",
    answer: 1,
  },

  {
    question: "What happens 'Just as my SD card runs out'?",
    choice1: "The GoPro falls off the desk",
    choice2: "The Square-1 explodes during an official solve",
    choice3: "Feliks Zemdegs breaks the World Record",
    choice4: "WALL-E hands over a cube to EVE",
    answer: 3,
  },

  {
    question: "Who is Oskar van Deventer?",
    choice1: "Custom twisty puzzle designer and inventor",
    choice2: "Speedcuber who broke the 2x2 and 3x3 records in 2008",
    choice3: "Magician who performs Rubik's Cube tricks",
    choice4: "Founder of the World Cube Association",
    answer: 1,
  },

  {
    question:
      "Who was the first speedcuber to solve the Rubik's Cube under 5 seconds on an official competition?",
    choice1: "Feliks Zemdegs",
    choice2: "Collin Burns",
    choice3: "Oskar van Deventer",
    choice4: "Lucas Etter",
    answer: 4,
  },

  {
    question: "In what year was the first Rubik's Cube created?",
    choice1:  "1981",
    choice2:  "1974",
    choice3:  "1969",
    choice4:  "1989",
    answer: 2,
  },

  {
    question: "What is the most popular Rubik's Cube?",
    choice1:  "4x4x4 Cube",
    choice2:  "Skewb",
    choice3:  "3x3x3 Cube",
    choice4:  "Square-1",
    answer: 3,
  },

  {
    question: "Who invented Rubik's Cube?",
    choice1:  "Feliks Zemdegs",
    choice2:  "Collin Burns",
    choice3:  "Erno Rubik",
    choice4:  "Rubik June",
    answer: 3,
  },

  {
    question: "Over 100 million Rubik's Cubes were sold between 1980 and 1982",
    choice1:  "True",
    choice2:  "Maybe",
    choice3:  "False",
    choice4:  "Not Possible",
    answer: 1,
  },

  {
    question: "How can you tell a real Rubik's Cube from a fake Rubik's Cube?",
    choice1:  "The fake Rubik's Cube is lighter",
    choice2:  "The fake Rubik's Cube has slightly rounded corners",
    choice3:  "The real Rubik's Cube can not be disassembled",
    choice4:  "The real Rubik's Cube has the Rubik's name on the sticker of the white center piece",
    answer: 4,
  },

];

const SCORE_POINTS = 100;
const MAX_QUESTIONS = 10;

startGame = () => {
  questionCounter = 0;
  score = 0;
  availableQuestions = [...questions];
  getNewQuestion();
};

getNewQuestion = () => {
  if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    localStorage.setItem("mostRecentScore", score);

    return window.location.assign("../easyGameHTML/end.html");
  }

  questionCounter++;
  progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
  progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;

  const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
  currentQuestion = availableQuestions[questionsIndex];
  question.innerText = currentQuestion.question;

  choices.forEach((choice) => {
    const number = choice.dataset["number"];
    choice.innerText = currentQuestion["choice" + number];
  });

  availableQuestions.splice(questionsIndex, 1);

  acceptingAnswers = true;
};

choices.forEach((choice) => {
  choice.addEventListener("click", (e) => {
    if (!acceptingAnswers) return;
    acceptingAnswers = false;

    const selectedChoice = e.target;
    const selectedAnswer = selectedChoice.dataset["number"];

    let classToApply =
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";

    if (classToApply === "correct") {
      incrementScore(SCORE_POINTS);
    }

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
      selectedChoice.parentElement.classList.remove(classToApply);
      getNewQuestion();
    }, 1000);
  });
});

incrementScore = (num) => {
  score += num;
  scoreText.innerText = score;
};

startGame();
