// Object Properties And Values

// object

const bottle={
    brand :"Apple",
    price : 45,
    color : "White",
    isClean : false
}

console.log(bottle)
console.log(bottle.brand)
console.log(bottle['brand'])

// new properties add in object 

bottle.size=2.5;    // bottle['size]=2.5;
console.log(bottle)

// another way to add

const size_new='size'
bottle[size_new]=3
console.log(bottle)


//  Keys, Values, Nested Object and Delete

const keys=Object.keys(bottle);
console.log(keys)
const values=Object.values(bottle);
console.log(values)

// Nested Object



