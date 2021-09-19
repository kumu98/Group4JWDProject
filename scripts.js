let formlink = document.getElementById('formlink');
let tasklink = document.getElementById('tasklink');
let mytask = document.getElementById('mytask');
let addtask = document.getElementById('addtask');

function displayCard() {
    mytask.style.display = "block";
}

function displayForm() {

    addtask.style.display = "block";
}

tasklink.addEventListener('click',displayCard);
formlink.addEventListener('click',displayForm);