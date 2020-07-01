let obj1 = "francis";
let obj2 = "francis";


let object1 = {
	"name": "francis",
	"number": 2,
	"type": "male"
};

let object2 = {
	"name": "francis",
	"number": 2,
	"type": "male"
};

let object3 = {
	"name": "francis",
	"object": object1,
	"array": [1, 2, 3, 4, 5]
}
let object4 = {
	"name": "francis",
	"object": object2,
	"array": [1, 2, 3, 4, 5]
}
function deepEqual(obj1, obj2){
	//Variable to hold return value of the function
	var retVar = true;

	//Check to see of properties are equal to each other
	if(typeof obj1 !== 'object' && typeof obj2 !== 'object'){
		if(obj1 !== obj2){
			getVar = false;
			return getVar;
		}
	//Check to see of there are nulls
	}else if(obj1 === null || obj2 === null){
		retVar = false;
		return retVar;

	//Check to see if obj1 and obj2 are of type 'object'
	}else if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
		retVar = false;
		return retVar;

	//If we make it here, then obj1 and obj2 are objects
	}else{
		//Check to see if lengths are equal
		if(Object.keys(obj1).length !== Object.keys(obj2).length){
			retVar = false;
			return retVar;
		}
		//Iterate through objects, call deepEqual recursively
		for(var property in obj1){
			//If property does not exit in obj2 return false
			if(!obj2.hasOwnProperty(property)){ 
				retVar = false;
				return retVar;
			}

			//Check to see if properties are equal, if not return false
			if(!deepEqual(obj1[property], obj2[property])){ 
				retVar = false;
				return retVar;
			}
		}
	}
	//If we made it here everything is equal, retVar is still true
	return retVar;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(object1, object2));
console.log(deepEqual(object3, object4));
