// define UI Vars
const form = document.querySelector('#task-form');
const taskInput = document.querySelector('#task');
const taskList = document.querySelector('.collection');
const filter = document.querySelector('#filter');
const clearBtn = document.querySelector('.clear-tasks');

// load all event listners function calling

loadEventListeners();


// load all event listners .

function loadEventListeners() {
    //dom load event
    document.addEventListener(('DOMContentLoaded',getTasks))

    // add task form
    form.addEventListener('submit',addTask);
    // remove task event.
    taskList.addEventListener('click',removeTask);
    //  clear tasks
    clearBtn.addEventListener('click',clearTask);
    // filter tasks event
    filter.addEventListener('keyup',filterTask);

}

// get tasks from ls
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.forEach(function(task){
        // create li element 
        const li = document.createElement('li');
        // add class
        li.className = 'collection-item';
        // create text node and append to li
        li.appendChild(document.createTextNode(task));

        // create new link element
        const link = document.createElement('a');
        // add class
        link.className='delete-item secondary-content';
        // add icon html
        link.innerHTML = '<i class="fa fa-remove"></i>';
        // append the child
        li.appendChild(link);

        // append li to ul
        taskList.appendChild(li);

        task.preventDefault();
    })
}


// addTask -
function addTask(e) {
    if(taskInput.value===''){
        alert('add a task')
    }

    // create li element 
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item';
    // create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));

    // create new link element
    const link = document.createElement('a');
    // add class
    link.className='delete-item secondary-content';
    // add icon html
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append the child
    li.appendChild(link);

    // append li to ul
    taskList.appendChild(li);

    //store in local storage
    storeTaskInLocalStorage(taskInput.value);

    // clear the input 
    taskInput.value = '';

    


    e.preventDefault();
}

// store task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks = []
    }else{
        tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    tasks.push(task);

    localStorage.setItem('tasks',JSON.stringify(tasks));
}


// remove tasks.
function removeTask(e){
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are You Sure?')){
            e.target.parentElement.parentElement.remove();
        }
    }

}

// Clear Tasks - we have 2 methods to remove the task

function clearTask(e){
    // 1.method
    // taskList.innerHTML = '';

    // 2. we can looop through and remove each element -- it works faster
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    } 


    // https://isperf.com/innerhtml-vs-removechild --- this link right here is where you can read more about the difference b/w these two.

}

// filter tasks
function filterTask(e){
    const text =e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!= -1){
            task.style.display = 'block';
        }else{
            task.style.display = 'none';
        }
    })
}
