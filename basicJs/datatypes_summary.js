//javascript is dynamically typed language 

//  Primitive - call by value
//7 types : string , number , boolean, null, undefined, symbol(unique), bigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null

let userEmail;

const id = Symbol('123')
const anotherId =  Symbol('123')

console.log(id === anotherId);

const bigNumber = 632648727859388n

//non-primitive - call by reference

//array,objects,functions
const heros = ['shaktiman', "naagaraj", "doga"]
let myobj = {
    name : "kanak",
    age: 24,
}

const myFuction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);
console.log(typeof myFuction);
