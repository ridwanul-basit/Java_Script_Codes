// basic string

const district=`B-Baria`;
console.log(district);

// string is immutable ( string can not be changed / delete / update)

console.log(district.toLocaleLowerCase());     // it mill make all the letter into lower case 
console.log(district.toLocaleUpperCase());     // it mill make all the letter into upper case

// use of trip    ( it basically removes space from start and end of a word)

let drink="   water";
let liquid="water   ";

console.log(drink==liquid);
console.log(drink.trim()==liquid.trim());

// 

console.log(district.slice(2,5));
console.log(district.split(""));
console.log(district.split("-"));    // output [ 'B', 'Baria' ]


// concat

const first="Ridwanul";
const middle=" ";
const last="Basit";

console.log(first+middle+last);

// another way

console.log(first.concat(middle).concat(last));




