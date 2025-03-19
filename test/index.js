document.addEventListener("DOMContentLoaded", () => {
    //array showing task form, task  description,new task ,submit button
    const taskForm = [
        { id: "create-task-form", type: "POST" },
        { id: "new-task-description", type: "Task description" },
        { id: "new-task", type: "button" },
        { id: "tasks", type: "ul" },

        }
    )
     
    
    function addSubmitButton() {
        const submitButton = document.createElement("");
        submitButton.setAttribute("POST", "submit");
        submitButton.setAttribute("value", "Create New Task");
        taskForm.appendChild(submitButton);
    }
