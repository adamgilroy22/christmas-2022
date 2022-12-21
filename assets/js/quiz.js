const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const resetButton = document.getElementById('reset')
const welcomeMessage = document.getElementById('welcome')
const scoreText = document.getElementById('score')
const score = document.getElementById('current-score')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let userScore = 0;

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    welcomeMessage.classList.add('hide')
    startButton.classList.add('hide')
    scoreText.classList.remove('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    score.innerHTML = 0
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
        if (answer.correct) {
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
    if (correct){
        userScore++;
        score.innerHTML = userScore;
    }
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
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

const questions = [{
        question: 'What is the traditional flower of Christmas?',
        answers: [{
                text: 'Rose',
                correct: false
            },
            {
                text: 'Poinsettia',
                correct: true
            },
            {
                text: 'Tulip',
                correct: false
            },
            {
                text: 'Lily',
                correct: false
            }
        ]
    },
    {
        question: 'What is the main ingredient in fruitcake?',
        answers: [{
                text: 'Raisins',
                correct: true
            },
            {
                text: 'Apples',
                correct: false
            },
            {
                text: 'Cherries',
                correct: false
            },
            {
                text: 'Pears',
                correct: false
            }
        ]
    },
    {
        question: 'Who wrote the popular Christmas song "Jingle Bells"?',
        answers: [{
                text: 'Irving Berlin',
                correct: false
            },
            {
                text: 'Johnny Marks',
                correct: false
            },
            {
                text: 'James Lord Pierpont',
                correct: true
            },
            {
                text: 'Mel Torme',
                correct: false
            }
        ]
    },
    {
        question: 'In the popular Christmas movie "A Christmas Carol," what is the name of the main character?',
        answers: [{
                text: 'Ebenezer Scrooge',
                correct: true
            },
            {
                text: 'Charles Dickens',
                correct: false
            },
            {
                text: 'Jacob Marley',
                correct: false
            },
            {
                text: 'Bob Cratchit',
                correct: false
            }
        ]
    },
    {
        question: 'What is the name of the reindeer with a shiny, red nose?',
        answers: [{
                text: 'Blitzen',
                correct: false
            },
            {
                text: 'Rudolph',
                correct: true
            },
            {
                text: 'Randolph',
                correct: false
            },
            {
                text: 'Cupid',
                correct: false
            }
        ]
    },
    {
        question: 'In the song "The Twelve Days of Christmas," on the fourth day, what gift is given?',
        answers: [{
                text: 'Four calling birds',
                correct: false
            },
            {
                text: 'Four turtle doves',
                correct: true
            },
            {
                text: 'Four French hens',
                correct: false
            },
            {
                text: 'Four colly birds',
                correct: false
            }
        ]
    },
    {
        question: "In the story 'A Christmas Carol,' what is the name of Scrooge's deceased business partner?",
        answers: [{
                text: 'Bob Marley',
                correct: false
            },
            {
                text: 'Jack Marley',
                correct: false
            },
            {
                text: 'Jacob Marley',
                correct: true
            },
            {
                text: 'John Marley',
                correct: false
            }
        ]
    },
    {
        question: 'In what country was the first artificial Christmas Tree made?',
        answers: [{
                text: 'America',
                correct: false
            },
            {
                text: 'Germany',
                correct: true
            },
            {
                text: 'Austria',
                correct: false
            },
            {
                text: 'England',
                correct: false
            }
        ]
    },
    {
        question: 'What holiday was the song "Jingle Bells" originally written for?',
        answers: [{
                text: 'Halloween',
                correct: false
            },
            {
                text: 'Christmas',
                correct: false
            },
            {
                text: 'Thanksgiving',
                correct: true
            },
            {
                text: 'Easter',
                correct: false
            }
        ]
    },
    {
        question: 'In the song "We Wish You a Merry Christmas," what do the lyrics say we should bring?',
        answers: [{
                text: 'Good cheer',
                correct: false
            },
            {
                text: 'Fruitcake',
                correct: false
            },
            {
                text: 'Mince pies',
                correct: false
            },
            {
                text: 'All of the above',
                correct: true
            }
        ]
    }
]