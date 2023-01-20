let choicesEl = document.querySelector("#choices");
let startScreen = document.querySelector("#start-screen");
let startBtn = document.querySelector("#start");
let questionEl = document.querySelector("#questions");
let questionTitle = document.querySelector("#question-title");
let choices = document.querySelector("#choices");
let questions = [
    {
        question: "This is question 1", 
        answers: ["orange", "yellow", "green", "blue"],
        correctAnswer: 1
    
    }, {
        question: "This is question 2",
        answers: ["cat", "dog", "mouse", "rabbit"],
        correctAnswer: 2
    } , {
        question: "This is question 3",
        answers: ["apple", "orange", "banana", "kiwi"],
        correctAnswer: 3
    } , {
        question: "This is question 4",
        answers: ["yoyo", "lego", "slime", "t-rex"],
        correctAnswer: 3
    } 

];

// Click to start #start on startBtn
//document.querySelector("#question-title".textContent = questions[0].question);


// Questions. Array of objects. Index tracker to track what questions you are on.
// If they choose incorrect answer increment currentQuestion by 1
// Soon as you change the index going to want to rerender the q text and all the answers
// {question: "This is question 2", answers: ["cat", "dog", "mouse", "rabbit"], correctAnswer: 2}

// {question: "This is question 3", answers: ["mel b", "mel c", "geri", "emma" ], correctAnswer: 3}

// {question: "This is question 4", answers: ["apple", "orange", "banana", "kiwi"], correctAnswer: 4}

// {question: "This is question 5", answers: ["yoyo", "lego", "slime", "t-rex"], correctAnswer: 5}

// let currentQuestion = 0;

//Choices. Generate a button for each item div that has a button in each one.
// Display text on button or next to the button eg string inside the button
//Generate a block item for each element or change the display

//Get next question


//Answers. When user selects final answer for final question have some sort of 'game over' and clear the interval. 
// Timer will then become user score. Add timer at the end.

//Create score

//High score. Separate HTML

//Timer listen for start click. When incorrect anwer subtract from timer

//let countDown = 

startBtn.addEventListener("click", function (event) {
    startScreen.classList.add("hide");
    questionEl.classList.remove("hide");
    questionTitle.textContent = questions[0].question;
let answerButton = document.createElement("button");
answerButton.textContent = questions[0].answers[0];
choices.append(answerButton);
let answerButton2 = document.createElement("button");
answerButton2.textContent = questions[0].answers[1];
choices.append(answerButton2);
let answerButton3 = document.createElement("button");
answerButton3.textContent = questions[0].answers[2];
choices.append(answerButton3);
let answerButton4 = document.createElement("button");
answerButton4.textContent = questions[0].answers[3];
choices.append(answerButton4);


//make a if statement to check if the answer is correct or not
// let correctAnswerButton = answerButton;
// if (correctAnswerButton === answerButton) {
//     answerButton.addEventListener("click", function (event) {
//     questionTitle.textContent = questions[1].question;
//     let answerButton = document.createElement("button");

// answerButton.textContent = questions[1].answers[0];
// choices.append(answerButton);
// let answerButton2 = document.createElement("button");
// answerButton2.textContent = questions[1].answers[1];
// choices.append(answerButton2);
// let answerButton3 = document.createElement("button");
// answerButton3.textContent = questions[1].answers[2];
// choices.append(answerButton3);
// let answerButton4 = document.createElement("button");
// answerButton4.textContent = questions[1].answers[3];
// choices.append(answerButton4);
//     console.log(answerButton);});
//     choices.setclass("hide");
    
    // } else (correctAnswerButton !== answerButton) {
    // answerButton.addEventListener("click", function (event) {
    //     questionTitle.textContent = questions[1].question;
    //     let answerButton = document.createElement("button");
    
    // answerButton.textContent = questions[1].answers[0];
    // choices.append(answerButton);
    // let answerButton2 = document.createElement("button");
    // answerButton2.textContent = questions[1].answers[1];
    // choices.append(answerButton2);
    // let answerButton3 = document.createElement("button");
    // answerButton3.textContent = questions[1].answers[2];
    // choices.append(answerButton3);
    // let answerButton4 = document.createElement("button");
    // answerButton4.textContent = questions[1].answers[3];
    // choices.append(answerButton4);
    //     console.log(answerButton);}); 
  



 // make a if statement to check if the answer is correct or not
// if the answer is correct then move to the next question
// if the answer is incorrect then subtract 10 seconds from the timer
// if the answer is incorrect then move to the next question
// if the answer is correct then move to the next question
// choicesEl.addEventListener("click", function(event){
//     //check if the user clicked on a button
//     if(event.target.matches("button")){
//         //get the index of the button
//         let index = event.target.getAttribute("data-index");
//         //check if the index is the correct answer
//         if(){
//             //correct answer
        
//             //check if we are at the end of the questions array
//             if(){
//                 //game over
//             } else {
//                 //render next question 
//             }
//         } else {
//             //wrong answer
//         }
//     }


// // make a if statement to check if the answer is correct or not
// // if the answer is correct then move to the next question
// // if the answer is incorrect then subtract 10 seconds from the timer
// // if the answer is incorrect then move to the next question
// // if the answer is correct then move to the next question
// choicesEl.addEventListener("click", function(event){
//     //check if the user clicked on a button
//     if(event.target.matches("button")){
//         //get the index of the button
//         let index = event.target.getAttribute("data-index");
//         //check if the index is the correct answer
//         if(){
//             //correct answer
        
//             //check if we are at the end of the questions array
//             if(){
//                 //game over
//             } else {
//                 //render next question 
//             }
//         } else {
//             //wrong answer
//         }
//     }
// })

// answerButton.addEventListener("click", function (event){
//     questionTitle.textContent = questions[1].question;})

// //choicesEl.addEventListener("click", function(event){
//     if(event.target.matches("button")){
// event.target.getAttribute("data-index")
//     }
// })
// //Question text
// let questionText = document.querySelector("question-title");

// let answersBtns = ["ex1, "ex2", "ex3", "ex4"];

// function generateQuiz (questions)

// //compare answer selected with correctAnswer. If answer is wrong we detract from timer