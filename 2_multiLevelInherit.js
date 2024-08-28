'use strict';

function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function GrandParent() {
    this.gp = 'Grand Parent';
}
GrandParent.prototype.show = function(){
    return `Inside Grand Parent class Show function - ${this.gp}`;
}

function Parent() {
    GrandParent.call(this);
    this.p = 'Parent';
}
extend(Parent, GrandParent);

Parent.prototype.show = function(){
    return `Inside Parent class Show function - ${this.p}
Grand Parent class Variable - ${this.gp}`;

}

function Child() {
    Parent.call(this);
    this.c = 'Child';
}
extend(Child, Parent);

Child.prototype.show = function(){
    return `Inside Child class Show function - ${this.c}
Parent Class variable - ${this.p}
Grand Parent Class variable - ${this.gp}`;

}

const gp = new GrandParent();
console.log(gp);
console.log(gp.show());      //Method overriding..........

const p = new Parent();
console.log(p);
console.log(p.show());      //Method overriding..........

const c = new Child();
console.log(c);
console.log(c.show());      //Method overriding..........
