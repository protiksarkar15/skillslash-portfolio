class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.printDetail = function() {
            return("First Name:" + this.firstName +", Last Name:" +this.lastName);
        }
    }

    getName() {
        return `${this.firstName}  ${this.lastName}`;
    }
}

class Student extends Person {
    constructor(firstName, lastName, rollNo, course) {
        super(firstName, lastName);
        this.rollNo = rollNo;
        this.course = course;
    }
}

const protik = new Student("Protik", "Sarkar", 1, "Web Development");
console.log(protik.printDetail());
console.log(protik.getName());