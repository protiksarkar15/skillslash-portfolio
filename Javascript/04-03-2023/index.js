const products = ["Mango Juice", "Apple Juice", "Banana Juice"];
console.log(products);
function convertToUpperCase(products) {
    for(let i=0;i<products.length;i++) {
        products[i] = products[i].toUpperCase();    
    }
    console.log(products);
}

convertToUpperCase(products);

console.log("-------------------------------");

// i/p = [1,2,3,4,5,6]
// o/p = [2,4,6,8,10,12]

function doubleTheValues(data) {
    const doubleValues = data.map(function(val, idx) {
        return val*2;
    })

    return doubleValues;
}

console.log(doubleTheValues([1,2,3,4,5,6]));


console.log("-------------------------------");

// i/p = [250,150,100,30,60,300, 80]
// o/p = [100,30,60,80]

function priceLessThan100(data) {
    return data.filter(function(val) {
        return val<=100;
    });
}

console.log(priceLessThan100([250,150,100,30,60,300,80]));

console.log("-------------------------------");

// i/p [1,2,3,4,5,6,7,8]
// o/p [2,4,6,8]

function getEvenNumbers(data) {
    return data.filter(function(val) {
        return val%2==0;
    });
}

console.log(getEvenNumbers([1,2,3,4,5,6,7,8]));