'use strict';
let eating = {
    eat: function() {
        return `Eating...`;
    }
};
let talking = {
    talk: function() {
        return `Talking...`;
    }
};
let walking = {
    walk: function() {
        return `Walking...`;
    }
};

let Human = function() {};

//Composition Features to Human....
// Object.assign({}, walking, eating, talking);

//Same as Composition we use Mixins Feature....
function mixin(target, ...sources){
    Object.assign(target.prototype, ...sources);
}

mixin(Human, eating,talking, walking);

const Raj = new Human();
console.log(Raj.walk());