// Initialize a new TaskManager 
const taskList = new TaskManager();
taskList.load();
taskList.render();
console.log(taskList._tasks);

// Select the Task Form
const taskListContainer = document.getElementById('cardlist');
const taskform = document.getElementById('taskform');

// Add an 'onsubmit' event listener
taskform.addEventListener('submit', (e) => {

  // Prevent default action
    e.preventDefault();

  // Select the inputs
    const taskName = document.getElementById('taskName');
    const duedate = document.getElementById('duedate');
    const assign = document.getElementById('assign');
    const description = document.getElementById('description');
    const nameErr = document.getElementById('nameErr');
    const dateErr = document.getElementById('dateErr');
    const assignedErr = document.getElementById('assignedErr');
    const descriptionErr = document.getElementById('descriptionErr');
    const gridRadios = document.getElementsByName('gridRadios');
    const radioErr = document.getElementById('radioErr');
    let count = 0;
  
// Form validation for Task Name
    let nameVal = taskName.value;
    if(nameVal.length < 5 || nameVal === ''){
        nameErr.innerHTML = 'Name should be at least 5 characters!';
        nameErr.style.color = 'red';
        count++;
    }
    else{
        taskName.focus();
        nameErr.innerHTML = '';
    
    }

// Form validation for Due Date
    let dueDate = duedate.value;
    let varDate = new Date(dueDate);
    let today = new Date();
    if(varDate < today || dueDate === ''){
        dateErr.innerHTML = 'Date could not be empty!';
        dateErr.style.color = 'red';
        count++;
    }
    else{
        // dueDate.focus();
        dateErr.innerHTML = '';
        
    }
  
  // Form validation for Task Status
    let radioInput;
    radioValid = false;
    for(let i=0; i < gridRadios.length; i++){
        if(gridRadios[i].checked){
            radioErr.innerHTML = '';
            radioValid = true;
            radioInput = gridRadios[i].value;
        }
    }
    if(!radioValid){
        radioErr.innerHTML = 'Please select the status!'
        radioErr.style.color = 'red';
        count++;
    }

   // Form validation for Assigned Field
    let assignTo = assign.value;
    if(assignTo === ''){
        assignedErr.innerHTML = 'Name should not be empty!';
        assignedErr.style.color = 'red';
        count++;
    }
    else{
        assignedErr.innerHTML = '';
        
    }

   // Form validation for Description
    if(description.value.length < 5 || description.value === null){
        descriptionErr.innerHTML = 'Please add some description!';
        descriptionErr.style.color = 'red';
        count++;
    }
    else{
        descriptionErr.innerHTML = '';
        
    }

  // Form validation for Full Form
    if(count > 0){
    count = 0;
    return;
    }
  
  // Push the valid input into tasks array
    else{
        taskList.addTask(
            taskName.value,
            description.value,
            assign.value,
            duedate.value,
            radioInput
        );

        taskform.reset();
        taskList.save();
        taskList.render();
    
    }
});

const taskName = document.getElementById("taskName");
const duedate = document.getElementById("duedate");
const assign = document.getElementById("assign");
const description = document.getElementById("description");
const cancelBtn = document.getElementById("cancelBtn");
const defaultRadio = document.getElementsByName("default");
const gridRadios = document.getElementsByName("gridRadios")
const nameErr = document.getElementById("nameErr");
const dateErr = document.getElementById("dateErr");
const assignedErr = document.getElementById("assignedErr");
const descriptionErr = document.getElementById("descriptionErr");
const radioErr = document.getElementById("radioErr");
function cancelClick() {
  nameErr.innerHTML = "";
  dateErr.innerHTML = "";
  assignedErr.innerHTML = "";
  descriptionErr.innerHTML = "";
  radioErr.innerHTML = "";
  taskName.value = "";
  duedate.value = "";
  assign.value = "";
  description.value = "";
  for(let i=0;i<gridRadios.length;i++){
      gridRadios[i].checked = false;
  }

}

cancelBtn.addEventListener('click', cancelClick);


taskListContainer.addEventListener('click', (event) => { 
    
    if (event.target.classList.contains("done-button")) {
       const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        const task = taskList.getTaskById(taskId);
        task.status = "Done";
        taskList.save();
        taskList.render();
        
    }
    if(event.target.classList.contains("delete-button")){
        const delparentTask = event.target.parentElement.parentElement;
        const deltaskId = Number(delparentTask.dataset.taskId);
        taskList.deleteTask(deltaskId);
        taskList.save();
        taskList.render();
        
    }

});
