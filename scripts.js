let tasklink = document.getElementById('tasklink');
let mytask = document.getElementById('mytask');


function displayCard() {
    mytask.style.display = "block";
}


tasklink.addEventListener('click',displayCard);
