document.addEventListener('DOMContentLoaded', function()=>
{

const inputField=
document.getElementById('task-input');
const addButton=
document.getElementById('add-task-btn');
const taskList=
document.getElementById('task-list');


addButton.addEventListener('click', ()=>{
    function addTask() {
    const taskText= taskInput.value.trim();
    if( taskText !==) {
        alert('Task added Successfully.');
    } else {
        const li= document.createElement('li');
        li.textContent= taskText};

        const removeButton=
        document.createElement('button');
        removeButton.textContent= 'Remove';
        removeButton.classList.add('remove-btn');

        removeButton.addEventListener('click', ()=>{
            taskList.removeChild(li);
        });


        li.appendChild(removeButton);
        taskList.appendChild(li);

        inputField.value= ;
    }
    });

addButton.addEventListener('click', ()=>{
    addTask();
});
inputField.addEventListener('keypress',
    (event) =>{
        if(eventKey === 'Enter') {
            addButton.click();
       
        }
    });
});


