// basic conditional statement

let a=100;
let b=50

if(a>b){
    console.log(a+b);
}
else{
    console.log(b-a);
}


// nested condition

if(a>b){
    if(a==b){
        console.log("Equal");
    }
    else{
        console.log(a-b);
    }
}
else{
    console.log(a+b);
}

// using else if

if(a==b){
    
        console.log("Equal");
}
else if(a>b){
    console.log("a is greater");
}
    
else{
    console.log("b is greater");
}