//Object

//using literals

/* const obj1 = { name: "Protik"};

const obj2 = Object.create(obj1);

console.log(obj1, obj2);

console.log(obj1.name, obj2.name);
 */

// Constructor

/* function Person(name, company) {
    this.name = name;
    this.company = company;
}

const protikObj = new Person("Protik", "DTI");
const sayantikaObj = new Person("Sayantika", "Valuelabs");
console.log(protikObj);
console.log(sayantikaObj); */

// Constructor

class Person {
    constructor(name, company) {
        this.name=name;
        this.company=company;
        this.printDetail = function() {
            console.log("Name:" + this.name +", Company:" +this.company);
        }
    }

    showDetail() {
        console.log("ShowDetails");
    }
}

const personObj1 = new Person('Protik', 'DTI');
const personObj2 = new Person('Abdul', 'XYZ');
personObj1.printDetail();
personObj2.printDetail();
