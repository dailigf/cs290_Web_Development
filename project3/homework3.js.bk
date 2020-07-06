 //You are not permitted to change this in any way
function Student(name, major, yearInSchool, club) {
	this.name = name; // string, (e.g. "Jim", "Pam", "Michael")
	this.major = major; // string, (e.g. "Computer Science", "Art", "Business")
	this.yearInSchool = yearInSchool; // int, (e.g. 1, 2, 3, 4)
	this.club = club; // string, (e.g. "Improv", "Art")
}

var students = [
  new Student("Pam", "Art", 2, "Art"),
  new Student("Michael", "Business", 4, "Improv"),
  new Student("Dwight", "Horticulture", 1, "Karate"),
  new Student("Jim", "Sports Science", 2, "Guitar"),
  new Student("Angela", "Accounting", 4, "Cat"),
  new Student("Toby", "Human Resources", 3, "Photography")
];

/* This function sorts arrays using an arbitrary comparator. You pass it a comparator 
 * and an array of objects appropriate for that comparator and it will return a new array 
 * which is sorted with the largest object in index 0 and the smallest in the last index
 * Bubble Sort algorithm was used
 * Source:  https://www.youtube.com/watch?v=Jdtq5uKz-w4*/
function sortArr(comparator, array) {
	// your code here
	var arrLength = array.length;
	for(var i = 0; i < arrLength; i++){
		for(var j = 0; j < arrLength - i - 1; j++){
			if(comparator(array[j], array[j+1])){
				let tmp = array[j];
				array[j] = array[j+1];
				array[j+1] = tmp;
			}
		}
	}
}
	
/* A comparator takes two arguments and uses some algorithm to compare them. If the first 
Argument is larger or greater than the 2nd it returns true, otherwise it returns false.
Here is an example that works on integers */
function exComparator( int1, int2){
	if(int1 > int2){
		return true;
	}else{
		return false;
	}
}
	
/* For all comparators if students are 'tied' according to the comparison rules then the order of 
those 'tied' students is not specified and either can come first*/

/* This compares two students based on their year in school. Sort in descending order.*/
function yearComparator(student1, student2) {
	// your code here
	if(student1.yearInSchool <= student2.yearInSchool){
		return true;
	}else{ 
		return false;
	}
}
	
/* This compares two students based on their major. It should be case insensitive and 
makes which are alphabetically earlier in the alphabet are "greater" than ones that 
come later (from A-Z).*/
function majorComparator(student1, student2) {
	// your code here
	if(student1.major.toLowerCase() <= student2.major.toLowerCase()){
		return true;
	}else{
		return false;
	}
}
	
/* This compares two students based on the club they're in. The ordering from "greatest" 
to "least" is as follows: improv, cat, art, guitar, (types not otherwise listed). 
It should be case insensitive. If two clubs are of equal type then the student who
has the higher year in school should be "greater."*/
function clubComparator(student1, student2) {
	//Create a legend that can be referenced to a numerical value
	var legend = {
		"guitar": 4,
		"art": 3,
		"cat": 2,
		"improv": 1
	};
	let student1Val = 0;
	let student2Val = 0;
	if(legend.hasOwnProperty(student1.club.toLowerCase())){
		student1Val = legend[student1.club.toLowerCase()];

	}
	if(legend.hasOwnProperty(student2.club.toLowerCase())){
		student2Val = legend[student2.club.toLowerCase()];
	}

	// your code here
	if(student1Val === student2Val){
		if(student1.yearInSchool >= student2.yearInSchool){
			return true;
		}else{
			return false;
		}
	}else if(student1Val > student2Val){
		return true;
	}else{
		return false;
	}
}

console.log(students);
sortArr(clubComparator, students);
console.log(students);
