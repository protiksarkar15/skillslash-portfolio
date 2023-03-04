console.log("----TO UPPER CASE----" + ["Mango Juice", "Apple Juice", "Banana Juice"]);
function convertToUpperCase(products) {
    for(let i=0;i<products.length;i++) {
        products[i] = products[i].toUpperCase();    
    }
    console.log(products);
}

convertToUpperCase(["Mango Juice", "Apple Juice", "Banana Juice"]);

console.log("-------------------------------");
console.log("----Double values----"+[1,2,3,4,5,6]);
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
console.log("----LESS THAN 100----" + [250,150,100,30,60,300,80]);
// i/p = [250,150,100,30,60,300, 80]
// o/p = [100,30,60,80]

function priceLessThan100(data) {
    return data.filter(function(val) {
        return val<=100;
    });
}

console.log(priceLessThan100([250,150,100,30,60,300,80]));

console.log("-------------------------------" );
console.log("----ONLY EVEN NUMBERS----"+ [1,2,3,4,5,6,7,8]);
// i/p [1,2,3,4,5,6,7,8]
// o/p [2,4,6,8]

function getEvenNumbers(data) {
    return data.filter(function(val) {
        return val%2==0;
    });
}

console.log(getEvenNumbers([1,2,3,4,5,6,7,8]));

console.log("-------------------------------" );
console.log("----SORT BY PRICE----"+ [250,150,100,30,60,300,80]);

function sortByPrice(data) {
    return data.sort(function(a,b) {
        return a-b>0 ? 1 : -1;
    });
}

console.log(sortByPrice([250,150,100,30,60,300,80]));

console.log("-------------------------------" );
console.log("----GET TOTAL----"+ [250,150,100,30,60,300,80]);

function getTotal(data) {
    let sum = 0;
    data.forEach(function(val) {
        sum += val;
    });
    return sum;
}

function getTotalByReduce(data) {
    return data.reduce(function(acc, val) {
       
        if(typeof val === 'number') {
            acc += val;
        }
            return acc;
    }, 0);
}

console.log(getTotal([250,150,100,30,60,300,80]));
console.log(getTotalByReduce([250,150,100,30,60,300,80]));

console.log("-------------------------------" );
console.log("----GET MAX VALUE----"+ [10,5,40,15,25]);

function getMaxValue(data) {

    return data.reduce(function(acc,val){
        return (acc>val ? acc : val);
    }, 0);
}

console.log(getMaxValue([10,5,40,15,25]));

console.log("-------------------------------" );
console.log("----GET Names with A in Upper Case----"+ ['Protik','Amit','Alok','Vasant','Arpan','Manoj']);

function getNames(data) {
    var newList = data.reduce(function (acc, val) {
        if(val.startsWith('A')){
            acc.push(val.toUpperCase());
        }
        return acc;
    }, []);
    
    return newList;
}

console.log(getNames(['Protik','Amit','Alok','Vasant','Arpan','Manoj']));