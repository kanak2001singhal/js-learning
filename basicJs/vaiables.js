const accountId = 1422
let accountEmail = "kanak@gmail.com"
var accountPass = "54@kanak"
accountCity = "pune"
let accountState ; // undefined

/* do not prefer to use Var because of issue in block scope and functional scope */

//accountId = 89 // not allowed

/* allowed
 accountEmail = "kanak32@gmail.com"
 accountPass = "5499@kanak"
accountCity = "jaipur"
*/
console.log([accountId,accountEmail,accountPass , accountCity])