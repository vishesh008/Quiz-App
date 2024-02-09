const questions = [
    {
        question:"Which is largest animal in the world?",

        answers: [
            {text:"Shark",correct : false},
            {text:"Blue whale",correct : false},
            {text:"Elephant",correct : false},
            {text:"Giraffe",correct : true}
    ],
    },
    {
        question:"Which is the smallest continent in the world",

        answers: [
            {text:"Asia",correct : false},
            {text:"Australlia",correct : true},
            {text:"Arctic",correct : false},
            {text:"Africa",correct : false}
    ],
    },
    {
        question:"A flashing red traffic light signifies that a driver should do what?",

        answers: [
            {text:"stop",correct : true},
            {text:"speed up",correct : false},
            {text:"proceed with caution",correct : false},
            {text:"honk the horn",correct : false}
    ],
    },

    {
        question:"A pita is a type of what?",

        answers: [
            {text:"fresh fruit",correct : false},
            {text:"flat bread",correct : true},
            {text:"French tart",correct : false},
            {text:"friend bean dip",correct : false}
    ],
    },
    
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextBtn = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo +"."+currentQuestion.question;
    let correctAnswer = "";
    currentQuestion.answers.forEach(answer => {
        
        const button1 = document.createElement("button");
        button1.innerHTML = answer.text;
        
        button1.classList.add("btn");
        answerButton.appendChild(button1);
        if(answer.correct){
            correctAnswer = button1;
        }
        button1.addEventListener("click",(e)=>{
            if(answer.correct){
                e.target.classList.add("right-answer");
                score++;
            }
            else{
                correctAnswer.classList.add("right-answer");
                e.target.classList.add("wrong-answer");
            }
            e.target.disabled = true;
            console.log(score);
            nextBtn.style.display= "block";

        })
    });
}

function handleNextButton(e){
    currentQuestionIndex++;
    if(nextBtn.innerHTML==="Reset"){
        startQuiz();
    }
    if(currentQuestionIndex===questions.length-1){
        
        nextBtn.innerHTML = "Submit";
        showQuestion();
    }
    else if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
function showScore(){
    resetState();
    questionElement.innerHTML = "Score" + score +"/4"; 
    nextBtn.style.display = "block";
    nextBtn.innerHTML = "Reset";
}

nextBtn.addEventListener("click", (e)=>{
    if(currentQuestionIndex<questions.length){
        handleNextButton(e);
    }
    else{
        startQuiz();
    }
})

startQuiz();

function resetState(){
    nextBtn.style.display= "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
};