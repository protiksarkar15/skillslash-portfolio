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

const todoListData = [{
    value : 'First Item',
    isCompleted: false,
    }, {
    value : 'Second Item',
    isCompleted: true,
    }, {
    value : 'Third Item',
    isCompleted: false,
}];

function clearTodoList() {
    listWrapper.innerHTML = '';
}

function renderTodoList() {
    todoListData.forEach(item => {
        renderTodoItem(item);
    });
}

renderTodoList();

function addTodoItem(value) {
    const item = { value, isCompleted: false};
    todoListData.push(item);
    renderTodoItem(item);
}

function toggleTodoItem(ev) {
    const selectedTodoItem = todoListData.find(item => item.value == ev.target.parentElement.getAttribute('data-id'));
    selectedTodoItem.isCompleted = !selectedTodoItem.isCompleted;
    clearTodoList();
    renderTodoList();
}

function removeTodoItem(ev) {
    const selectedTodoItemIndex = todoListData.find(item => item.value == ev.target.parentElement.getAttribute('data-id'));
    todoListData.splice(selectedTodoItemIndex, 1);
    clearTodoList();
    renderTodoList();

}


function renderTodoItem(item) {
    const todoItem = document.createElement('li');
    todoItem.classList.add('todoItem');
    todoItem.setAttribute('data-id', item.value);
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

    textBox.innerHTML = item.value;
    if(item.isCompleted) {
        todoItem.classList.add('completed');
        checkBox.checked = true;
        buttonBox.style.display = 'none';
    }

    checkBox.onchange = toggleTodoItem;
}