/*courtesy of Web Dev Simplified(youtube channel)*/


const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById('question-container')
const nextButton = document.getElementById('next-btn')
let shuffledQuestions, currentQuestionIndex
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')




$('#start-btn').on('click',startGame)
$('#next-btn').on('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})


function startGame() {
    console.log('Started')
    $('#description').append("Make your best guess!")
    startButton.classList.add('hide') 
    shuffledQuestions = questions.sort(() => Math.random() - .5) /* randomly sort questions */
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}


function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text 
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
     })
    }  

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}



function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    nextButton.classList.remove('hide')
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
     clearStatusClass(element)
     if (correct) {
         element.classList.add('correct')
         
     } else {
         element.classList.add('wrong')

     }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}
  

const questions = [
    {
        question: 'How many degree granting campuses does NYU have?',
        answers: [
            {text: 'Three', correct: true},
            {text: 'One', correct: false}, 
            {text: 'Four', correct: false}

        ]
    },
    {
        question: 'How many students does NYU have?',
        answers: [
            {text: '20,000', correct: false},
            {text: '25,000', correct: false}, 
            {text: '50,000', correct: true}

        ]
    },
    {
        question: 'How many global academic centers/study abroad locations does NYU have?',
        answers: [
            {text: '11', correct: true},
            {text: '8', correct: false}, 
            {text: '13', correct: false}

        ]
    },
    {
        question: 'What NYU dorm does not have air conditioning?',
        answers: [
            {text: 'Broome Street', correct: false},
            {text: 'Rubin', correct: true}, 
            {text: 'Greenwich', correct: false}

        ]
    },
    {
        question: 'What was the acceptance rate last year(2020)?',
        answers: [
            {text: '18%', correct: false},
            {text: '30%', correct: false}, 
            {text: '16%', correct: true}

        ]
    },
    {
        question: 'How many areas of study does NYU have?',
        answers: [
            {text: 'Around 230', correct: true},
            {text: 'Around 300', correct: false}, 
            {text: 'Around 350', correct: false}

        ]
    },
    {
        question: 'Which NYU New York academic program is the most recent addition to NYU?',
        answers: [
            {text: 'Gallatin', correct: false},
            {text: 'Global Public Health', correct: true}, 
            {text: 'Liberal Studies', correct: false}

        ]
    }

]
