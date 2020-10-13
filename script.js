$(document).ready(function () {
    
    var timerhere = document.getElementById("timerHere");
    
    console.log(timerhere)

    
    
    // var counter = 0;
    
    // // This is the countdown timer
    // var countdownArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
    // function countdownTimer (countdownArray) {
    //     for (i = 15; i >= 0; i--)
    //     $("#timerHere").innerHTML(counter)
    // }
    
    //global var tells us which question we're on, then used to look up question object in questions array questions[qIndex]
    var qIndex = 0;

    // Here are the questions to go into the quiz

    var questions = [
        {
            question: "What is the HTML tag under which one can write the JavaScript code?",
            answers: [
                { text: "(A) <script>", correct: true },
                { text: "(B) <JavaScript>", correct: false },
                { text: "(C) <JScript>", correct: false },
                { text: "(D) <scripts>", correct: false },
            ]
        },
        {

            question: "What is CSS short for?",
            answers: [
                { text: "(A) Case Sensitive Style", correct: true },
                { text: "(B) Case Sensitive Styling", correct: false },
                { text: "(C) Content Styling Sheet", correct: false },
                { text: "(D) Cascading Style Sheets", correct: false },
            ]
        },
        {

            question: "What is DOM short for?",
            answers: [
                { text: "(A) Document Object Model", correct: true },
                { text: "(B) Document Obtained Model", correct: false },
                { text: "(C) Domain Object Model", correct: false },
                { text: "(D) Detailed Object Markup", correct: false },
            ]
        },
        {
            
            question: "When == is used in an IF STATEMENT, which of the below is true?",
            answers: [
                { text: "(A) The items are not equal", correct: true },
                { text: "(B) Both value and type are equal", correct: false },
                { text: "(C) It is a true statement", correct: false },
                { text: "(D) The values are equal", correct: true },
            ]
        },
        {
            question: "What is the syntax of the function that prints a message to the debugging console?",

            answers: [
                { text: "(A) console.logs()", correct: true },
                { text: "(B) consoles.log()", correct: false },
                { text: "(C) console.log()", correct: true },
                { text: "(D) idkmybffJill.log()", correct: false },
            ]

        }
    ];
    loadQuestion()
    // questions[qIndex].question.split(' ')[0]
    function loadQuestion(){
        console.log("yay")
        $("#quizContainer").append(`<h1>${questions[qIndex].question}</h1>`);
        $("#quizContainer").append(`<button>${questions[qIndex].answers[0].text}</button>`)
        $("#quizContainer").append(`<button>${questions[qIndex].answers[0].text}</button>`)
        $("#quizContainer").append(`<button>${questions[qIndex].answers[0].text}</button>`)
        $("#quizContainer").append(`<button>${questions[qIndex].answers[0].text}</button>`)
    }
});
