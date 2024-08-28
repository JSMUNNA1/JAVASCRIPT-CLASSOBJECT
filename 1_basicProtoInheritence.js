'use strict';

function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Mobile(mmodel,mcolor,mprice) {
    this.model = mmodel;
    this.color = mcolor;
    this.price = mprice;
}
Mobile.prototype.details = function() {
    return `${this.model} ${this.color} ${this.price}`;
};
// const m = new Mobile('Galaxy','Sliver', 50000);
// console.log(m.details());

function Nokia(mmodel,mcolor,mprice,mcategory) {
    Mobile.call(this, mmodel,mcolor,mprice);
    this.category = mcategory;
}


extend(Nokia, Mobile);


// Polymorphism: poly means many and morphism means transforming one form into another. Polymorphism means the same function with different signatures is called many times. In real life, for example, a boy at the same time may be a student, a class monitor, etc. So a boy can perform different operations at the same time. This is called polymorphism. 

// Features of Polymorphism:
// Programmers can use the same method name repeatedly.
// Polymorphism has the effect of reducing the number of functionalities that can be paired together.

Nokia.prototype.details = function() {
    return (`${this.model} model has ${this.color} color`)
}

const c = new Nokia('Galaxy','Sliver', 50000,'9351');
console.log(c.details());
