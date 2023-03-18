/* ES6 Features

- Map
- Set
- let/const
- Declarative Method - .forEach, .map, .filter, .reduce
- String Literals
- Rest Operators
- Arrow Functions
- Spread Operators
- Default Parameter
- Class */


// Spread Operator

const students = ['Arpan','Manoj','Pratiksha','Protik','Vasanth','Chirag'];

/* const firstRank = students[0];
const secondRank = students[1];
const thirdRank = students[2];
const restClass = students.splice(3);
 */
// better way to write above using spread operator

const [firstRank, secondRank, thirdRank, ...restClass] = ['Arpan','Manoj','Pratiksha','Protik','Vasanth','Chirag'];

console.log(firstRank, secondRank, thirdRank, restClass);


// Rest Operator

const a = [1,2,3,4,5,6];
const b = [...a];
b[0] = 10;

console.log(a,b);

console.log("---------------------------");

const obj = {
    name: 'Protik Sarkar',
    address: {
        city: 'Hyderabad',
        pincode: 500089
    },
    company: 'DTI',
    experience: 8,
    privateInfo: {
        salary: 2000000
    }
};

console.log(obj.name, obj.company);

console.log("Log only private info and rest of the data seperately");

const {privateInfo, ...restData} = {
    name: 'Protik Sarkar',
    address: {
        city: 'Hyderabad',
        pincode: 500089
    },
    company: 'DTI',
    experience: 8,
    privateInfo: {
        salary: 2000000
    }
};

console.log(privateInfo,restData);

console.log("write only city of address----");
const {address: {city}} = {
    name: 'Protik Sarkar',
    address: {
        city: 'Hyderabad',
        pincode: 500089
    },
    company: 'DTI',
    experience: 8,
    privateInfo: {
        salary: 2000000
    }
};
console.log(city);


// Default Parameter

function combine(arr1=[], arr2=[]) {
    return arr1.concat(arr2);
}
console.log("Default Parameter ");
console.log(combine([1,2,3],[4,5]));
console.log(combine([1,2,3], undefined));
console.log(combine(undefined,[4,5]));
console.log(combine());