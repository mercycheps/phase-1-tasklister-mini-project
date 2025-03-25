
  const form = document.querySelector(`#create-task-form`)
  let formInput = document.querySelector('#new-task-description')
  let ul = document.getElementById(`tasks`)

  form.addEventListener(`submit`,function(event){
    event.preventDefault()
      console.log(formInput.value.trim())
      buildToDO(formInput.value.trim())
      console.log(ul.textContent);
      
      
      
  })
 
function buildToDO(todo) {
  const li = document.createElement("li");
  li.textContent = `${todo} `
  ul.appendChild(li)

   //Adding a remove button
  let button = document.createElement(`button`)
   button.textContent = `X`
   button.addEventListener(`click`,handleDelete)
   li.appendChild(button)
}

  function handleDelete(e) {
    // handle delete
      e.target.parentNode.remove()
  }

