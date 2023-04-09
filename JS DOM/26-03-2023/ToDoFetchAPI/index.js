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
        userId: 15,
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

function removeTodoItem(ev) {
    
    const selectedTodoItemIndex = todoListData.find(item => item.id == ev.target.parentElement.getAttribute('data-id'));
    todoListData.splice(selectedTodoItemIndex, 1);
    clearTodoList();
    renderTodoList();
    removeTodo(selectedTodoItemIndex.id);
}

function removeTodo(todoId) {
    
    fetch(`https://dummyjson.com/todos/${todoId}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(console.log);
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
    buttonBox.onclick = removeTodoItem;
    todoItem.append(buttonBox);

    textBox.innerHTML = item.todo;
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