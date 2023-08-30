


const answerButtons = document.querySelectorAll('.button');
const nextButton = document.getElementById('next');
let explanation = document.getElementById('explanation');
let theQuestions = document.querySelector('#theQuestion');
let scoreGame = document.querySelector('#score');
let scoreVis= document.querySelector("#scoreVis");
let showanswer = document.querySelector('#showanswer');

let currentQuestion = 0
let trueChoice = 0;
let falseChoice = 0;
let nextButtonClicked = false;



function press(){
    let trueButton = answerButtons[0]
    let falseButton = answerButtons[1]

    nextButton.addEventListener("click", () => {
    
        nextButtonClicked = true;
        currentQuestion++;
        gameEngine();
        isCorrect();
        showFreez();
        })  

    trueButton.addEventListener("click", () => {

    trueChoice++;

    console.log("true choice ", trueChoice);
    currentQuestion++;
    gameEngine();
    isCorrect();
    showFreez();
    })  

  
        
    falseButton.addEventListener("click", () => {
 
    falseChoice++
    console.log(falseChoice);
    currentQuestion++;
    gameEngine();
    isCorrect();
    showFreez();
    }) 


}





const facts = [
    {question: "is running good for health?" , "answer" : "yes" , "expl" :  "offcorse running is good for your body health and even mental health too !"},
    {question: "is eating good for health?" , "answer" : "yes",  "expl" :  "try starving then!! offcorse eating is good for health "},
    {question: "is drinking good for health?" , "answer" : "yes",  "expl" :  "drinking good amount of Water is defently good for the health"},
]


function gameEngine(){


    if(currentQuestion<4){
    console.log(currentQuestion);
    theQuestions.textContent = facts[currentQuestion].question
    console.log(theQuestions.textContent);
   
}
}

function resultButtonColor(){
    
}


function showFreez(){
    if(currentQuestion==1 | nextButtonClicked==true)
    explanation.textContent = facts[currentQuestion-1].expl

    if (currentQuestion==1){
        scoreVis.classList.toggle('hidden');
        showanswer.classList.toggle('hidden');
        nextButton.classList.toggle('hidden');
    }
}

function isCorrect(){

    console.log("the true choice is : ",trueChoice);

    if (trueChoice==1){
        scoreGame.textContent = ": ♦ 1/3 ♦"
    }
    if (trueChoice==2){
        scoreGame.textContent = ": ♦ 2/3 ♦"
    }
    if (trueChoice==3){
        scoreGame.textContent = ": ♦ 3/3 ♦"
    }
    if (trueChoice==0){
        scoreGame.textContent = ": ♦ 0/3 ♦"
    }


}

console.log()
press();
gameEngine();