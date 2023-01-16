let choicesEl = document.querySelector("#choices");
let startBtn = document.querySelector("#start");
let questions = [{question: "This is question 1", answers: ["orange", "yellow", "green, "blue"], correctAnswer: 1}

{question: "This is question 2", answers: ["cat", "dog", "mouse", "rabbit"], correctAnswer: 2}

{question: "This is question 3", answers: ["mel b", "mel c", "geri", "emma" ], correctAnswer: 3}

{question: "This is question 4", answers: ["apple", "orange", "banana", "kiwi"], correctAnswer: 4}

{question: "This is question 5", answers: ["yoyo", "lego", "slime", "t-rex"], correctAnswer: 5}

let currentQuestion = 0;


document.querySelector("#question-title".textContent = questions[0].question);

startBtn.onclick = function (setatt)
startBtn.addEventListener("click", function (event)) {
    if()
}
choicesEl.addEventListener("click", function(event){
    if(event.target.matches("button")){
event.target.getAttribute("data-index")
    }
})
//Question text
let questionText = document.querySelector("question-title");

let answersBtns = ["ex1, "ex2", "ex3", "ex4"];

function generateQuiz (questions)

//compare answer selected with correctAnswer. If answer is wrong we detract from timer