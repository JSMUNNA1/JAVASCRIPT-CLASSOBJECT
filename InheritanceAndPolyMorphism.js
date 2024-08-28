function Human(name,age){
       this.name=name;
       this.age=age
}

function Engineer(name,age,category){
       Human.call(this,name,age);
       this.category=category;
    
}

function extend(child,parant){
       child.prototype=Object.create(parant.prototype);
       child.prototype.constructor=child
}

extend(Engineer,Human);

Human.prototype.details=function(){
     
  
      console.log(this.name,this.age,this.category)
      
}
Engineer.prototype.details=function(){
    console.log("Engineering",this.name,this.age,this.category);
    
}
const machEng=new Engineer("Raju",23,"mechanical")
machEng.details();


