let arr = [4,5,6];

function add(element) {
    arr.push(element);
}

function remove() {
    if(size()> 0) {
        arr.pop();
    }   
}

function list() {
    console.log("List of Elements in arr:  ");
    for(let counter = 0; counter < arr.length; counter++) {
        console.log(arr[counter]);
    }
}

function size() {
    console.log("Size of arr:  ");
    console.log(arr.length);
}
list();
add(1);
add(2);
remove();
list();
size();