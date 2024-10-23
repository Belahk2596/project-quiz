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
//collective id's from html to javascript

let questionNum = document.getElementById("score");
let myQuestion = document.getElementById("question");
let answerOne = document.getElementById("first");
let answerTwo = document.getElementById("second");
let answerThree = document.getElementById("third");
let answerFour = document.getElementById("fourth");
const submitButton = document.getElementById("submit");
let score = 0;
let questionIndex = 0;
//array for questions
let questionHeadArr = [1,2,3,4,5,6,7,8,9,10];
let correctAnswer = questionsArr[questionIndex].answer;

function updateQuestionAndAnswersText() {
  questionNum.innerText = `Question ${questionHeadArr[questionIndex]} Your score: ${score}`;
  correctAnswer = questionsArr[questionIndex].answer;
  myQuestion.innerText = questionsArr[questionIndex].question;
  answerOne.innerText = questionsArr[questionIndex].options[0];
  answerTwo.innerText = questionsArr[questionIndex].options[1];
  answerThree.innerText = questionsArr[questionIndex].options[2];
  answerFour.innerText = questionsArr[questionIndex].options[3];
  //Tracker for my reference
  console.log(`${correctAnswer}  ${questionIndex}`);
}
updateQuestionAndAnswersText();

let answersArr = [answerOne, answerTwo, answerThree, answerFour];
let selectedAnswer = null;

answersArr.forEach((answer) => {
  answer.addEventListener("click", function () {
    // statement that returns true
    if (submitButton.innerText == "Submit Answer") {
      if (selectedAnswer) {
        //reset all selected elements to default
        selectedAnswer.style.backgroundColor = "";
      }
      //sets users selected answer as the current answer element in the array
      selectedAnswer = answer;
      //user selected answer background color is changed on click
      selectedAnswer.style.backgroundColor = "lightgray";
    }
  });
});
//Submit handler event
submitButton.addEventListener("click", submitAnswer);

function submitAnswer() {
  if (submitButton.innerText == "Submit Answer") {
    submitButton.innerText = "Next Question";

    if (selectedAnswer.innerText !== correctAnswer) {
      selectedAnswer.style.backgroundColor = "red";
    }
    //Iterates through the array to find the correct answer
    answersArr.forEach(function (el) {
      if (el.innerText == correctAnswer) {
        el.style.backgroundColor = "green";
        if (selectedAnswer.innerText == correctAnswer) {
          score++;
        }
        if (questionIndex == 9) {
          alert(`Well done! You scored ${score} out of 10. Try again?`);
          submitButton.innerText = "Restart";
          if (submitButton.innerText = "Restart") {
            score = 0;
            questionIndex = 0;
            submitButton.innerText = "Submit Answer";
            updateQuestionAndAnswersText()
          }
        }
      }
    });
    //Next question will run once user has submitted an answer
  } else {
    submitButton.innerText = "Submit Answer";
    answersArr.forEach(function (el) {
      el.style.backgroundColor = null;
    });
    //Increments index for questionsArr to access and update questions, answers and correctAnswer text.
    questionIndex++;
    //Change question and score inner-text
    updateQuestionAndAnswersText();
  }
}

