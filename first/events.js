let callback1 = (event)=>{
        if(event.currentTarget.value === "red"){
            event.currentTarget.style.backgroundColor = "red"
        }
    }


let callback2 = event=> {
     let listAdd = document.getElementById("list-add")
        let li = document.createElement("li")
        li.innerText = listAdd.value
        let ul = document.querySelector("ul")
        ul.append(li)
    }

let callback3 = event=>{
        let section = document.getElementById("section-3")
        section.style.backgroundColor = colorSelect.value
    }



window.addEventListener("DOMContentLoaded",()=> {
    alert("dom has loaded")
    let redInput = document.getElementById("red-input")
    let addItem = document.getElementById("add-item")

    let colorSelect = document.getElementById("color-select")
    let removeListeners = document.getElementById("remove-listeners")
    let addListeners = document.getElementById("add-listeners")
    let hoverDiv = document.getElementById("hover-div")

    redInput.addEventListener("input",callback1)
    addItem.addEventListener("click",callback2)
    colorSelect.addEventListener("change",callback3)

    removeListeners.addEventListener("click",event => {
        colorSelect.removeEventListener("change",callback)
        addItem.removeEventListener
        redInput.removeEventListener
    })
    addListeners.addEventListener("click",event => {
        redInput.addEventListener("input",callback1)
        addItem.addEventListener("click",callback2)
        colorSelect.addEventListener("change",callback3)
    })
    hoverDiv.addEventListener("mouseover",event => {
        event.target.innerText += "is being hovered over"
    })
    hoverDiv.addEventListener("mouseout",event => {
        event.target.innerText = "div here"
    })
    window.addEventListener("keypress",event => {
        console.log(event.key,event.code)
        if(event.code === "Space") alert("space pressed")
    })

})
