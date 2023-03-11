function sum3(a) {
    return function(b) {
        return a+b;
    }
}

const innerFn = sum3(1);
console.log(innerFn(2));
console.log(sum3(1)(2));


console.log("--------------------");

function sum5(a) {
    return function(b) {
        return a+b;
    }
}

const innerFn1 = sum5(1);
console.log(innerFn1(2));
console.log(innerFn1(2));
console.log(innerFn1(2));
console.log(innerFn1(2));


console.log("-----------------");

