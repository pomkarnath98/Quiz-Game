
let addbtn = document.getElementById('addbtn')
let compArr = []
let geogArr = []
window.addEventListener('load', getquizArr)
function getquizArr() {
    let arr1 = localStorage.getItem("comp") || "Empty"
    if (arr1 === "Empty") {
        compArr = []
    }
    else if (arr1 !== "Empty") {
        arr1 = JSON.parse(arr1)
        compArr = arr1
    }
    let arr2 = localStorage.getItem("geog") || "Empty"
    if (arr2 === "Empty") {
        geogArr = []
    }
    else if (arr2 !== "Empty") {
        arr2 = JSON.parse(arr2)
        geogArr = arr2
    }
    console.log(compArr, geogArr)
}

addbtn.addEventListener('click', putquizLocal)

function putquizLocal() {
    event.preventDefault()
    let categ = document.getElementById('categ').value
    let quest = document.getElementById('quest').value
    let ans1 = document.getElementById('ans1').value
    let ans2 = document.getElementById('ans2').value
    let ans3 = document.getElementById('ans3').value
    let correctans = document.getElementById('correct').value
    let quizobj = {
        question: quest,
        answers: {
            a: ans1,
            b: ans2,
            c: ans3,
        },
        correctAnswer: correctans,
        displayed: false,
    }

    if (categ === "computer") compArr.push(quizobj)
    else if (categ === "geography") geogArr.push(quizobj)
    console.log("after", compArr, geogArr)
    localStorage.setItem('comp', JSON.stringify(compArr))
    localStorage.setItem('geog', JSON.stringify(geogArr))

}