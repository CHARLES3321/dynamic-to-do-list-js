document.addEventListener('DOMContentLoaded', function()=>
{

const inputField=
document.getElementById('task-input');
const addButton=
document.getElementById('add-task-btn');
const taskList=
document.getElementById('task-list');


const storedTasks=
JSON.parse(localStorage.getItem('tasks') || '[]');
storedTasks.forEach(taskText => 
    addTask(taskText, false));



addButton.addEventListener('click', ()=>{
    const taskText= taskInput.value.trim();
    if( taskText ) {
        addTask(taskText);
        taskInput.value= ``;
    }
});



    function addTask(taskText, save = true) {
        const taskElement=
        document.createElement('li');
        taskElement.textContent= taskText;
    

        const removeButton=
        document.createElement('button');
        removeButton.textContent= 'Remove';
        removeButton.addEventListener('click', ()=>{
            taskList.removeChild(taskElement);
            removeTask(taskText);
        });

        taskElement.appendChild(removeButton);
        taskList.appendChild(taskElement);

        if(save) {
            const storedTasks=
            JSON.parse(localStorage.getItem('tasks') || '[]');
            storedTasks.push(taskText);
            localStorage.setItem('tasks',
                JSON.stringify(storedTasks));
            
        }
    }
    

    function removeTask(taskText) {
        const storedTasks=
        JSON.parse(localStorage.getItem('tasks') || '[]');
        const newTasks= storedTasks.filter(task =>
            task !== taskText);
            localStorage.setItem('tasks',
                JSON.stringify(newTasks));
            }

            function loadTasks() {
                const storedTasks =
                JSON.parse(localStorage.getItem('tasks') || '[]');
                storedTasks.forEach(taskText =>
                    addTask(taskText, false)
                );
            }
            
        
    });

    
    
