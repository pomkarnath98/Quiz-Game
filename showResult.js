const compQuestions = [
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

let name = document.getElementById('name')
let quiz = document.getElementById('quiz')
let submit = document.getElementById('submit')
let result = document.getElementById('result')
let category = document.getElementById('category')
let quizDiv = document.getElementById('quizContentDiv')

window.addEventListener('load', showQuiz)

let showQuiz = () => {
    // event.preventDefault()

    quizDiv.innerHTML = ""

    if(name.value == '')
        alert(`Don't hide your name :)`)
    else if (category.value == `Select Category`)
        alert(`Oops.. You have to select a category!`)
    else{

        compQuestions.map((a) => {
            var div = document.createElement('div')
            div.className = `p-2 m-3 text-center bg-danger rounded-pill`
            var p = document.createElement('p')
            p.textContent = a.question
            div.append(p)
            for (key in a.answers) {
                var label = document.createElement('label')
                label.textContent = `${key}  :  ${a.answers[key]}   `
                label.className = `pr-4`
                var input = document.createElement('input')
                input.type = "radio"
                input.name = "quesion" + i
                input.setAttribute("class", "ques" + i)
                input.className = `pr-1`
                input.value = a.correctAnswer
                div.append(input, label)
            }
            quizDiv.append(div)
            i++
        })

    }
}

quiz.addEventListener('click', showQuiz)

submit.addEventListener('click', showResult)

let showResult = ()=>{
    let count = 0;
    let i = 0
    let correctans = ""
    compQuestions.map((a) => {
        var ques = document.querySelectorAll('.ques' + i)
        for (var j = 0; j < 3; j++) {
            if (ques[j].checked) {
                correctans = `${correctans}   ${a.correctAnswer}`
                if (ques[j].value == a.correctAnswer) {
                    count++
                }
                else break
            }
        }
        i++
    })
    result.textContent = `${count}   out of   ${compQuestions.length} answers are correct.
                          correct answers are  := ${correctans}`
}






