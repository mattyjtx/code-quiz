var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-btns');

var randomPickedQuestions, currentQuestionIndex


startButton.addEventListener('click', beginGame);


function beginGame() {
console.log(beginGame);
startButton.classList.add('hide');
randomPickedQuestions = questions.sort(() => Math.random() - .5);
currentQuestionIndex = 0;
questionContainerElement.classList.remove('hide');
setNextQuestion();

}

function setNextQuestion() { 
    resetState();
    showQuestion(randomPickedQuestions[currentQuestionIndex]);

}

function showQuestion(question){
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', chooseAnswer);
        answerButtonsElement.appendChild(button);



    });
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function chooseAnswer(e) {

}

var questions = [
    {
        question: 'Commonly used datatypes do NOT include:',
        answers: [
            {text: 'strings', correct: false},
            {text: 'booleans', correct: false },
            {text: 'alerts', correct: true},
            {text: 'numbers', correct: false},
        ]
    },
    {
        question: 'The condition in an if/else statement is enclosed within ___.' ,
        answers: [
            {text: 'quotes', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'parenthesis', correct: true},
            {text: 'square brackets', correct: false},
        ]
    },
    {
        question: 'Arrays in Javascript can be used to store ____.' ,
        answers: [
            {text: 'numbers & strings', correct: false},
            {text: 'other arrays', correct: false},
            {text: 'booleans', correct: true},
            {text: 'all of the above', correct: false},
        ]
    },
    {
        question: 'String values must be enclosed with ___ when being assigned to variables.' ,
        answers: [
            {text: 'commas', correct: false},
            {text: 'curly brackets', correct: false},
            {text: 'quotes', correct: true},
            {text: 'parenthesis', correct: false},
        ]
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:' ,
        answers: [
            {text: 'Javascript', correct: false},
            {text: 'terminal/bash', correct: false},
            {text: 'for loops', correct: false},
            {text: 'console log', correct: true},
        ]
    },
]