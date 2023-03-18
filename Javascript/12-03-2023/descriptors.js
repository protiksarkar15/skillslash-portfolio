// Property Descriptors

// configurable = cannot change structure (no delete or no addition)
// enumerable = to be visible while iterating
// value = value
// writable = makes the field editable or not editable

const obj2 = {name: 'Protik'};
obj2.company = 'DTI';

Object.defineProperty(obj2, 'city', {
    value: 'Hyderabad',
    writable: true,
    enumerable: true,
    configurable: true 
});

Object.defineProperty(obj2, 'salary', {
    value: '2000000',
    writable: true,
    enumerable: false,
    configurable: true 
});

Object.defineProperty(obj2, 'surname', {
    value: 'Sarkar',
    writable: false,
    enumerable: true,
    configurable: true 
});

for(var key in obj2) {
    console.log(key);
}

obj2.surname = "Kumar Sarkar"
console.log(obj2.surname);

delete obj2.surname;
console.log(obj2.surname);

Object.defineProperty(obj2, 'surname', {
    value: 'Sarkar',
    writable: false,
    enumerable: true,
    configurable: false 
});

console.log(obj2.surname);

delete obj2.surname;
console.log(obj2.surname);