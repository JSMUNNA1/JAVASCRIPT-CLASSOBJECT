// ES6 OOPs concept... (Inheritance + Polymorphism)
class Mobile {
    constructor(model) {
        this.model = model;
        this.show = function(cls) {
            console.log(`${cls} class show function...`);
        }
    }
    comn(){
        console.log(`Mobile class prototype show function...`);
    }
    static display() {
        console.log('Static Method of Super class...')
    }
}
const mobile = new Mobile('Mobile');
Mobile.display();

class Samsung extends Mobile {
    constructor(model) {
        super(model);
        this.show = function(cls) {
            console.log(`${cls} class show function...`);
        }
    }
    comn(){
        console.log(`Samsung class prototype show function...`);
    }
}

const galaxy = new Samsung('Galaxy');
console.log(mobile, galaxy);
console.log(mobile.show('Parent'), galaxy.show('Child'));






class A {
	area(x, y) {
		console.log(x * y);
	}
}
class B extends A {
	area(a, b) {
		super.area(a, b);
		console.log('Class B')
	}
}

let ob = new B();
let output = ob.area(100, 200);
