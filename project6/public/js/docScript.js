
document.addEventListener('DOMContentLoaded', submitButton);
function submitButton(){
	var editBtn = document.getElementsByClassName('edit-btn');
	for(var i = 0; i < editBtn.length; i++){
		var id = editBtn[i].id;
		var myUrl =  "http://ec2-52-79-180-96.ap-northeast-2.compute.amazonaws.com:31338/edit?q=" + id;
		(function(addThis){
			editBtn[i].addEventListener('click', function(event){
				window.open(addThis, "_self");

			});
		})(myUrl);
	}

	//Create Event Listener for the delete buttons
	var delBtn = document.getElementsByClassName('delete-btn');
	for (var i = 0; i < delBtn.length; i++){
		var id = delBtn[i].id;
		var myUrl = "http://ec2-52-79-180-96.ap-northeast-2.compute.amazonaws.com:31338/delete?q=" + id;
		(function(deleteThis, key){
			delBtn[i].addEventListener('click', function(event){
				alert(deleteThis);
				var req = new XMLHttpRequest();
				req.open('GET', deleteThis, true);
				req.send(null);
				req.addEventListener('load', function(){
					if(req.status >= 200 && req.status < 400){
						deleteRow(id);
					}
				})
			})
		})(myUrl, id);
	}

	//Create event listner for the submit button of the new exercise button
	document.getElementById('submitBtn').addEventListener('click', function(event){
		var req = new XMLHttpRequest();
		var payload = {"name":null,"reps":null,"weight":null,"date":null,"lbs":null};
		//Get all the values from the input fields
		var name = document.getElementById('name').value;
		var reps = document.getElementById('reps').value;
		var weight = document.getElementById('weight').value;
		var date = document.getElementById('date').value;
		var lbs = document.getElementById('lbs').value;
		//Create a JSON object for the input fields
		payload["name"] = name;
		payload["reps"] = reps;
		payload["weight"] = weight;
		payload["date"] = date;
		payload["lbs"] = lbs;

		req.open('POST', 'http://ec2-52-79-180-96.ap-northeast-2.compute.amazonaws.com:31338/new', true);
		req.setRequestHeader('Content-Type', 'application/json');
		req.addEventListener('load', function(){
			if(req.status >= 200 && req.status < 400){
				var response = JSON.parse(req.responseText)
				addNewRow(response[0]);
			}else{
				console.log("Error in request: " + req.statusText);
			}
		})
		req.send(JSON.stringify(payload));
		event.preventDefault();
	});
}

function initializeButtons(){
	alert("Initializing buttons");
	var editBtns = document.querySelectorAll(".edit-btn");
	editBtns.forEach(element => {
		ite

	})
	editBtns.addEventListener('click', function(event){
			var myUrl =  "http://ec2-52-79-180-96.ap-northeast-2.compute.amazonaws.com:31338/edit?q=" + button.id;
			window.open(myUrl, "_self");

	});
}

function addNewRow(newRow){
	var table = document.querySelector('table');
	var keys = [newRow.id, newRow.name, newRow.reps, newRow.weight, newRow.date.slice(0,10), newRow.lbs];
	var row = table.insertRow(-1);
	//New Row will have 8 fields, 6 for attributes, 2 buttons
	for(var i = 0; i < 8; i++){
		if(i === 0){
			row.insertCell(i);
			row.cells[i].style.display = "none";
			row.cells[i].innerHTML = newRow.id;
		}else if(i === 6){
			var btn = document.createElement('button');
			btn.classList.add('edit-btn');
			btn.id = newRow.id;
			btn.innerHTML = "Edit";
			row.insertCell(i);
			row.cells[i].style.border = "1px solid black";
			row.cells[i].appendChild(btn);
		}else if(i === 7){
			var btn = document.createElement('button');
			btn.classList.add('delete-btn');
			btn.id = newRow.id;
			btn.innerHTML = "Delete";
			row.insertCell(i);
			row.cells[i].style.border = "1px solid black";
			row.cells[i].appendChild(btn);
		}else{
			row.insertCell(i);
			row.cells[i].style.border = "1px solid black";
			row.cells[i].innerHTML = keys[i];
			if(i === 5){
				if(newRow.id === "1"){
					row.cells[i].innerHTML = "lbs";
				}else{
					row.cells[i].innerHTML = "kgs";
				}
			}
		}

	}
	return;
}

function deleteRow(priKey){
	var rowToDelete = "row-" + priKey;
	var row = document.getElementById(rowToDelete);
	row.style.display = "none";

}

