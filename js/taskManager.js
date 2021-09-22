class TaskManager{
    constructor(){
        this._tasks = [];
        this._currentId = 0;
    } 
    addTask(taskName, taskDate, status, assignTo, description){
        const newTask = {
            id: this._currentId,
            taskName: taskName,
            taskDate: taskDate,
            status: status,
            assignTo: assignTo,
            description: description
        }
        this._tasks.push(newTask);
    }
    get tasks(){
        return this._tasks;
    }
}
const taskList = new TaskManager();
taskList.addTask('Validation', '22/09/2021', 'in progress', 'Yuliia', 'Validate all the fields.');
console.log(taskList);