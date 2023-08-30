
const facts = [
    {question: "is running good for health?" , "answer" : "yes" , "expl" :  "running is convenient and affords countless benefits for both physical and mental health."},
    {question: "is eating good for health?" , "answer" : "yes",  "expl" :  "eating Improved gut health, memory, maintains Better mood.  "},
    {question: "is drinking good for health?" , "answer" : "yes",  "expl" :  "drinking good amount of Water Prevents dehydration and overheating, Keeping your skin healthy"},
]



function hide(element) {
    element.classList.add("hidden");
}

function show(element) {
    element.classList.remove("hidden");
}

function disable(button) {
    button.setAttribute("disabled", "");
} 

function enable(button) {
    button.removeAttribute("disabled");
}


let correct = 0;
let completed = 0;

let fact;


const explanation =  document.getElementById("explanation");
const nextButton = document.getElementById("next");
const optionButtons = document.getElementById("options").children;

console.log(optionButtons);

function getNextFact() {
    fact = facts.shift(); // get the first fact in our array (shortening the array)

    // set the question text to the current fact's statement
    document.getElementById("theQuestion").textContent = fact.question;

    // hide any previous explanation
    hide(explanation);

    for (let option of optionButtons) {
        // clear any previous classes
        option.classList.remove("correct");
        option.classList.remove("incorrect");
        // make sure buttons are enabled
        enable(option);
    }

    // disable next-question button
    disable(nextButton);
    
}

nextButton.addEventListener("click", getNextFact);

for (let option of optionButtons) {
    option.addEventListener("click", e => {
        // When this option is clicked...

        // disable all the option buttons
        for (let button of optionButtons) {
            disable(button); 
        }

        // enable the 'next question' button, if we still have facts left
        if (facts.length > 0) {
            enable(nextButton);
        } else {
            nextButton.textContent = "No more questions!"
        }

        const guess = e.target.value;
        if (guess === fact.answer) {
            // correct answer!
            e.target.classList.add("correct");
            correct += 1;
        } else {
            // wrong answer!
            e.target.classList.add("incorrect");
        }

        // display the explanation
        explanation.textContent = fact.expl;
        show(explanation);
        
        // update the score
        completed += 1;
        document.getElementById("correct").textContent = correct;
        document.getElementById("completed").textContent = completed;

    })
}

getNextFact();