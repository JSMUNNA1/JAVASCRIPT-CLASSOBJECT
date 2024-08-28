class Parent {
  constructor(name) {
      this.name = name;
      console.log("munna");
      
  }
}

class Child extends Parent {
    constructor(name){
         
      console.log('sunna');
      super(name)
      
    }
}

console.log(new Child('default name'));
