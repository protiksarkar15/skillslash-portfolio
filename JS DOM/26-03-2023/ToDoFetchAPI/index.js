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
fetch('https://dummyjson.com/todos', {
    method: 'GET',
    headers: {
        "Content-Type": "application/json"
    }
})
.then((res) => res.json()).then(data => {
    console.log(data);
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
        console.log(item);
        renderTodoItem(item);
    });
}

//renderTodoList();

function addTodoItem(value) {
    const item = { value, completed: false};
    todoListData.push(item);
    renderTodoItem(item);
}

function toggleTodoItem(ev) {
    const selectedTodoItem = todoListData.find(item => item.todo == ev.target.parentElement.getAttribute('data-id'));
    selectedTodoItem.completed = !selectedTodoItem.completed;
    clearTodoList();
    renderTodoList();
}

function removeTodoItem(ev) {
    const selectedTodoItemIndex = todoListData.find(item => item.todo == ev.target.parentElement.getAttribute('data-id'));
    todoListData.splice(selectedTodoItemIndex, 1);
    clearTodoList();
    renderTodoList();

}


function renderTodoItem(item) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    todoItem.setAttribute('data-id', item.todo);
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