
function createTaskHtml (id, name, description, assignedTo, dueDate, status) {
    let html = `<div class="card" data-task-id="${id}" style="width: 18rem">
                <div class="card-body">
                    <h5 class="card-title">${name}</h5>
                    <p class="card-text">
                            ${description}
                    </p>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">${assignedTo} </li>
                <li class="list-group-item">${dueDate} </li>
                <li class="list-group-item">${status} </li>
                </ul>
                <div class="card-body text-right">
                    <button class="btn btn-outline-success done-button">
                        Done
                    </button>
                    <button class="btn btn-outline-danger delete-button">
                        Delete
                    </button>
                </div>
            </div>`;
return html;
}

//Create a Task Manager class
class TaskManager {
    constructor(currentId=0){
        this._tasks = [];
        this._currentId = currentId;
    } 
    
    addTask(name, description, assignedTo, dueDate, status){
        //Create a newTask object 
        const newTask = {
            id: this._currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };
        this._tasks.push(newTask);

    }

    getTaskById(taskId){
        let foundTask;
        for(let i = 0; i < this._tasks.length; i++){
            const task = this._tasks[i];
            if(task.id === taskId){
                foundTask = task;
            }
        }
        return foundTask;
    }
    

    render() {
       let tasksHtmlList = [];
       for (let i=0; i < this._tasks.length; i++){
        const currentTask = this._tasks[i];
            const taskHtml = createTaskHtml (
               currentTask.id,
               currentTask.name,
               currentTask.description,
               currentTask.assignedTo,
               currentTask.dueDate,
               currentTask.status
           );
           
           tasksHtmlList.push(taskHtml);
       }

    // Create the tasksHtml by joining each item in the tasksHtmlList
    // with a new line in between each item.
       const tasksHtml = tasksHtmlList.join("\n");
       
    // Set the inner html of the tasksList on the page
       const taskListContainer = document.getElementById('mycard');
       taskListContainer.innerHTML=tasksHtmlList;

    } 
   
}


       
   