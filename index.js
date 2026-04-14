const inputEl = document.getElementById("todo")
const addEl = document.getElementById("add")
const txtEl = document.getElementById("txt")

let todoList = []


addEl.addEventListener("click", add)


function add(){
    let input = inputEl.value

    if(input === "") return

    txtEl.innerHTML = ""

    todoList.push(input)

    for(let i=0; i<todoList.length; i++){
        txtEl.innerHTML += `<p>${todoList[i]}</p>`
    }
    inputEl.value = ""
}