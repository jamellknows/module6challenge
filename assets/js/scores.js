let previousScores = localStorage.getItem('codingQuizScores')
previousScores = JSON.parse(previousScores)
let highscoresEl = document.getElementById('highscores')
let initals = Object.keys(previousScores)
let scores = Object.values(previousScores)
for(let i = 0; i < Object.keys(previousScores).length; i++)
{
   
    let scoresEl = document.createElement('li')
    scoresEl.textContent = `${initals[i]}:${scores[i]}`
    highscoresEl.appendChild(scoresEl)
}

let clearScoresEl = document.getElementById('clear')
clearScoresEl.addEventListener('click', function(){
    let confirmation = confirm("Are you sure you want to clear the highscores?")
    if(confirmation == true)
    {
        localStorage.removeItem('codingQuizScores')
    }
    else{
        alert("You did not want to clear the scores")
    }
})

