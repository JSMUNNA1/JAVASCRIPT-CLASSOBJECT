class Person {
    constructor(name) {
        this.name = name;
     //   this.sayName=this.sayName.bind(this)        //2 nd way unsing binding
    }
    sayName=()=> {         //3 way suing arrow function
        console.log(this.name);
    }
}

const p1 = new Person('Raj');
// 1. by passing wrapper function.
// setTimeout(() => { p1.sayName() }, 1000);

// 2. by binding the method to object
// setTimeout(p1.sayName.bind(p1), 1000);
setTimeout(p1.sayName, 1000);



