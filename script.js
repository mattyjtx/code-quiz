var startButton = document.getElementById('start-btn');

var questionContainerEl = document.getElementById('question-container');
var questionEl = document.getElementById('question');
var answerButtonsEl = document.getElementById('answer-btns');
var startContainerEl = document.getElementById('start-container');
var timerEl = document.getElementById('timer');
var time = 60;
var timerInterval;

var currentQuestionIndex = 0;



startButton.addEventListener('click', beginGame);
questionContainerEl.addEventListener('click', chooseAnswer);



function beginGame() {
    questionContainerEl.classList.remove("hide");
    startContainerEl.classList.add('hide');

    timerInterval = setInterval(function(){
        time--;
        timerEl.textContent = time;
    }, 1000)

    showQuestion();

}

function finishGame() { 
  questionContainerEl.innerHTML = "game over :o";
  clearInterval(timerInterval);

}

function showQuestion(){
    // questionElement.innerText = question.question;
    // question.answers.forEach(answer => {
    //     var button = document.createElement('button')
    //     button.innerText = answer.text
    //     button.classList.add('btn')
    //     if (answer.correct) {
    //         button.dataset.correct = answer.correct
    //     }
    //     button.addEventListener('click', chooseAnswer);
    //     answerButtonsElement.appendChild(button);
    if (currentQuestionIndex === questions.length) {
        finishGame();
    }


    // });
    var quizQuestion = document.createElement('p');
    quizQuestion.textContent= questions[currentQuestionIndex].question;
    var choicesList = document.createElement('ol');
    for (var i = 0; i < questions[currentQuestionIndex].choices.length; i++) {
        var currentChoice = document.createElement('li');
        currentChoice.textContent = questions[currentQuestionIndex].choices[i];
        choicesList.append(currentChoice);
    }
    questionContainerEl.append(quizQuestion);
    questionContainerEl.append(choicesList);

    
}



function chooseAnswer(event) {
   var currentAnswer = event.target.textContent;
   var correctAnswer = document.createElement('p');
   if (currentAnswer === questions[currentQuestionIndex].answer) {
    
    correctAnswer.textContent = "correct ;)";
    timerEl.append(correctAnswer);
   } else {
       correctAnswer.textContent = "wrong :(";
       time -= 5;
       timerEl.append(correctAnswer);
   }
    questionContainerEl.innerHTML = "";
   currentQuestionIndex++;
   showQuestion();
   
}




var questions = [
    {
        question: 'Commonly used datatypes do NOT include:',
        choices: ['strings','booleans', 'alerts', 'numbers'],
        answer: 'alerts'
    },

    {
        question: 'The condition in an if/else statement is enclosed within ___.' ,
        choices: ['quotes', 'curly brackets', 'parenthesis', 'square brackets'] ,
        answer: 'curly brackets'
        
    },
    {
        question: 'Arrays in Javascript can be used to store ____.' ,
        choices: ['numbers & strings', 'other arrays', 'booleans', 'all of the above'] ,
        answer: 'all of the above'
        
    },
    {
        question: 'String values must be enclosed with ___ when being assigned to variables.' ,
        choices: ['commas', 'curly brackets', 'quotes', 'parenthesis'] ,
        answer: 'quotes'
        
    },
    {
        question: 'A very useful tool used during development and debugging for printing content to the debugger is:' ,
        choices: ['Javascript', 'terminal/bash', 'for loops', 'console log'] ,
        answer: 'console log'
        
    },
]