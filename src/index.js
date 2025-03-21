document.addEventListener( `DOMContentLoaded`,() => {
  const form = document.querySelector(`form`)
  form.addEventListener(`submit`,(event) => {
    event.preventDefault()
      console.log(event)
      buildToDO(event.target["new-task-description"].value)
      form.reset()
      
  })
 
  

})
function buildToDO(todo) {
  let ul = document.getElementById(`tasks`)
  let button = document.createElement(`button`)
  button.addEventListener(`click`,handleDelete)
   button.textContent = `X`
  const li = document.createElement("li")
  li.textContent = todo
  li.appendChild(button)
   ul.appendChild(li)
}

  function handleDelete(e) {
      e.target.parentNode.remove()
  }

