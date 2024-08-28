class Person {
    #age = 0;
    name = '';
    constructor(name) {
        this.name = name;
    }
    birthday() {
        this.#age++;
    }
    displayAge() {
        return `Current Age: ${this.#age}`;
    }
    get sayName() {
        return this.name;
    }
    set setName(name) {
        this.name = name;
    }
}

const p1 = new Person('Raj');
console.log('Before :: ', p1.sayName, p1.displayAge());

p1.birthday();
p1.setName = 'Ravi';

console.log('After :: ', p1.displayAge())
console.log(p1.sayName);

p1.age = 5;
// p1.setName('Ravi');
console.log(p1.age, p1.sayName);


