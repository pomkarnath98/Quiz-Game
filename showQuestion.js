var compQuestions = [
    {
        question: "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993 ? ",
        answers: {
            a: "Clipper Chip",
            b: "Enigma Machine",
            c: "Skipjack",
        },
        correctAnswer: 'a'
    },
    {
        question: "On which day did the World Wide Web go online?",
        answers: {
            a: "November 12, 1990",
            b: "December 17, 1996",
            c: "December 20, 1990",
        },
        correctAnswer: 'c'
    },
    {
        question: "While Apple was formed in California, in which western state was Microsoft founded?",
        answers: {
            a: "Washington",
            b: "New Mexico",
            c: "Arizona",
        },
        correctAnswer: 'b'
    },
    {
        question: "Which one of these is not an official development name for a Ubuntu release ?",
        answers: {
            a: "Mystic Mansion",
            b: "Trusty Tahr",
            c: "Utopic Unicorn",
        },
        correctAnswer: 'a'
    },
    {
        question: "What does the term MIME stand for, in regards to computing ? ",
        answers: {
            a: "Multipurpose Interleave Mail Exchange",
            b: "Mail Interleave Method Exchange",
            c: "Multipurpose Internet Mail Extensions"
        },
        correctAnswer: 'c'
    }
];

var quiz = document.getElementById('quiz')
var submit = document.getElementById('submit')
var result = document.getElementById('result')

window.addEventListener('load', showQuiz)

function showQuiz() {
    event.preventDefault()
    compQuestions.map((a) => {
        var div = document.createElement('div')
        var p = document.createElement('p')
        p.textContent = a.question
        div.append(p)
        for (key in a.answers) {
            var label = document.createElement('label')
            label.textContent = `${key}  :  ${a.answers[key]}   `
            var input = document.createElement('input')
            input.type = "radio"
            input.name = "question"
            input.value = a.correctAnswer
            div.append(input, label)
        }
        quiz.append(div)
    })
}






