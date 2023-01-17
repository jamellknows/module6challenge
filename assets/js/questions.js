let questionsEl = document.getElementById("questions")

let questionTitleEl = document.getElementById("question-title")

let choicesEl = document.getElementById("choices")

let endScreenEl = document.getElementById('end-screen')

let startEl = document.getElementById("start-screen")

let submitInitialsEl = document.getElementById('submit')

let initalsEl = document.getElementById('initials')

let codingQuizScores = localStorage.getItem('codingQuizScores')



if(codingQuizScores == null)
{
    codingQuizScores = {}
}



let questionNumber = 1;
const buttonsEl = document.createElement("div")
const prevQuestionEl = document.createElement("button")
const nextQuestionEl = document.createElement("button")
const submitTestEl = document.createElement("button")
submitTestEl.textContent = "Submit Test"
submitTestEl.style.display = "none"
let timeEl = document.getElementById("time")
let time = 0;
let score = 0
var timer


const questionsObj = {
    1:{"What is the HTML tag <> used for writing JavaScript?" : ["script", "javascript", "function","source"]},
    2:{"What is the source tag used for?" : ["An object", "Videos", "All MultiMedia", "Images"]},
    3:{"What is the correct way to select a child element inside of a parent element in css":["parent child", "child parent", "parent > child ", "child < parent"]},
    4:{"How do you write css media queries":["@media screen", "@query screen", "@responsive screen", "@screen"]},
    5:{"What order should media queries be written if writing a max width/height media queries ":["top to bottom", "bottom to top", "in any order"]},
    6:{"Why is it best practice to use semantic elements?":["To make it easier to see the function while coding", "To make it easier to write javascript code", "To ensure that the webpage is accessible for all users (blind/partially sighted/deaf etc)", ""]},
    7:{"What method converts a JavaScript Object to a String":["object.toString()", "Object.toString(object)", "stringify(object)", "JSON.stringify(object)" ]},
    8:{"How do you write an event listener in JavaScript?":["function eventListener()", "eventListener(function)", "element.addEventListener()", "addEventListener(element)"]},
    9:{"What attribute is not an event for an Event Listener in JavaScript":["click", "touch", "submit",  "keypress"]},
    10:{"Where do you insert the link tag for bootstrap":["head", "body", "meta", "script"]},
    11:{"How do you display all the keys in a JavaScript Object?":["Object.keysFrom(object)","Object.keys(object)", "keys(object)",  "object.getKeys()"]},
    12:{"Which of these is not a data type in JavaScript? ":["String", "char", "Number", "BigInt"]},
    13:{"What is the definition of hoisting in JavaScript?":["Maintaining a server over the cloud", "Moving all variable and function declarations to the top of the scope", "Calling  function inside another function", "Pulling and merging a github source into your code "]},
    14:{"What is the difference between == and ===?":["== is numerically approximate comparison whereas === is exact", "=== is for Strings == is for Numbers", "There is no difference", "== is used to compare values === is used to compare value and type"]},
    15:{"What is the difference between the var and let key words?":[" var is global scoped and let is function scoped", "var is function scoped and let is block scoped", "var is block scoped and let is function scoped", "var is global scoped and let is function scoped "]},
   

}

const answersArr = [1, 3, 3, 1, 1, 3, 4, 3, 2, 3, 3, 2, 2, 4,2]



function questions()
{

    startEl.style.display = "none"
    questionsEl.classList.remove("hide")
    renderQuestions()
    timer = setInterval(function(){
        time++
        timeEl.textContent =`${time}`
    }, 1000)
 
  

    
}

function renderQuestions()
{
   
 
    nextQuestionEl.innerText = "Next Question"
    prevQuestionEl.innerText = "Previous Question"
    nextQuestionEl.classList.add("start")
    prevQuestionEl.classList.add("start")
    nextQuestionEl.classList.add("start")
    prevQuestionEl.classList.add("start")
    buttonsEl.classList.add("center")
    questionsEl.appendChild(buttonsEl)
    buttonsEl.appendChild(nextQuestionEl)
    buttonsEl.appendChild(prevQuestionEl)
    let question1 = JSON.stringify(Object.values(questionsObj[questionNumber])[0][0])
    let question2 = JSON.stringify(Object.values(questionsObj[questionNumber])[0][1])
    let question3 = JSON.stringify(Object.values(questionsObj[questionNumber])[0][2])
    let question4 = JSON.stringify(Object.values(questionsObj[questionNumber])[0][3])
    Tally()
  

   

    questionTitleEl.textContent = `${Object.keys(questionsObj[questionNumber])}`
    choices.innerHTML = 
    `
    
    
    <form>
    <label for="answers">Select an answer:</label>
    <select name="answers" id="answers">
    <option value="1">${question1}</option>
    <option value="2">${question2}</option>
    <option value="3">${question3}</option>
    <option value="4">${question4}</option>
    </select>
    </form>`

}

nextQuestionEl.addEventListener('click', function()
{
    if(questionNumber < Object.keys(questionsObj).length)
    {
    ++questionNumber
    renderQuestions()

    }
    else{
        renderQuestions()
    }
    if(questionNumber == Object.keys(questionsObj).length)
    {
        nextQuestionEl.style.display = "none"
        submitTestEl.style.display = "block"
        buttonsEl.appendChild(submitTestEl)
    }
    
    // on click get value if on last question submit button 
    // check if right answer store value summate



})

prevQuestionEl.addEventListener('click', function(){
if(questionNumber > 0)
{
    --questionNumber
    renderQuestions()

}
else{
    renderQuestions()
    
}
if(questionNumber != Object.keys(questionsObj).length)
{
    nextQuestionEl.style.display = "block"
}
})

function Tally()
{
    if(questionNumber == 1)
    {
        prevQuestionEl.style.display = "none"
    }
    else{
        prevQuestionEl.style.display = "block"
        let e = document.getElementById("answers")
        if(e === null){
            return 
        }
        let option = e.value 
        if(answersArr[questionNumber-2] == option)
        {
            score=score+20
            // playCorrect()
            
         

        }
        if(answersArr[questionNumber-2] != option)
        {
            score=score-10
            // playIncorrect()

    
        }

    }
 
}

function Calculate()
{
    clearInterval(timer)
    score = (120 - time) + score
    questionsEl.classList.add('hide')
    endScreenEl.classList.remove('hide')
    let finalScoreEl = document.getElementById('final-score')
    finalScoreEl.textContent = `${score}`
    

  
    
}
submitTestEl.addEventListener('click', Calculate)
submitInitialsEl.addEventListener('click', Store)

function Store()
{
    let initials = initalsEl.value
    let cqs 
    // so make an object that 
    if(typeof codingQuizScores === 'object')
    {
    
        codingQuizScores[`${initials}`] = score
        codingQuizScores = JSON.stringify(codingQuizScores)
        localStorage.setItem("codingQuizScores", codingQuizScores)

    }else{
        codingQuizScores = JSON.parse(codingQuizScores)
        codingQuizScores[`${initials}`] = score
        codingQuizScores = JSON.stringify(codingQuizScores)
        localStorage.setItem("codingQuizScores", codingQuizScores)

      
    }
    // let cqs = JSON.parse(codingQuizScores)
  

    // localStorage.setItem("codingQuizScores", cqs)
    
    



}


// function playCorrect()
// {
//     var audio = new Audio('')
//     audio.play()
// }

// function playIncorrect()
// {
//     var audio = new Audio('../sfx/incorrect.wav')
//     audio.play()
// }
// store scores and retrieve them to display when highscores is clicked 


