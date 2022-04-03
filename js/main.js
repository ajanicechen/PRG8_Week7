// const inputImg = document.getElementById("inputImg")

let success = 0
let total = 0
let accuracy 
let accDiv

let amberfy = ml5.styleTransfer("models/amberbanner", modelLoaded)

//get file element
let fileButton = document.querySelector("#file")
fileButton.addEventListener("change", (event) => loadFile(event))

//buttons
let amberfyBtn = document.getElementById("amberfyBtn")
amberfyBtn.addEventListener("click", (event) => amberfying())

let succBtn = document.getElementById("succBtn")
succBtn.addEventListener("click", (event) => successUp())

let failBtn = document.getElementById("failBtn")
failBtn.addEventListener("click", (event) => successDown())

//get output element
let beforeImg = document.getElementById('beforeAmber')
// image.addEventListener('load', () => userImageUploaded())

let afterImg = document.getElementById('afterAmber')


function modelLoaded() {
    console.log("model loaded")
}

function loadFile(event) {
    //change image source to uploaded file source
    beforeImg.src = URL.createObjectURL(event.target.files[0])
}

function amberfying() {
    // beforeImg = document.getElementById('beforeAmber')
    amberfy.transfer(beforeImg, function(err, res){
        if(res){
            console.log(res.src)
            afterImg.src = res.src
            console.log("amberfied")
        } else {
            console.log(err)
        }
    })
}

function successUp(){
    //adds one to successful tries
    success++
    //adds one to total tries and calc the acc
    total++
    accuracy = success / total * 100
    // console.log(`total success: ${success}`)
    // console.log(`total amount: ${total}`)
    // console.log(accuracy)

    //get the div and change accuracy in html
    accDiv = document.getElementById("accRate")
    accDiv.innerHTML = `Accuracy do be ${accuracy.toFixed(2)} %`
}

function successDown(){
    //adds one to succesful tries and calc the acc
    total++
    accuracy = success / total * 100
    // console.log(`total success: ${success}`)
    // console.log(`total amount: ${total}`)
    // console.log(accuracy)

    //get the div and change accuracy in html
    accDiv = document.getElementById("accRate")
    accDiv.innerHTML = `Accuracy do be ${accuracy.toFixed(2)} %`
}