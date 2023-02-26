let arr = [3,2,8];

function enqueue(element) {
    arr.push(element);
}

function dequeue() {
    if(size()> 0) {
        arr.shift();
        
    }   
}

function list() {
    console.log("List of Elements in arr:  ");
    for(let counter = 0; counter < arr.length; counter++) {
        console.log(arr[counter]);
    }
}

function size() {
    console.log("Size of arr:  " + arr.length);
    return arr.length;
}

list();
enqueue(1);
enqueue(2);
list();
dequeue();
list();
size();