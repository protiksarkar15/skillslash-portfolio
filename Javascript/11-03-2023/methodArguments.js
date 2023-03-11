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
function sum2(...args) {

    console.log(args);

    return args.reduce(function(acc, item) {
        acc += item;
        return acc;
    }, 0);
   
}

console.log(sum2(1,2,3,4,5));

console.log(sum2(1,2,3));

console.log(sum2(1,2));


console.log("------------------");


function combineArray(...args) {
  
    return args.reduce(function(acc, item) {
        item.forEach(element => {
            acc.push(element);
        });
        // acc =acc.concat(item);
        return acc;
    }, []);
}

console.log(combineArray([1,2,3],[4,5,6,7],[8,9])); // => [1,2,3,4,5,6,7,8,9]

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