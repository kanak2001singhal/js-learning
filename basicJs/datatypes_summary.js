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

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive) , Heap(non-primitive)

//example 1 - stack

let firstValue = "kanak"
 let secondValue = firstValue

 secondValue = "kanak singhal"
 console.log(firstValue);
 console.log(secondValue);

 //so here we have taken 2 variable so here the second variable will take the copy of first value so when we change thebsecond value the first value will not chnage as it is assigned in stack memory


 //exmaple 2 - heap 

 let userOne = {
    email : "user@google.com",
    upi : "user@upi"

 }

 let userTwo = userOne 

 userTwo.email = "kanak@gmail.com"
 console.log(userOne);
  console.log(userTwo);

  // so here we use an object so it will assign in heap memory so when we take userTwo it will take the refrence from user one like its original value so when we will chnage to userTwo email or anything the userOne will also chnage 
 

 
 

