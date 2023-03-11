const products = [
    {
        name: "Real Fruit Juice - Apple",
        mrp: 113,
        discountP: 19,
        quantity: 2,
        isAd: true
    },
    {
        name: "Real Fruit Juice - Mixed Fruit",
        mrp: 100,
        discountP: 10,
        quantity: 1,
        isAd: true
    },
    {
        name: "Real Fruit Juice - Kiwi",
        mrp: 200,
        discountP: 20,
        quantity: 1,
        isAd: true
    }
];

function getProductCount(products) {
    return products.map(function(product) {
        return product.quantity;
    });
}

console.log("------- Calculate Quantity-------");
console.log(getProductCount(products));



function getTotalValue(products) {
    return products.reduce(function(acc, product) {
        return acc += product.quantity*(product.mrp - (product.discountP/100*product.mrp));
    }, 0);
}

console.log("------- Calculate Total Cart Value-------");
console.log(getTotalValue(products));


console.log("----------Transform info: name:{}----------");

function getTransformedProductDetails(products) {
    return products.reduce(function(acc, product) {
       acc[product.name] = product;
       return acc;
    }, {});

}

console.log(getTransformedProductDetails(products));


function getStudentsList(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2)));
}

console.log(getStudentsList([1,2,3,4],[2,3,4,5,6]))     