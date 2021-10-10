
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
                    <button class="btn btn-outline-success done-button ${status === "Done" ? "invisible" : "visible"}">
                        Done
                    </button>
                    <button class="btn btn-outline-danger delete-button">
                        Delete
                    </button>
                </div>
            </div>`;
return html;
}

// Create the TaskManager class
class TaskManager {
    constructor(currentId=0){
        this._tasks = [];
        this._currentId = currentId;
    } 
    
    // Create the addTask method
    addTask(name, description, assignedTo, dueDate, status){

        // Create the newTask object
        const newTask = {
            // Increment the current Id to each new task
            id: this._currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: status
        };
        // Push newTask to the list of tasks
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

    save() {
        let tasksJson = JSON.stringify(this._tasks);
        localStorage.setItem("tasks", tasksJson);
        let currentId = JSON.stringify(this._currentId);
        localStorage.setItem ("currentId", currentId);
    }

    load(){
       if(localStorage.getItem("tasks")){
        this._tasks = JSON.parse(localStorage.getItem("tasks"));
       }
       if(localStorage.getItem("currentId")){
        this._currentId = JSON.parse(localStorage.getItem("currentId"));
       }
    }

    deleteTask(taskId){
        let newTasks = [];
        for(let i = 0; i < this._tasks.length; i++){
            const task = this._tasks[i];
            if(task.id !== taskId){
               newTasks.push(task);
            }
        }
        this._tasks = newTasks;
    }
    
    // Create the render method
    render() {
       let tasksHtmlList = [];

    // Loop over tasks and create the HTML which will storing in the array
       for (let i=0; i < this._tasks.length; i++){

    // Get the current task in the loop
        const currentTask = this._tasks[i];

        // Format the date
        const date = new Date(currentTask.dueDate);
        const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' }; 
        const formattedDate = date.toLocaleDateString('en-us', options);

        // Create the task HTML variable
            const taskHtml = createTaskHtml (
               currentTask.id,
               currentTask.name,
               currentTask.description,
               currentTask.assignedTo,
               formattedDate,
               currentTask.status
           );
        
        //Push taskHtml to the taskHtmlList array
        tasksHtmlList.push(taskHtml);
       }
    // Create the tasksHtml by joining each item in the tasksHtmlList 
    // Wwth new line between each item
       const tasksHtml = tasksHtmlList.join("\n");
    
    // Select the taskListContainer
       const taskListContainer = document.getElementById('mycard');
    // Set the inner HTML of the taskListContainer on the page
       taskListContainer.innerHTML = tasksHtml;
    }
}