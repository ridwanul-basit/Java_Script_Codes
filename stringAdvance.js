// Reverse String

const sentence="I a web Developer";
let reverse="";

for ( const letter of sentence){
    reverse= letter + reverse;
}
console.log(reverse);

// another way of reverse string

rev=""
for ( let i=0; i<sentence.length;i++){
    const letter=sentence[i];
    rev= letter+ rev;
}
console.log(rev);


// another way of reverse string

sentence2= "I Love my motherland"
const reversed= sentence2.split("").reverse().join("");
console.log(reversed);

// 