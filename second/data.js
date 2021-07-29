window.addEventListener("DOMContentLoaded",e => {

    let add = document.getElementById("add")
    let select = document.getElementById("type")
    let ul = document.querySelector("ul")
    let name = document.getElementById("name")

    add.addEventListener("click",event => {
        event.preventDefault()
        let li = document.createElement("li")
        li.setAttribute("data-type",select.value)
        li.innerText = name.value
        ul.append(li)
    })
})
