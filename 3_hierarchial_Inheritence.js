'use strict';

function extend(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.constructor = child;
}

function Mobile() {
    this.mobile = 'Super';
}
Mobile.prototype.show = function() {
    return `${this.mobile} - Inside of Mobile super class Show Function...`;
};

function Samsung() {
    Mobile.call(this);
    this.category = 'Samsung';
}
extend(Samsung, Mobile);
Samsung.prototype.show = function() {
    return `${this.category} - Inside of Samsung sub class Show Function...`;
};

function Nokia() {
    Mobile.call(this);
    this.category = 'Nokia';
}
extend(Nokia, Mobile);
Nokia.prototype.show = function() {
    return `${this.category} - Inside of Nokia Sub class Show Function...`;
};


const S = new Samsung();
const N = new Nokia();

//Method Overriding.................
console.log(S.show());
console.log(N.show());

// console.log(S);
// console.log(N);










