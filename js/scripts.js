let tasklink = document.getElementById('tasklink');
let mytask = document.getElementById('mytask');


function displayCard() {
    mytask.style.display = "block";
}


tasklink.addEventListener('click', displayCard);

// Task 4 - Task Form Validation
const taskName = document.getElementById('taskName');
const duedate = document.getElementById('duedate');
const assign = document.getElementById('assign');
const description = document.getElementById('description');
const submitBtn = document.getElementById('submitBtn');
const cancelBtn = document.getElementById('cancelBtn');
const nameErr = document.getElementById('nameErr');
const dateErr = document.getElementById('dateErr');
const assignedErr = document.getElementById('assignedErr');
const descriptionErr = document.getElementById('descriptionErr');
const gridRadios = document.getElementsByName('gridRadios');
const radioErr = document.getElementById('radioErr');

function validFormFieldInput(){
    let nameVal = taskName.value;
    if(nameVal.length < 5 || nameVal === ''){
        nameErr.innerHTML = 'Name should be at least 5 characters.';
        nameErr.style.color = 'red';
    }
    else{
        taskName.focus();
        nameErr.innerHTML = '';
    }
}
submitBtn.addEventListener('click', validFormFieldInput);

function validDueDate(){
    let dueDate = duedate.value;
    if(dueDate === ''){
        dateErr.innerHTML = 'Date could not be empty.';
        dateErr.style.color = 'red';
    }
    else{
        // dueDate.focus();
        dateErr.innerHTML = '';
    }
}
submitBtn.addEventListener('click', validDueDate);

function validRadio(){
      
    let radioVal = gridRadios;
    let istrue = false;
    for(let i=0; i < radioVal.length; i++){
        if(radioVal[i].checked == true){
            radioErr.innerHTML = '';
            istrue = true;
        }
    }
    if(!istrue){
        radioErr.innerHTML = 'Please select the status.'
        radioErr.style.color = 'red';
    }
   
}
submitBtn.addEventListener('click', validRadio);

function validAssignTo(){
    let assignTo = assign.value;
    if(assignTo === ''){
        assignedErr.innerHTML = 'Name should not be empty!';
        assignedErr.style.color = 'red';
    }
    else{
        // assignTo.focus();
        assignedErr.innerHTML = '';
    }
}
submitBtn.addEventListener('click', validAssignTo);

function validDescription(){
    if(description.value.length < 5 || description.value === null){
        console.log(descriptionErr);
        descriptionErr.innerHTML = 'Please add some description.';
        descriptionErr.style.color = 'red';
        console.log(descriptionErr);
    }
    else{
        
        descriptionErr.innerHTML = '';
    }
}
submitBtn.addEventListener('click', validDescription);

