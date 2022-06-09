const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const questionText = document.getElementById('question')
console.log('questionText is', questionText)
const a1 = document.getElementById('a_text')

const answers = document.querySelectorAll('.answer')

console.log('answers is', answers)

const button = document.getElementById('submit')

// button.addEventListener('click', () => console.log('im clicked'))

let index = 0; // index to be used for array quiz data

loadData(0) // load for the first time questions and answers

function deselect() {
    answers.forEach(item =>
            item.checked = 0
        )
}

function checkAnswer() {

}

button.onclick = () => {

    if (!answers[0].checked &&
        !answers[1].checked &&
        !answers[2].checked &&
        !answers[3].checked 
        ) return alert('Yo, choose one')

    index++;
    console.log('onclick: index=', index)

    if (index < quizData.length) {

        const answer = whatTheUserAnswered()

        console.log('Answered: ', answer)
        loadData(index)
        deselect()
    }
}

function whatTheUserAnswered() {

    let answer = null

    answers.forEach((item, idx) => {

        console.log('what: checked', item.checked, ' id', item.id)
        if (item.checked) return answer = item.id
    })

    return answer
}

// Loads question text and answers text
function loadData(alice) {

    questionText.innerText = quizData[alice].question
    
    a1.innerText = quizData[alice].a
}

