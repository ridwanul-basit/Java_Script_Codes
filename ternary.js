// basic ternary operator

// normally we use
let age=18;

if(age>=18){
    console.log("Voter");
}
else{
    console.log("Non Voter");
}

// using this in ternary  condition

age>=18 ? console.log("Voter") : console.log("Non Voter");

//

// another example

let price=500;
const isLeader=false;

if (isLeader===true){
    price=0;
}
else{
    price+=100;
}
console.log(price)

// in ternary

price=isLeader===true ? 0 : price+=100;

console.log(price)

// advance ternary

price=isLeader===true ? price>1000 ? price/2 : 0 : price+=100;