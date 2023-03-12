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
