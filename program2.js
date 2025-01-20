function calculator(a,b,operator){
    switch(operator){
        case"+":
        console.log("sum=",a+b)
        break;

        case"-":
        console.log("diff=",a-b)
        break;

        case"*":
        console.log("mul=",a*b)
        break;

        case"/":
        console.log("div=",a/b)
        break;
        default:
            console.log("invalid input")
    }
}
   calculator(1,2,"+")
   calculator(2,3,"-")
   calculator(2,3,"*")
   calculator(6,3,"/")

















    