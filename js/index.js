
const taskList = new TaskManager(0); 
console.log(taskList._tasks);

const taskListContainer = document.getElementById('mycard');

// Task 4 - Task Form Validation
const taskform = document.getElementById('taskform');

taskform.addEventListener('submit', (e) => {
    e.preventDefault();

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


let dueDate = duedate.value;
if(dueDate === ''){
    dateErr.innerHTML = 'Date could not be empty!';
    dateErr.style.color = 'red';
    count++;
}
else{
    // dueDate.focus();
    dateErr.innerHTML = '';
    
}

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


let assignTo = assign.value;
if(assignTo === ''){
    assignedErr.innerHTML = 'Name should not be empty!';
    assignedErr.style.color = 'red';
    count++;
}
else{
    assignedErr.innerHTML = '';
    
}


if(description.value.length < 5 || description.value === null){
    descriptionErr.innerHTML = 'Please add some description!';
    descriptionErr.style.color = 'red';
    count++;
}
else{
    descriptionErr.innerHTML = '';
    
}

if(count > 0){
count = 0;
return;
}
else{
    taskList.addTask(
        taskName.value,
        description.value,
        assign.value,
        duedate.value,
        radioInput
    );

    taskform.reset();
    taskList.render();
}
    
});


const taskName = document.getElementById('taskName');
const duedate = document.getElementById('duedate');
const assign = document.getElementById('assign');
const description = document.getElementById('description');
const cancelBtn = document.getElementById('cancelBtn');
const gridRadios = document.getElementsByName('gridRadios');
const nameErr = document.getElementById('nameErr');
const dateErr = document.getElementById('dateErr');
const assignedErr = document.getElementById('assignedErr');
const descriptionErr = document.getElementById('descriptionErr');
const radioErr = document.getElementById('radioErr');
function cancelClick(){
    nameErr.innerHTML = '';
    dateErr.innerHTML = '';
    assignedErr.innerHTML = '';
    descriptionErr.innerHTML = '';
    radioErr.innerHTML = '';
    taskName.value = '';
    duedate.value = '';
    assign.value = '';
    description.value = '';
    gridRadios.checked = '';
}
cancelBtn.addEventListener('click', cancelClick);


taskListContainer.addEventListener('click', (event) => { 
    // console.log(event.target.classList);
    if (event.target.classList.contains("done-button")) {
        // console.log(event.target.parentElement.parentElement);
        const parentTask = event.target.parentElement.parentElement;
        const taskId = Number(parentTask.dataset.taskId);
        // console.log(parentTask.dataset);
        // console.log(parentTask.dataset.taskId);
        const task = taskList.getTaskById(taskId);
        task.status = "Done";
        console.log(task);
        taskList.render();
    }

});




    
