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
    // get tasks(){
    //     return this._tasks;
    // }
}
