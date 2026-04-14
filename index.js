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

    inputEl.value = ""
    render()
}

function render(){
        
        txtEl.innerHTML = ""

        for(let i=0; i<todoList.length; i++){
        txtEl.innerHTML += `<p>
         ${todoList[i]} 
         <button onclick="
         todoList.splice(${i}, 1)
         render()
         ">
            Delete
         </button>
         </p>`
    }
}

