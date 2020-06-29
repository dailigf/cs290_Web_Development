let obj1 = "francis";
let obj2 = "name";


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
	var retVar = true;
	console.log("obj1: " + JSON.stringify(obj1));
	console.log("obj2: " + JSON.stringify(obj2));
	//If objects or properties are equal, return true
	if(obj1 === obj2){
		console.log("properties are equal")
		return true;
	}else if(obj1 === null || obj2 === null){
		console.log("One of the objects are null")
		retVar = false;
		return retVar;
	}else if(typeof obj1 !== 'object' || typeof obj2 !== 'object'){
		console.log("one is not an object")
		retVar = false;
		return retVar;
	}else{
		//Check to see if lengths are equal
		if(Object.keys(obj1).length !== Object.keys(obj2).length){
			console.log("different lengths");
			retVar = false;
			return retVar;
		}
		for(var property in obj1){
			//If property does not exit in obj2 return false
			if(!obj2.hasOwnProperty(property)){ 
				console.log("property does not exit in obj2");
				retVar = false;
				return retVar;
			}

			//Check to see if properties are equal, if not return false
			if(!deepEqual(obj1[property], obj2[property])){ 
				console.log("property1 is not equal to property 2");
				retVar = false;
				return retVar;
			}
		}
	}
	return retVar;
}

console.log(deepEqual(obj1, obj2));
console.log(deepEqual(object1, object2));
console.log(deepEqual(object3, object4));
