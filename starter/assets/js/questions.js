let questionsEl = document.getElementById("questions")

let questionTitleEl = document.getElementById("question-title")

let choicesEl = document.getElementById("choices")

let startEl = document.getElementById("start-screen")
let questionNumber = 1;
const nextQuestionEl = document.createElement("button")
const prevQuestionEl = document.createElement("button")
const questionsObj = {
    1:{"What is the HTML tag used for javascript?" : ["<script></script>", "<javascript></javascript>", "<function></function>","<source></source>"]},
    2:{"What is the source tag used for?" : ["An object", "Videos", "All MultiMedia", "Images"]},
    3:{"What is the correct way to select a child element inside a parent element in css":["parent child", "child parent", "parent > child ", "child < parent"]},
    4:{"How do you write css media queries":["@media screen", "@query screen", "@repsonsive screen", "@screen"]},
    5:{"What order should media queries be written if writing a max width/ height media queries ":[]},
    6:{"Why is it best practice to use semantic elements?":["To make it easier to see the function while coding", "To make it easier to write javascript code for", "To ensure that the webpage is accessible for all users (blind/partially sighted/deaf etc)", ""]},
    7:{"What method converts a Javascript Object to a String":["object.toString()", "Object.toString(object)", "JSON.stringify(object)", "stringify(object)"]},
    8:{"How do you write an event listener in Javascript?":[]},
    9:{"What attribute is not an event for an Event Listener in Javascript":[]},
    10:{"Where do you insert the link tag for bootstrap":[]},
    11:{"How do you display all the keys in a Javascript Object?":[]},
    12:{"How do ":[]},
    13:{"":[]},
    14:{"":[]},
    15:{"":[]},
    16:{"":[]},
    17:{"":[]},
    18:{"":[]},
    19:{"":[]},
    20:{"":[]},

}
    

function questions()
{
    startEl.style.display = "none"
    questionsEl.classList.remove("hide")
    renderQuestions()
    
}

function renderQuestions()
{
 
    nextQuestionEl.innerText = "Next Question"
    prevQuestionEl.innerText = "Previous Question"
    nextQuestionEl.classList.add("start")
    prevQuestionEl.classList.add("start")
    nextQuestionEl.classList.add("start")
    prevQuestionEl.classList.add("start")
    questionsEl.appendChild(nextQuestionEl)
    questionsEl.appendChild(prevQuestionEl)
    console.log(Object.values(questionsObj[questionNumber])[0][0])
    let question1 = JSON.stringify(Object.values(questionsObj[questionNumber])[0][0])
    console.log(question1)


   

    questionTitleEl.textContent = `${Object.keys(questionsObj[questionNumber])}`
    choices.innerHTML = 
    `<form>
    <label for="answers">Select an answer:</label>
    <select name="answers" id="answers">
    <option value="1">${question1}</option>
    <option value="2">${Object.values(questionsObj[questionNumber])[0][1]}</option>
    <option value="3">${Object.values(questionsObj[questionNumber])[0][2]}</option>
    <option value="4">${Object.values(questionsObj[questionNumber])[0][3]}</option>
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
})

