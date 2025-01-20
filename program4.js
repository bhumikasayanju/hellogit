class person{
    constructor(name,age){
    this.name=name
    this.age=age
}   
introduce(){
    console.log("hi my name is",this.name, "and i am",this.age,"years old" )
}
}
const p1=new person("bhumika",20)
p1.introduce();
