const input_box = document.querySelector('#task');
const add_btn = document.querySelector('#add');
const task_list = document.querySelector('#task_list');

add_btn.addEventListener('click', () => {
    if(input_box.value === '') return alert('Please enter a task!');
    add_task(input_box.value);
    saveTask();
    input_box.value = '';
});

function add_task(task) {
    const task_li = document.createElement('li');
    task_li.textContent = task;
    task_li.classList.add('task_item'); 
    task_list.appendChild(task_li);
    let span=document.createElement('span');
    span.innerHTML='\u00D7';
    task_li.appendChild(span);
}

task_list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        // Get the current toggle state from the data attribute
        let toggle_line = e.target.dataset.toggle === 'true';

        if(toggle_line){
            e.target.style.textDecoration = 'none';
            e.target.classList.remove('clicked');
        } else {
            e.target.style.textDecoration = 'line-through';
            e.target.classList.add('clicked');
        }

        // Save the new toggle state in the data attribute
        e.target.dataset.toggle = !toggle_line;

        saveTask();
    }
    if (e.target.tagName === 'SPAN') {
        let li = e.target.parentElement;
        li.style.display = 'none';
        saveTask();
    }
});

function saveTask(){
    localStorage.setItem('task',task_list.innerHTML);
}
function getTask(){
    if(localStorage.getItem('task')){
        task_list.innerHTML=localStorage.getItem('task');
    }
}
getTask();