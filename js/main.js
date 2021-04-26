const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C++",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },

    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple sheets",
        d: "Cars SUVs Sailboats",
        correct: "b"
    },

    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborghinis",
        correct: "a"
    },

    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "None of the above",
        correct: "b",
    },
]

const quizContainer = document.querySelector('.quiz-container')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.querySelector('.question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const btnSubmit = document.querySelector('.submit')

// current question
let currentQuizEl = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    // variable for quiz data from array
    const currentQuizData = quizData[currentQuizEl]
    // variable for question from quiz data array
    questionEl.innerText = currentQuizData.question
    // variables for answer options from quiz data array
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

// remove all selection on page load and submit button for next question/page
function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

// get selected answer value
function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            // check for id value from HTML
            answer = answerEl.id
        }
    })
    return answer
}

btnSubmit.addEventListener('click', () => {
    // anser variable is passed from getSelected() function
    const answer = getSelected()
    // console.log(answer)

    if (answer) {
        // check to see if selected answer is match the correct one from quiz data array
        if (answer === quizData[currentQuizEl].correct) {
            score++
        }

        // move to next quiz question
        currentQuizEl++

        // if question idx is less then quiz data, load more questions
        if (currentQuizEl < quizData.length) {
            loadQuiz()
        } else {
            // load result with reload button
            quizContainer.innerHTML = `
            <h2> You answered ${score} / ${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})