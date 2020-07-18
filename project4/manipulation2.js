
/* function to create a table
*/
function createTable(){
	//Create a table element
	var table = document.createElement("table");
	//Size the table to take 50% of the browser 
	table.style.width = "50%";
	table.style.border = "1px solid black";

	//Create thead 
	//Source: https://developer.mozilla.org/en-US/docs/Web/API/HTMLTableElement/createTHead
	var thead = table.createTHead();
	thead.style.border = "1px solid black";

	//Create tbody
	var tbody = table.createTBody();

	for(var i = 0; i < 4; i++){
		var row;
		var cell;
		var text;
		if(i === 0){
			row = thead.insertRow();
		}else{
			row = tbody.insertRow();
		}
		for(var j = 0; j < 4; j++){
			if(i === 0){
				text = document.createTextNode(`Header${j + 1}`);
				cell = row.insertCell();
				cell.style.border = "1px solid black";
				cell.appendChild(text);
			}else{
				text = document.createTextNode(`${i},${j+1}`)
				cell = row.insertCell();
				cell.setAttribute("id", `${i}-${j}`);
				cell.style.border = "1px solid black";
				cell.appendChild(text);
			}
		}
	}
	//append the table to the body
	document.body.appendChild(table);
}

function createButtons(){
	var main_div = document.createElement("DIV");
	var div_left = document.createElement("DIV");
	var div_center = document.createElement("DIV");
	var div_right = document.createElement("DIV");
	var div_mark = document.createElement("DIV");

	var btn_left = document.createElement("BUTTON");
	var btn_up = document.createElement("BUTTON");
	var btn_down = document.createElement("BUTTON");
	var btn_right = document.createElement("BUTTON");
	var btn_mark = document.createElement("BUTTON");

	btn_left.setAttribute("id", "btn-left");
	btn_up.setAttribute("id", "btn-up");
	btn_down.setAttribute("id", "btn-down");
	btn_right.setAttribute("id", "btn-right");
	btn_mark.setAttribute("id", "btn-mark");

	btn_left.innerHTML = 'LEFT';
	btn_right.innerHTML = 'RIGHT';
	btn_up.innerHTML = 'UP';
	btn_down.innerHTML = 'DOWN';
	btn_mark.innerHTML = 'MARK';

	div_left.appendChild(btn_left);
	div_center.appendChild(btn_up);
	div_center.appendChild(btn_down);
	div_right.appendChild(btn_right);
	div_mark.appendChild(btn_mark);

	main_div.appendChild(div_left);
	main_div.appendChild(div_center);
	main_div.appendChild(div_right);
	main_div.appendChild(div_mark);

	main_div.style.display = 'flex';
	main_div.style.marginTop = '25px';
	div_center.style.display = 'flex';
	div_center.style.flexDirection = 'column';
	main_div.style.width = "50%"
	main_div.style.position = 'absolute';

	div_left.style.display = 'flex';
	div_left.style.flexDirection = 'column-reverse';
	div_right.style.display = 'flex';
	div_right.style.flexDirection = 'column-reverse';


	btn_mark.style.height = '75%';
	div_mark.style.marginLeft = '50px';
	div_mark.style.marginTop = '1rem'
	document.body.appendChild(main_div);
}

