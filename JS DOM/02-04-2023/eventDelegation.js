const todoWrapper = document.getElementById('todoList');

//todoWrapper.innerHTML = 'Todo List';

// Input Wrapper
const inputWrapper = document.createElement('section');
inputWrapper.classList.add('inputWrapper');

// Input Box
const inputBox = document.createElement('input');
inputBox.placeholder = 'Add a new item';
inputBox.addEventListener('keypress', function(ev) {
    if(ev.key == 'Enter') {
        addTodoItem(ev.target.value);
        inputBox.value = "";
    }
});

inputWrapper.append(inputBox);
todoWrapper.append(inputWrapper);

// List
const listWrapper = document.createElement('section');
listWrapper.id = 'listWrapper';
listWrapper.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'BUTTON') {
        const selectedId = ev.target.closest('.todoItem').getAttribute('data-id');
        removeTodoItem(selectedId);
    }
});

todoWrapper.append(listWrapper);

/* const todoListData = [{
    value : 'First Item',
    completed: false,
    }, {
    value : 'Second Item',
    completed: true,
    }, {
    value : 'Third Item',
    completed: false,
}]; */

let todoListData;

console.log("start of Fetch");
fetch('https://dummyjson.com/todo/user/15', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
})
.then((res) => res.json()).then(data => {
    todoListData = data.todos;
    renderTodoList();
    console.log("Success of Fetch");
})
.catch(err => console.log(err));

function clearTodoList() {
    listWrapper.innerHTML = '';
}

function renderTodoList() {
    todoListData.forEach(item => {
        renderTodoItem(item);
    });
}

//renderTodoList();

function addTodoItem(value) {
        createTodoItem(value).then((data) => {
        todoListData.push(data);
        renderTodoItem(data);
    });
    
}

function createTodoItem(todo) {
    return fetch("https://dummyjson.com/todos/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
        todo,
        completed: false,
        userId: 3,
        }),
    })
        .then((res) => res.json())
       
}

function toggleTodoItem(ev) {
    const selectedTodoItem = todoListData.find(item => item.id == ev.target.parentElement.getAttribute('data-id'));
    selectedTodoItem.completed = !selectedTodoItem.completed;
    clearTodoList();
    renderTodoList();
    toggleCompletedStatus(selectedTodoItem.id, selectedTodoItem.completed);
}

function removeTodoItem(selectedId) {
    
   // const selectedTodoItemIndex = todoListData.find(item => item.id == ev.target.parentElement.getAttribute('data-id'));
    todoListData.splice(selectedId, 1);
    console.log(todoListData);
    clearTodoList();
    renderTodoList();
    removeTodo(selectedId);
}

function removeTodo(todoId) {
    
    fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
}

function replaceTextBoxWithInputBox(ev) {
    ev.stopPropagation();
    const inputBox = document.createElement('input');
    inputBox.value = ev.target.innerHTML;
    inputBox.style.width = '100%';
    const parentEl = ev.target.parentElement;
    parentEl.replaceChild(inputBox, ev.target);
    parentEl.querySelector('button').remove();

    inputBox.addEventListener('keypress', (ev) => {
        ev.stopPropagation();
        if(ev.key == 'Enter') {
           
            const updatedVal = ev.target.value;
            const selectedId = ev.target.parentElement.getAttribute('data-id');
            const selectedTodoItemIndex = todoListData.findIndex((item) => {
                return item.id == selectedId;
            });
            todoListData.splice(selectedTodoItemIndex, 1, {...todoListData[selectedTodoItemIndex], todo: updatedVal});
            clearTodoList();
            renderTodoList();
        }
    });
}




function renderTodoItem(item) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    todoItem.setAttribute('data-id', item.id);
    //todoItem.onclick = toggleTodoItem;
    listWrapper.append(todoItem);
    
   

    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    //checkBox.setAttribute('data-id', item.value);
    todoItem.append(checkBox);

    const textBox = document.createElement('span');
    todoItem.append(textBox);

    const buttonBox = document.createElement('button');
    buttonBox.innerHTML = "Remove";
   // buttonBox.setAttribute('data-id', item.value);
    //buttonBox.onclick = removeTodoItem;
    todoItem.append(buttonBox);

    textBox.innerHTML = item.todo;
    textBox.onclick = replaceTextBoxWithInputBox;
    if(item.completed) {
        todoItem.classList.add('completed');
        checkBox.checked = true;
        buttonBox.style.display = 'none';
    }

    checkBox.onchange = toggleTodoItem;
}

function toggleCompletedStatus(todoId, completed) {
    /* updating completed status of todo with id 1 */
    fetch(`https://dummyjson.com/todos/${todoId}`, {
    method: "PUT" /* or PATCH */,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        completed: completed,
    }),
    })
    .then((res) => res.json())
    .then(console.log);
}

document.querySelector('#description a').addEventListener('click' , function(ev){
    ev.preventDefault();
    window.open('https://www.youtube.com', '_blank');
});

