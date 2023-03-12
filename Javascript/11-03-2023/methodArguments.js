function sum1() {

    console.log(Object.values(arguments));

    return Object.values(arguments).reduce(function(acc, item) {
        acc += item;
        return acc;
    }, 0);
   
}

console.log(sum1(1,2,3,4,5));

console.log(sum1(1,2,3));

console.log(sum1(1,2));

console.log("------------------");

console.log("------------------");


function sum2() {
    var a =10;
    var b = 20;

    return a+b;
}

function compute(cb){
    var result = cb();
    return result;
}
console.log(compute(sum2));