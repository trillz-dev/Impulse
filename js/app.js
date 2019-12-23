const name = 'steve';
const age = 13;
const rating = 4.5;
const booleann = true;
const x = null;
const y = undefined


console.log (typeof name);

// concantenation
console.log ('my name is' + name + 'and i am ' + age + ' years old');

// template strings 
console.log(`my name is ${name} and i am ${age} years old`);

const todos = [
    {
        id = 1,
        text = 'learn javascript',
        isCompleted = false

    },
    {
        id = 2,
        text = 'model shoot',
        isCompleted = false
    },
    {
        id = 3,
        text = 'hustle time',
        isCompleted = true
    }
]

todos.forEach(function(todo) {
    console.log(todo.text)
});

todos.forEach( (todo) => {

});

const x = 10;

const color = x > 10 ? 'red' : 'blue';

console.log(color)


class Person {
    constructor (firstName, lastName, dob){
        this.firstName = firstName,
        this.lastName = lastName,
        this.dob = new Date(dob)
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    };

    getBithYear() {
        return this.dob.getFullYear();
    }

}




class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName,
        this.lastName = lastName,
        this.dob = new Date(dob)
    }

    getBirthYear() {
        return this.dob.getFullYear()
    };

    getFullName() {return `${this.firstName} ${this.lastName}`

    }

}
const person1 = new Person (mary, john, 3-4-1990)
console.log(person1.getFullName)



