function createTaskHtml (name, description, assignedTo, dueDate, status) {
const html = `<li class="card" style="min-width: 50vw">
<div class="card-body">
    <h5 class="card-title">${name}</h5>
    <p class="card-text">
        ${description}
    </p>
    <p class="card-text">${assignedTo} To</p>
    <p class="card-text">${dueDate}</p>
    <div class="card-footer row">
        <div class="col-6">
            <p class="card-text"><b>${status}</b></p>
        </div>
        <div class="col-3">
            <button class="btn btn-outline-success done-button">
                Done
            </button>
        </div>
        <div class="col-3">
            <button class="btn btn-outline-danger delete-button">
                Delete
            </button>
        </div>
    </div>
   </div>
</li>`;
return html;
}

class TaskManager {
    constructor(currentId=0){
        this._tasks = [];
        this._currentId = currentId;
    } 
    addTask(name, description, assignedTo, dueDate, status){
        const newTask = {
            id: this._currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status,
        }
        this._tasks.push(newTask);
    }

    render(){
        const tasksHtmlList = [];
        
        for(let i=0; i<this._tasks.length; i++){
            let taskHtml = createTaskHtml (
               tasks.name,
                tasks.description,
                tasks.assignedTo,
                tasks.dueDate,
                tasks.status
            ); 
        tasksHtmlList.push(taskHtml);
        console.log(tasksHtmlList);
        const mytask = document.getElementById('mytask');
        mytask.innerHTML = taskHtml;
        }

        
        
    }
    
}
