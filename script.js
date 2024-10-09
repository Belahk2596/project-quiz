const questionsArr = [
  {
    question: "Which of these animals is native to New Zealand?",
    options: [
      "Kangaroo",
      "Kiwi bird",
      "Koala",
      "Emu"
    ],
    answer: "Kiwi bird"
  },
  {
    question: "What is the capital city of New Zealand?",
    options: [
      "Auckland",
      "Wellington",
      "Christchurch",
      "Hamilton"
    ],
    answer: "Wellington"
  },
  {
    question: "What is the name of the indigenous people of New Zealand?",
    options: [
      "Maori",
      "Aborigines",
      "Inuit",
      "Sami"
    ],
    answer: "Maori"
  },
  {
    question: "Which of these films was primarily shot in New Zealand?",
    options: [
      "Harry Potter series",
      "Lord of the Rings trilogy",
      "Pirates of the Caribbean",
      "Star Wars series"
    ],
    answer: "Lord of the Rings trilogy"
  },
  {
    question: "What is the highest mountain in New Zealand?",
    options: [
      "Mount Cook (Aoraki)",
      "Mount Everest",
      "Mount Kilimanjaro",
      "Mount McKinley"
    ],
    answer: "Mount Cook (Aoraki)"
  },
  {
    question: "Which city in New Zealand is known as the 'City of Sails'?",
    options: [
      "Auckland",
      "Wellington",
      "Dunedin",
      "Queenstown"
    ],
    answer: "Auckland"
  },
  {
    question: "What is the official national sport of New Zealand?",
    options: [
      "Cricket",
      "Rugby Union",
      "Soccer",
      "Netball"
    ],
    answer: "Rugby Union"
  },
  {
    question: "Which sea lies to the west of New Zealand?",
    options: [
      "Tasman Sea",
      "Coral Sea",
      "South China Sea",
      "Arafura Sea"
    ],
    answer: "Tasman Sea"
  },
  {
    question: "What is the traditional Maori greeting called?",
    options: [
      "Haka",
      "Hongi",
      "Powhiri",
      "Waka"
    ],
    answer: "Hongi"
  },
  {
    question: "Which New Zealand town is famous for its geothermal activity and Maori culture?",
    options: [
      "Rotorua",
      "Christchurch",
      "Hamilton",
      "Napier"
    ],
    answer: "Rotorua"
  }
];

// Add your code underneath this comment.

const myQuestion = document.getElementById('question')
myQuestion.innerText = questionsArr[0].question;

const answerOne = document.getElementById('first');
answerOne.innerText = questionsArr[0].options[0];

const answerTwo = document.getElementById('second');
answerTwo.innerText = questionsArr[0].options[1];

const answerThree = document.getElementById('third');
answerThree.innerText = questionsArr[0].options[2];

const answerFour = document.getElementById('fourth');
answerFour.innerText = questionsArr[0].options[3];




