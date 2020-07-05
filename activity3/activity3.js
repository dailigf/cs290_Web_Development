/********************************************************************************************************************
 * Name: Francis C. Dailig                                   							    *
 * Desc: Activity 3                                     							    *
 * Date: 6 July 2020                                     							    *
 * *****************************************************************************************************************/

myObj1 = {
	"name": "francis",
	"number": 2,
	"day": "Monday",
};

myObj2 = myObj1;

myObj3 = {
	"name": "francis",
	"number": 2,
};

let var1 = null;
let var2 = null;

console.log("comparing nulls: " + (var1 === var2));
function deepEquals(obj1, obj2){
	//Check to see if the objects are the same
	if(obj1 === obj2){ return true; }

	//Check to see if the number properties are the same
	//Source to length: https://stackoverflow.com/questions/126100/how-to-efficiently-count-the-number-of-keys-properties-of-an-object-in-javascrip
	let obj1Length = Object.keys(obj1).length;
	if(Object.obj1Length != Object.keys(obj2).length){ return false; }

	//Iterate through the entire length of the objects and compare

}

console.log(deepEquals(myObj1, myObj2));
console.log(deepEquals(myObj1, myObj3));
console.log(deepEquals(var1, var2));



