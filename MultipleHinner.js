function GrandFather(property){
      this.property=property;
}
function Father(property,house){
     GrandFather.call(this,property)
      this.house=house;
}
function chid(property,house, income){
     Father.call(this,property,house)
    this.income=income;
}

function extend(child,parent){
        chid.prototype=Object.create(parent.prototype);
        chid.prototype.constructor=chid;
}
extend(Father,GrandFather);
extend(chid,Father);
GrandFather.prototype.details=function(){
  console.log(`Grandfather Property is:${this.property}`);
  
}

Father.prototype.details=function(){
     console.log(`father property is : ${this.property}houseName:${this.house}`);
     
}
chid.prototype.details=function(){
  console.log(`Now child property is ${this.property},houseName:${this.house},${this.income}`);
  
}

const c1=new chid("200squreFeetPlote","Bila",1000000000);
c1.details()


