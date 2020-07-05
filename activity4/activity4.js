function buildList(list){
	var result = [];
	for(var i = 0; i < list.length; i++){
		var item = 'item' + list[i];
		result.push(function(x){
		//Need to create a new closure so that the value of i that we want gets saved
			return function(){
				console.log(item + ' ' + list[x])
			}
		//Immediately call the functin(x) where x = i
		}(i));
	};
	return result;
}


function testList(){
	var fnlist = buildList([1,2,3]);
	//using j only to help prevent confuciont - could use i
	
	for(var j = 0; j < fnlist.length; j++){
		fnlist[j]();
	}
}

testList();
