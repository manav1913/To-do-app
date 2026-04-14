const inputEl = document.getElementById("todo")
const addEl = document.getElementById("add")
const txtEl = document.getElementById("txt")



let todoList = JSON.parse(localStorage.getItem("list")) || []


addEl.addEventListener("click", add)




function add(){
    let input = inputEl.value

    if(input === "") return

    todoList.push({
        text: input,
        date: new Date().toLocaleDateString()
    })

    localStorage.setItem("list", JSON.stringify(todoList))

    inputEl.value = ""
    render()
}

function render(){
        
        txtEl.innerHTML = ""

        for(let i=0; i<todoList.length; i++){
        txtEl.innerHTML += `<p>
        <span>
         ${todoList[i].text} 
         <small>${todoList[i].date}</small>
         </span>
         <button onclick="
         todoList.splice(${i}, 1)
         render()
         ">
            Delete
         </button>
         </p>`
    }
}
render()
