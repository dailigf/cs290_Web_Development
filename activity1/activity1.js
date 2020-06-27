/******************************************************************************************************************
 * Name: Francis C. Dailig                                                                                        *
 * Title: Activity 1                                                                                              *
 * Date: 9 July 2020                                                                                              *
 * ***************************************************************************************************************/

//Part 1: call a function before it is declared
var numArray = [5, 25, -4, 7, 21];

//Call function before it is decared
console.log(sum(numArray));

//sum function declaration
function sum(array){
	total = 0;
	for(var i = 0; i < array.length; i++){
		total += array[i];
	}
	return total;
}

//Part 2: a) write a function that is assigned to a variable; b) call function before it is assigned

//Call function before it is assigned, this will not work
console.log(min(numArray));

var min = function(array){
	temp = array[0];
	for(var i = 1; i < array.length; i++){
		if(array[i] < temp){
			temp = array[i];
		}
	}
	return temp;
}

//This will work
console.log("The min is: " + min(numArray));

