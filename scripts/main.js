import { addNumbers } from "./add.js"
import { subtractNumbers } from "./subtract.js"
import { divideNumbers } from "./divide.js"
import { multiplyNumbers } from "./multiply.js"

const buttonContainer = document.querySelector("#buttons")
const addAnswerContainer = document.querySelector("#add_answer")
const subtractAnswerContainer = document.querySelector("#subtract_answer")
const divideAnswerContainer = document.querySelector("#divide_answer")
const multiplyAnswerContainer = document.querySelector("#multiply_answer")

buttonContainer.innerHTML =     
`<button class="myButton" id="addButton">Add</button>
<button class="myButton"  id="subtractButton">Subtract</button>
<button class="myButton" id="divideButton">Divide</button>
<button class="myButton" id="multiplyButton">Multiply</button>
`

const addButton = document.querySelector("#addButton")
const subtractButton = document.querySelector("#subtractButton")
const divideButton = document.querySelector("#divideButton")
const multiplyButton = document.querySelector("#multiplyButton")

// event listeners can correspond not just to document but to subsets of documents (through querySelector)

addButton.addEventListener(
    "click",
    (clickEvent) => {
        const total = addNumbers(7,9)
  
        addAnswerContainer.innerHTML = total
        }
)

subtractButton.addEventListener(
    "click",
    (clickEvent) => {
        const total = subtractNumbers(9,7)
        subtractAnswerContainer.innerHTML = total
    }
)

divideButton.addEventListener(
    "click",
    (clickEvent) => {
        const total = divideNumbers(8,2)
        divideAnswerContainer.innerHTML = total
    }
)

multiplyButton.addEventListener(
    "click",
    (clickEvent) => {
        const total = multiplyNumbers(3, 6)
        multiplyAnswerContainer.innerHTML = total
    }
)