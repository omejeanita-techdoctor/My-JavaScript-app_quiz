// dummy questions
const questions = [
    
{   
     question: "what is the capital city of Nigeria",
    answers:  ["Lagos", "Abia", "Portharcourt", "Abuja"],
    correct:  3
},

    
{    
    question: "what is the full meaning of Lmao",
    answers: ["Lmao na 😂", "Laughing my a**s off", "wo e no get meaning", "omo!!!"],
    correct: 1
},
    

{ 
    question: "who is your guy, according to the song?",
    answers: ["Goodness", "Emeka", "spyro", "me"],
    correct: 2
}


]

// default value
let currQuestion = 0
let score = 0

function displayQuestion(){
    // get the element of question and assign it to the questions in the arrays
   document.getElementById('question').innerText = questions[currQuestion].question

   // we get the answers in the arrays and assign it to a variable
   const answers = questions[currQuestion].answers

   // iterate the answers array and get their value and index to display on the option div
   const answerOptions = answers.map((answer, index) => 
    `<button class="option" onclick=selectAnswer(${index})>${answer}</button>`
   ).join('');

   // assign the mapped item (answeroptions) into the div of options
   document.getElementById('option').innerHTML = answerOptions
}

// if the selected option is correct and enable the 
//button to go the next question and score the user if correct
function selectAnswer(index){
    if(index === questions[currQuestion].correct){
        score++
    }
    document.getElementById('next').disabled = false

}

// go to the next question and if no ore question, display the answer
document.getElementById('next').addEventListener('click', () =>{
    currQuestion++
    if(currQuestion < questions.length){
        displayQuestion();
        document.getElementById('next').disabled = true
    } else {
      document.getElementById('result').innerHTML = `<p>Your Total Score is: ${score}/${questions.length}</p>`
    }
})

// invoke the display question function
displayQuestion()