function addListeners(){
	//Source: https://stackoverflow.com/questions/4998953/get-cell-location
	var table = document.getElementsByTagName("table")[0];
	var rows = table.getElementsByTagName("tr");

	//var currentCell = rows[1].getElementsByTagName("td")[0];
	//currentCell.style.border = "4px solid red";
	for(var i = 1; i < rows.length; i++){
		var cells = rows[i].getElementsByTagName("td");
		console.log(`cell length is ${cells.length} for row ${i}`);
	}

	var current_Row = 2;
	var current_Col = 2;

	var currentCell = rows[current_Row].getElementsByTagName("td")[current_Col];
	currentCell.setAttribute("style", "border: 4px solid red");

	var btn_left = document.getElementById("btn-left");
	var btn_up = document.getElementById("btn-up");
	var btn_down = document.getElementById("btn-down");
	var btn_right = document.getElementById("btn-right");
	var btn_mark = document.getElementById("btn-mark");

	btn_mark.addEventListener("click", () => {
		currentCell.setAttribute("class", "marked");
		currentCell.style.border = '4px solid red';
		currentCell.style.backgroundColor = 'yellow';
	//	currentCell.setAttribute("style", "border: 4px solid red");
//		currentCell.setAttribute("style", "background-color: yellow");
	});

	btn_left.addEventListener("click", () => {
		if(current_Col > 0){
			//Update current_Col
			current_Col--;

			//Update the current Cell and move to the next cell
			if(isMarked(currentCell)){
				currentCell = moveMarked(currentCell, current_Row, current_Col);
			}else{
				currentCell = moveUnmarked(currentCell, current_Row, current_Col);
			}
		}
	});

	btn_right.addEventListener("click", () => {
		if(current_Col < 3){
			//Move current column to the right one space
			current_Col++;
			//Update the current Cell and move to the next cell
			if(isMarked(currentCell)){
				currentCell = moveMarked(currentCell, current_Row, current_Col);
			}else{
				currentCell = moveUnmarked(currentCell, current_Row, current_Col);
			}
		}
	});

	btn_up.addEventListener("click", () => {
		if(current_Row > 1){
			//Move current row up one space
			current_Row--;
			//Update the current Cell and move to the next cell
			if(isMarked(currentCell)){
				currentCell = moveMarked(currentCell, current_Row, current_Col);
			}else{
				currentCell = moveUnmarked(currentCell, current_Row, current_Col);
			}
		}
	});

	btn_down.addEventListener("click", () => {
		if(current_Row < 3){
			//Move current row up one space
			current_Row++;
			//Update the current Cell and move to the next cell
			if(isMarked(currentCell)){
				currentCell = moveMarked(currentCell, current_Row, current_Col);
			}else{
				currentCell = moveUnmarked(currentCell, current_Row, current_Col);
			}
		}
	});
}
/************************************************************************************
 * isMarked(cell)          							    *
 * Helper function to see if a cell is marked                                       *
 * Arguments: cell								    *
 * returns: true/false								    *
 ***********************************************************************************/
function isMarked(cell){
	if(cell.getAttribute("class") === "marked"){
		return true;
	}else{
		return false;
	}
}

/************************************************************************************
 * moveMarked(cell, x_coord, y_coor)   				    		    *
 * Helper function to move                                                          *
 * Arguments: cell, x coordinate, y coordinate       		    		    *
 * returns: void   								    *
 ***********************************************************************************/
function moveMarked(currentCell, x_coord, y_coord){
	//restore border of the current Cell
	currentCell.style.border = '1px solid black';
	//make it's backgroudn color yellow
	currentCell.style.backgroundColor = 'yellow';

	//Get the table and rows
	//Source: https://stackoverflow.com/questions/4998953/get-cell-location
	var table = document.getElementsByTagName("table")[0];
	var rows = table.getElementsByTagName("tr");
	
	//Get the current row
	currentCell = rows[x_coord].getElementsByTagName("td")[y_coord];

	//Update the current cells border
	currentCell.style.border = '4px solid red';
	//Check to see if it is marked
	if(isMarked(currentCell)){
		currentCell.style.backgroundColor = 'yellow';
	}
	return currentCell;
}

/************************************************************************************
 * moveUnmarked(cell, x_coord, y_coor)   				            *
 * Helper function to move                                                          *
 * Arguments: cell, x coordinate, y coordinate       		    		    *
 * returns: updated cell   							    *
 ***********************************************************************************/
function moveUnmarked(currentCell, x_coord, y_coord){
	//restore border of the current Cell
	currentCell.style.border = '1px solid black';
	//restore the background color to default
	currentCell.style.backgroundColor = 'white';

	//Get the table and rows
	//Source: https://stackoverflow.com/questions/4998953/get-cell-location
	var table = document.getElementsByTagName("table")[0];
	var rows = table.getElementsByTagName("tr");
	
	//Get the current row
	currentCell = rows[x_coord].getElementsByTagName("td")[y_coord];

	//Update the current cells border
	currentCell.style.border = '4px solid red';
	//Check to see if it is marked
	if(isMarked(currentCell)){
		currentCell.style.backgroundColor = 'yellow';
	}
	return currentCell;
}


createTable();
createButtons();
addListeners();

