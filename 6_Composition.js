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

//JS Composition.............
const Human = Object.assign({}, eating, talking, walking);
console.log(Human.eat());

//JS Composition.............
const Robot = Object.assign({}, talking, walking);
console.log(Robot.walk());
