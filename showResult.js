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
const geogQuestions = [
    {
        question: "Polavaram Project is located in which state?",
        answers: {
            a: "Madhya Pradesh",
            b: "Andhra Pradesh",
            c: "Karnataka",
        },
        correctAnswer: 'b'
    },
    {
        question: "Which is the longest National Highway in India??",
        answers: {
            a: "NH-2",
            b: "NH-10",
            c: "NH-44",
        },
        correctAnswer: 'c'
    },
    {
        question: "Which among the following states is largest producer of Coffee in India?",
        answers: {
            a: "Tamilnadu",
            b: "Karnataka",
            c: "Kerala",
        },
        correctAnswer: 'b'
    },
    {
        question: "Duncan Passage separates ?",
        answers: {
            a: "Rutland Island and Little Andaman",
            b: "Andaman and Nicobar",
            c: "South andaman and little Andaman",
        },
        correctAnswer: 'a'
    },
    {
        question: "Which among the following is not located in Andaman & Nicobar island? ",
        answers: {
            a: "Campbell Bay",
            b: "Mahatma Gandhi Marine National Park",
            c: "Guindy National Park"
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

let startQuiz = () =>{

    if(name.value == '')
        alert(`Don't hide your name :)`)
    else if (category.value == `Select Category`)
        alert(`Oops.. You have to select a category!`)
    else{
        if (category.value == `Computer`)
            showQuiz(compQuestions)
        else if (category.value == `Geography`)
            showQuiz(geogQuestions)
    }
}

let showQuiz = (category) => {
    // event.preventDefault()

    quizDiv.innerHTML = ""
    result.innerHTML = ""
    let i = 0
    for (var k = 0; k < category.length; k++) {
        var a = category[Math.floor(Math.random() * category.length)];
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
            // input.setAttribute("class", "q   ues" + i)
            input.className = `pr-1 ques${i}`
            input.value = a.correctAnswer
            div.append(input, label)
        }
        quizDiv.append(div)
        i++
    }
    submit.style.display = `block`
    submit.addEventListener('click', function () {
        showResult(category)
    })

}

quiz.addEventListener('click', startQuiz)

function showResult(category) {
    result.innerHTML = ""
    let count = 0;
    let i = 0
    let correctans = ""
    category.map((a) => {
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
    result.textContent = `${count}   out of   ${category.length} answers are correct.
                          correct answers are  := ${correctans}`
}





