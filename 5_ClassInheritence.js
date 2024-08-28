'use strict';

//  Multi-Level Inheritence..............

class Grandparent {
    constructor(money){
        this.money = money;
        this.show = function() {
            return `GrandParent has ${this.money} Money.`;
        }
    }
    //  Static Method..........
    static display() {
        console.log(`Please Note All Money are in Dollor ($).`);
    }
    showRealMoney() {
        return `GrandParent has Total ${this.money} Money.`;
    }
}

class Parent extends Grandparent {
    constructor(money, pMoney){
        super(money);
        this.pMoney = pMoney;
        this.show = function() {
            return `Parent has ${this.pMoney} Money.`;
        }
    }
    showRealMoney() {
        return `Parent has Total ${this.pMoney + this.money} Money.`;
    }
}

class Child extends Parent {
    constructor(money, pMoney, cMoney){
        super(money, pMoney);
        this.cMoney = cMoney; 
        this.show = function() {
            return `Child has ${this.cMoney} Money.`;
        }
    }
    showRealMoney() {
        return `Child has Total ${this.money + this.pMoney + this.cMoney} Money.`;
    }
}

//Static Method Called....
Grandparent.display();

const Gp = new Grandparent(10000);
console.log(Gp);
console.log(Gp.showRealMoney());       
console.log(Gp.show());                // Method Overriding....

const P = new Parent(10000,1000);
console.log(P);
console.log(P.showRealMoney());
console.log(P.show());                // Method Overriding....


const C = new Child(10000,1000,100);
console.log(C);
console.log(C.showRealMoney());
console.log(C.show());                // Method Overriding....
