document.addEventListener( `DOMContentLoaded`,() => {
    document.querySelector(`form`)
    form.addEventListener(`submit`,(e) => {
        event.preventDefault()
        buildToDO(e.target.new_todo.value)
        form.reset()
        
    })
   
    

})
 function buildToDO(todo) {
    let p = document(`p`)
    let button = document.createElement(`button`)
    button.addEventListener(`click`,handleDelete)
     button.textContent = `X`
    p.textContent =` ${todo}`
    p.appendChild(button)
    console.log(p)
    document.querySelector(`main-content`).appendChild(p)
 }

    function handleDelete(e) {
        event.target.parentNode.remove()
    }

 