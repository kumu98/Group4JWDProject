const taskList = new TaskManager();
// taskList.addTask('Take out the trash', 'Take out the trash to the front of the house', 'Nick', '2020-09-20', 'In Progress');
console.log(taskList._tasks);
// const taskHtml = createTaskHtml('validation','validate all fields in form','kumudhini','2020-09-21','completed');
// console.log(taskHtml);



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


    let nameVal = taskName.value;
    if(nameVal.length < 5 || nameVal === ''){
        nameErr.innerHTML = 'Name should be at least 5 characters.';
        nameErr.style.color = 'red';
    }
    else{
        taskName.focus();
        nameErr.innerHTML = '';
        
    }


    let dueDate = duedate.value;
    if(dueDate === ''){
        dateErr.innerHTML = 'Date could not be empty.';
        dateErr.style.color = 'red';
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
        radioErr.innerHTML = 'Please select the status.'
        radioErr.style.color = 'red';
    }



    let assignTo = assign.value;
    if(assignTo === ''){
        assignedErr.innerHTML = 'Name should not be empty!';
        assignedErr.style.color = 'red';
    }
    else{
        // assignTo.focus();
        assignedErr.innerHTML = '';
       
    }


    if(description.value.length < 5 || description.value === null){
        descriptionErr.innerHTML = 'Please add some description.';
        descriptionErr.style.color = 'red';
        
    }
    else{
        descriptionErr.innerHTML = '';
        
    }


    taskList.addTask(
        taskName.value,
        description.value,
        assign.value,
        duedate.value,
        radioInput
    );

    taskform.reset();

    taskList.render();
});



