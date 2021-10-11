function createTaskHtml (id, name, description, assignedTo, dueDate, status) {
    let html = `<div class="card border-light mb-3" data-task-id="${id}" style="max-width:18rem;">
                    <div class="card-header fw-bold text-uppercase" style="color:#534aa8;">${name} </div>
                    <div class="card-body">
                        <p class="card-text"><span class="fst-italic text-info">Description: </span>${description}
                        </p>
                        <h6><span class="fst-italic text-info">Assigned To: </span>${assignedTo}</h6>
                        <h6><span class="fst-italic text-info">Due Date: </span>${dueDate}</h6>
                        <h6 class="card-text mb-2 text-muted"><span class="fst-italic text-warning">Status: </span>${status}</h6>
                        <button class="btn btn-success done-button ${status==="Done" ? "invisible" : "visible"}">Done</button>
                        <button class="btn btn-danger delete-button">Delete</button>
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

    }

    render() {
       let todoHtmlList = [];
       let inprogressHtmlList = [];
       let reviewHtmlList = [];
       let doneHtmlList = [];

       for (let i=0; i < this._tasks.length; i++){
            let currentTask = this._tasks[i];
            const taskHtml = createTaskHtml (
               currentTask.id,
               currentTask.name,
               currentTask.description,
               currentTask.assignedTo,
               currentTask.dueDate,
               currentTask.status
           );
           
            if (currentTask.status === "To-Do") {
                todoHtmlList.push(taskHtml);

        
            }
            else if (currentTask.status === "In-Progress") {
                inprogressHtmlList.push(taskHtml);

            }
            else if (currentTask.status === "Review"){
                reviewHtmlList.push(taskHtml);

            }
            else if (currentTask.status === "Done"){
                doneHtmlList.push(taskHtml);

            }
       }
       const todoHTML = todoHtmlList.join("\n");
       const todolist = document.getElementById('todolist');
       todolist.innerHTML = todoHTML;
       
       const inprogressHTML = inprogressHtmlList.join("\n");
       const inprogresslist = document.getElementById('inprogresslist');
       inprogresslist.innerHTML = inprogressHTML;
       
       const reviewHTML = reviewHtmlList.join("\n");
       const reviewlist = document.getElementById('reviewlist');
       reviewlist.innerHTML = reviewHTML;
       
       const doneHTML = doneHtmlList.join("\n");
       const donelist = document.getElementById('donelist');
       donelist.innerHTML = doneHTML;
    
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
}