const questionsArr = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: ["Kangaroo", "Kiwi bird", "Koala", "Emu"],
    answer: "Kiwi bird",
  },
  {
    question: "What is the capital city of New Zealand?",
    options: ["Auckland", "Wellington", "Christchurch", "Hamilton"],
    answer: "Wellington",
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: ["Maori", "Aborigines", "Inuit", "Sami"],
    answer: "Maori",
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series",
    ],
    answer: "Lord of the Rings trilogy",
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley",
    ],
    answer: "Mount Cook (Aoraki)",
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: ["Auckland", "Wellington", "Dunedin", "Queenstown"],
    answer: "Auckland",
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: ["Cricket", "Rugby Union", "Soccer", "Netball"],
    answer: "Rugby Union",
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: ["Tasman Sea", "Coral Sea", "South China Sea", "Arafura Sea"],
    answer: "Tasman Sea",
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: ["Haka", "Hongi", "Powhiri", "Waka"],
    answer: "Hongi",
  },
  {
    question:
      "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: ["Rotorua", "Christchurch", "Hamilton", "Napier"],
    answer: "Rotorua",
  },
];
/*
let count = 0; //counter for question number
function setQuestionAndAnswerText() {
  let myQuestion = document.getElementById("question");
  myQuestion.innerText = questionsArr[count].question;

  let answerOne = document.getElementById("first");
  answerOne.innerText = questionsArr[count].options[0];

  let answerTwo = document.getElementById("second");
  answerTwo.innerText = questionsArr[count].options[1];

  let answerThree = document.getElementById("third");
  answerThree.innerText = questionsArr[count].options[2];

  let answerFour = document.getElementById("fourth");
  answerFour.innerText = questionsArr[count].options[3];
}
setQuestionAndAnswerText();

let selectedAnswer = null; //to indicate that no answer has been clicked yet
const answers = document.querySelectorAll(".answer");
answers.forEach((answer) => {
  //iterates though each answer in the nodelist
  answer.addEventListener("click", function () {
    //adds event handlers to each element of the nodelist
    if (selectedAnswer) {
      selectedAnswer.style.backgroundColor = ""; //resets previously selected answer background to default
    }
    selectedAnswer = answer;
    selectedAnswer.style.backgroundColor = "lightgray";
  });
});


const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function () {
 // if (submitButton.innerText === "Click For Next Question") {}
  const correctAnswer = questionsArr[count].answer;
  answers.forEach((answer) => {
    if (answer.innerText === correctAnswer) {
      answer.style.backgroundColor = "green";
      submitButton.innerText = "Click For Next Question";
    } else if (selectedAnswer === answer) {
      answer.style.backgroundColor = "red";
      submitButton.innerText = "Click For Next Question";
    }
    count++;
    setQuestionAndAnswerText();
  })
}); */

let myQuestion = document.getElementById("question");
let answerOne = document.getElementById("first");
let answerTwo = document.getElementById("second");
let answerThree = document.getElementById("third");
let answerFour = document.getElementById("fourth");
const submitButton = document.getElementById("submit");
let questionIndex = 0;
let correctAnswer = questionsArr[questionIndex].answer;

function updateQuestion() {

  myQuestion.innerText = questionsArr[questionIndex].question;

  answerOne.innerText = questionsArr[questionIndex].options[0];

  answerTwo.innerText = questionsArr[questionIndex].options[1];

  answerThree.innerText = questionsArr[questionIndex].options[2];

  answerFour.innerText = questionsArr[questionIndex].options[3];
}
updateQuestion();

let answersArr = [answerOne, answerTwo, answerThree, answerFour];
let selectedAnswer = null;

answersArr.forEach((answer) => {
  answer.addEventListener("click", function () {
    if (submitButton.innerText == "Submit Answer") {
      if (selectedAnswer) {
        //reset all selected elements to default
        selectedAnswer.style.backgroundColor = "";
      }
      selectedAnswer = answer;
      selectedAnswer.style.backgroundColor = "lightgray";
    }
  });
});

submitButton.addEventListener("click", submitAnswer);

function submitAnswer() {
  if (submitButton.innerText == "Submit Answer") {
    submitButton.innerText = "Next Question";

    if (selectedAnswer.innerText !== correctAnswer) {
      selectedAnswer.style.backgroundColor = "red";
    }
    answersArr.forEach(function (el) {
      if (el.innerText == correctAnswer) {
        el.style.backgroundColor = "green";
      }
    });
    questionIndex++;
  } else {
    submitButton.innerText = "Submit Answer";
    answersArr.forEach(function (el) {
      el.style.backgroundColor = null;
    });
    updateQuestion();
  }
}
