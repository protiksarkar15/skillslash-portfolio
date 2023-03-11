
function counter() {
    var count = 0;
    return function() {
        return ++count;
    }
}

const runCounter = counter();
console.log(runCounter()); // 1
console.log(runCounter()); // 2
console.log(runCounter()); // 3