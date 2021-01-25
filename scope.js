// bagaimana sebuah variabel dapat diakses dalam program

//  1. block scope : C , Java

// 2. function scope : javascript

// Glbal scope / window scope
// "use strict";
var a = 1;

function tes() {
	// name conflict
	var a = 2;

}
tes()
console.log(a);
