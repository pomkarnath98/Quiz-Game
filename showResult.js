const compQuestions = [
    {
        question: "Which of these is the name for the failed key escrow device introduced by the National Security Agency in 1993 ? ",
        answers: {
            a: "Clipper Chip",
            b: "Enigma Machine",
            c: "Skipjack",
        },
        correctAnswer: 'a',
        displayed: false
    },
    {
        question: "On which day did the World Wide Web go online?",
        answers: {
            a: "November 12, 1990",
            b: "December 17, 1996",
            c: "December 20, 1990",
        },
        correctAnswer: 'c',
        displayed: false
    },
    {
        question: "While Apple was formed in California, in which western state was Microsoft founded?",
        answers: {
            a: "Washington",
            b: "New Mexico",
            c: "Arizona",
        },
        correctAnswer: 'b',
        displayed: false
    },
    {
        question: "Which one of these is not an official development name for a Ubuntu release ?",
        answers: {
            a: "Mystic Mansion",
            b: "Trusty Tahr",
            c: "Utopic Unicorn",
        },
        correctAnswer: 'a',
        displayed: false
    },
    {
        question: "What does the term MIME stand for, in regards to computing ? ",
        answers: {
            a: "Multipurpose Interleave Mail Exchange",
            b: "Mail Interleave Method Exchange",
            c: "Multipurpose Internet Mail Extensions",
        },
        correctAnswer: 'c',
        displayed: false
    }
];
const geogQuestions = [
    {
        question: "Polavaram Project is located in which state?",
        answers: {
            a: "Madhya Pradesh",
            b: "Andhra Pradesh",
            c: "Karnataka",
        },
        correctAnswer: 'b',
        displayed: false
    },
    {
        question: "Which is the longest National Highway in India??",
        answers: {
            a: "NH-2",
            b: "NH-10",
            c: "NH-44",
        },
        correctAnswer: 'c',
        displayed: false
    },
    {
        question: "Which among the following states is largest producer of Coffee in India?",
        answers: {
            a: "Tamilnadu",
            b: "Karnataka",
            c: "Kerala",
        },
        correctAnswer: 'b',
        displayed: false
    },
    {
        question: "Duncan Passage separates ?",
        answers: {
            a: "Rutland Island and Little Andaman",
            b: "Andaman and Nicobar",
            c: "South andaman and little Andaman",
        },
        correctAnswer: 'a',
        displayed: false
    },
    {
        question: "Which among the following is not located in Andaman & Nicobar island? ",
        answers: {
            a: "Campbell Bay",
            b: "Mahatma Gandhi Marine National Park",
            c: "Guindy National Park"
        },
        correctAnswer: 'c',
        displayed: false
    }
];

localStorage.setItem("comp", JSON.stringify(compQuestions))
localStorage.setItem("geog", JSON.stringify(geogQuestions))

let name = document.getElementById('name')
let quiz = document.getElementById('quiz')
let submit = document.getElementById('submit')
let result = document.getElementById('result')
let category = document.getElementById('category')
let quizDiv = document.getElementById('quizContentDiv')

let startQuiz = () => {

    if (name.value == '')
        alert(`Don't hide your name :)`)
    else if (category.value == `Select Category`)
        alert(`Oops.. You have to select a category!`)
    else {
        if (category.value == `Computer`)
            showQuiz(compQuestions)
        else if (category.value == `Geography`)
            showQuiz(geogQuestions)
    }
}

let randNum = (length) => {

    let generateNum = Math.floor(Math.random() * length)
    return generateNum

}

let showQuiz = (category) => {
    // event.preventDefault()
    for (let val = 0; val < category.length; val++) {
        // console.log(val)
        // console.log(category[val])
        category[val].displayed = false
    }

    quizDiv.innerHTML = ""
    result.innerHTML = ""
    let i = 0
    while (i < category.length) {

        let num = randNum(category.length)
        if (category[num].displayed != false)
            continue
        else {
            category[num].displayed = true
            // console.log(num)
            var a = category[num];
            var div = document.createElement('div')
            div.className = `p-2 m-3 text-center bg-danger rounded-pill`
            div.style.opacity = `0.9`
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
                input.classList.add("pr-1", "ques" + i)
                // input.className = `pr-1 ques${i}`
                input.value = key
                div.append(input, label)
            }
            quizDiv.append(div)
            i++
        }
    }
    submit.style.display = `block`
    submit.addEventListener('click', () => showResult(category))
}

quiz.addEventListener('click', startQuiz)

function showResult(category) {
    result.innerHTML = ""
    let count = 0;
    let i = 0
    let correctans = ""
    console.log("quiz", category, quizDiv)
    category.map((a) => {
        let ques = document.querySelectorAll('.ques' + i)
        for (let j = 0; j < 3; j++) {
            if (ques[j].checked) {
                correctans = `${correctans}   ${a.correctAnswer}`
                console.log("entered", ques[j].value, a.correctAnswer)
                if (ques[j].value == a.correctAnswer) {
                    count++
                }
                else {
                    break
                }
            }
        }
        i++
    })
    result.textContent = `${count}   out of   ${category.length} answers are correct.
                          correct answers are  := ${correctans}`
}




