console.log("Into Js");

const data = [
  {
    id: 1,
    question: "Which of these fish is actually is a fish",
    answers: [
      { answer: "Swordfish", isCorrect: true },
      { answer: "Jellyfish", isCorrect: false },
      { answer: "Starfish", isCorrect: false },
      { answer: "Cryfish", isCorrect: false },
    ],
  },
  {
    id: 2,
    question: "Which of these is capital of India",
    answers: [
      { answer: "Delhi", isCorrect: true },
      { answer: "Bangalore", isCorrect: false },
      { answer: "Hyderabad", isCorrect: false },
      { answer: "Amaravathi", isCorrect: false },
    ],
  },
  {
    id: 3,
    question: "Which of these animal lives in water and land",
    answers: [
      { answer: "cow", isCorrect: false },
      { answer: "alligator", isCorrect: true },
      { answer: "Horse", isCorrect: false },
      { answer: "Lion", isCorrect: false },
    ],
  },
  {
    id: 4,
    question: "India is a contry",
    answers: [
      { answer: "Yes", isCorrect: true },
      { answer: "No", isCorrect: false },
    ],
  },
];

let qIndex = 0;
let rAns = 0;
let wAns = 0;
let tScore = 0;
let isAnswerCorrect;

let questionContainer = document.querySelector(".questionContainer");
let resultContainer = document.querySelector(".result");
const question = document.querySelector(".ques");
const correctAns = document.querySelector(".correct");
const wrongAns = document.querySelector(".wrong");
const score = document.querySelector(".score");
const submitBtn = document.querySelector(".submit");
const playBtn = document.querySelector(".play");
const addQueOpt = document.querySelector(".question");

const handlePlayBtn = () => {
  playBtn.addEventListener("click", () => {
    console.log("Clicked Play Again");
    qIndex = 0;
    rAns = 0;
    wAns = 0;
    tScore = 0;
    showQuestion(qIndex);
  });
};

const handleSubmitBtn = () => {
  submitBtn.addEventListener("click", () => {
    if (isAnswerCorrect !== null) {
      isAnswerCorrect === "true" ? rAns++ : wAns++;
      console.log(`rAns : ${rAns} , wAns : ${wAns}`);
      console.log("Index : " + qIndex);
      qIndex++;
      qIndex < data.length ? showQuestion(qIndex) : showResult();
    } else alert("Select Any option");
  });
};

const showResult = () => {
  console.log("Entered Into result page");
  correctAns.textContent = `Correct Answer : ${rAns}`;
  wrongAns.textContent = `Wrong Answer : ${wAns}`;
  score.textContent = `Score : ${rAns * 10}`;
  questionContainer.style.display = "none";
  resultContainer.style.display = "flex";
};

const showQuestion = (qNum) => {
  console.log("QNum : " + qNum);
  isAnswerCorrect = null;
  questionContainer.style.display = "flex";
  resultContainer.style.display = "none";
  question.textContent = data[qNum].question;

  addQueOpt.innerHTML = data[qNum].answers
    .map(
      (ans, index) =>
        `<div class="ansss">
                <input name="answer" type="radio" id=${index} value=${ans.isCorrect}>
                <label for=${index}>${ans.answer}</label>
              </div>`
    )
    .join("");

  selectAnswer();
};

const selectAnswer = () => {
  console.log(
    "Into selectAnswers : " + addQueOpt.querySelectorAll("input").length
  );
  addQueOpt.querySelectorAll("input").forEach((el) => {
    el.addEventListener("click", (e) => {
      console.log("value : " + e.target.value);
      isAnswerCorrect = e.target.value;
    });
  });
};
showQuestion(qIndex);
handleSubmitBtn();
handlePlayBtn();
