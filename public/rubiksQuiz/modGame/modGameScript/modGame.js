const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion =  {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Where did the first Rubik's Cube competition was organized?",
        choice1:  "Brazil",
        choice2:  "Budapest",
        choice3:  "Paris",
        choice4:  "Boston",
        answer: 2,
      },
    
      {
        question: "What did the Rubik's Cube manufacturer consider naming the cube for its international launch in 1980?",
        choice1:  "It was always going to be called Rubik's Cube",
        choice2:  "The Gordian Knot",
        choice3:  "The Wonder Cube",
        choice4:  "Puzzling Puzzle",
        answer: 2,
      },
    
      {
        question: "Who set the first official world record time for solving the 3x3x3 Rubik's Cube? How fast was that record?",
        choice1:  "Feliks Zemdegs 7.95 seconds",
        choice2:  "Lucas Etter 4.93 seconds",
        choice3:  "Minh Thai 22.95 Seconds",
        choice4:  "Erno Rubik 24.22 seconds",
        answer: 3,
      },
    
      {
        question: "How many PLL Cases are there in CFOP method of solving Rubik's Cube",
        choice1:  "51",
        choice2:  "27",
        choice3:  "21",
        choice4:  "12",
        answer: 3,
      },
    
      {
        question: "Who is the first cuber to get a sub 4 in an official competition?",
        choice1:  "Max Park",
        choice2:  "Feliks Zemdegs",
        choice3:  "Yusheng du",
        choice4:  "Aryan Chabbra",
        answer: 3,
      },
    
      {
        question: "In what year skewb was declared an official wca event?",
        choice1:  "2012",
        choice2:  "2006",
        choice3:  "2014",
        choice4:  "2018",
        answer: 3,
      },
    
      {
        question: "Which cuber dropped the cube while solving and still got a sub 5 solve in an offical WCA competition?",
        choice1:  "Sebastian Weyer",
        choice2:  "Chris Olson",
        choice3:  "Patrick Ponce",
        choice4:  "Jayden McNeill",
        answer: 4,
      },
    
      {
        question: "Choose the most used speedcubing method?",
        choice1:  "CFOP",
        choice2:  "Roux",
        choice3:  "Petrus",
        choice4:  "ZZ",
        answer: 1,
      },
    
      {
        question: "Who holds the asian record for 3x3 OH (single) event?",
        choice1:  "Bhargav Narasimhan",
        choice2:  "Asia Konvittayayotin",
        choice3:  "Ruihang Xu",
        choice4:  "Max Park",
        answer: 2,
      },
    
      {
        question: "which cuber won the WCA World Championship twice?",
        choice1:  "Max Park",
        choice2:  "Yusheng Du",
        choice3:  "Kevin Hays",
        choice4:  "Feliks Zemdegs",
        answer: 4,
      },
    
      {
        question: "Where was the World Rubik's Cube Championship was held in 2019",
        choice1:  "Paris, France",
        choice2:  "Beijing, China",
        choice3:  "Melbourne, Australia",
        choice4:  "São Paulo, Brazil",
        answer: 3,
      },
    
      {
        question: "Who is the world record holder for rubiks cube with feet event?",
        choice1:  "Mohammed Aiman Koli",
        choice2:  "Henri Gerber",
        choice3:  "Daniel Rose-Levine",
        choice4:  "Tommy Cherry",
        answer: 1,
      },
    
      {
        question: "Who invented CFOP method of solving 3x3x3 Rubik's Cube?",
        choice1:  "Jessica Fredrich",
        choice2:  "Ron Van Bruchem",
        choice3:  "Minh Thai",
        choice4:  "Erik Akkersdijk",
        answer: 1,
      },
    
      {
        question: "The book 'The Winning Solution' teaches which method?",
        choice1:  "CFOP",
        choice2:  "Roux",
        choice3:  "Ortega",
        choice4:  "Ortega Corners-First",
        answer: 4,
      },
    
      {
        question: "In which year WCA was formed?",
        choice1:  "2000",
        choice2:  "2002",
        choice3:  "2003",
        choice4:  "2007",
        answer: 3,
      },
];


const SCORE_POINTS = 100;
const MAX_QUESTIONS = 15;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score);

        return window.location.assign('../modGameHTML/end.html');
    }

    questionCounter++;
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`;
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`;

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionsIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuestions.splice(questionsIndex, 1);

    acceptingAnswers = true;
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return;
        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
    })
})

incrementScore = num => {
    score += num;
    scoreText.innerText = score;
}

startGame();