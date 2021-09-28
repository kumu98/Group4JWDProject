
function createTaskHtml (id, name, description, assignedTo, dueDate, status) {
    let html = `<div id=${id} class="card" style="width: 18rem">
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
            status: status
        };
        this._tasks.push(newTask);


        
        //getTaskById(taskId){
          //  let newTask = 0;

        
    }

   render() {
       let tasksHtmlList = [];
       for (let i=0; i < this._tasks.length; i++){
        let currentTask = this._tasks[i];
           let taskHtml = createTaskHtml (
               currentTask.id,
               currentTask.name,
               currentTask.description,
               currentTask.assignedTo,
               currentTask.dueDate,
               currentTask.status
           )
           tasksHtmlList.push(taskHtml);
       }
       
       taskListContainer.innerHTML=tasksHtmlList;

   } 

      
}


          
   