let questionsEl = document.getElementById("questions")

let questionTitleEl = document.getElementById("question-title")

let choicesEl = document.getElementById("choices")

let startEl = document.getElementById("start-screen")
let questionNumber = 1;

const questionsObj = {
    1:{"What is the HTML tag used for javascript?" : ["<script></script>", "<javascript></javascript>", "<function></function>","<source></source>"]},
    2:{"What is the source tag used for?" : ["An object", "Videos", "All MultiMedia", "Images"]},
    3:{"What is the correct way to select a child element inside a parent element in css":["parent child", ""]},
    4:{"How do you write media queries":[]},
    4:{"What order should media queries be written if going from smallest to biggest?":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},
    4:{"":[]},

}
    

function questions()
{
    startEl.style.display = "none"
    questionsEl.classList.remove("hide")
    renderQuestions()
    
}

function renderQuestions()
{
    const nextQuestionEl = document.createElement("button")
    const prevQuestionEl = document.createElement("button")
    nextQuestionEl.innerText = "Next Question"
    prevQuestionEl.innerText = "Previous Question"
    nextQuestionEl.classList.add("start")
    prevQuestionEl.classList.add("start")
    nextQuestionEl.classList.add("start")
    prevQuestionEl.classList.add("start")
    questionsEl.appendChild(nextQuestionEl)
    questionsEl.appendChild(prevQuestionEl)


    nextQuestionEl.addEventListener('click', function()
    {
    if(questionNumber < questionsObj.length)
        {
        ++questionNumber
        console.log(questionNumber)
        }
    
    })

prevQuestionEl.addEventListener('click', function(){
    if(questionNumber > 0)
    {
        --questionNumber
    }
    })

    questionTitleEl.textContent = `${Object.keys(questionsObj[questionNumber])}`

}

