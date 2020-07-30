var numOfColors = 6;
var colors = generateRandomColors(numOfColors);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();;
var displayMessage = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var banner = document.getElementById("banner");
var resetBtn = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

//Display the color that the player needs to guess
colorDisplay.textContent = pickedColor;


//Create listeners for the easy and hard buttons
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	//set numOfColors to 3
	numOfColors = 3;
	//generate a new color array of 3 colors
	colors = generateRandomColors(numOfColors);
	//pick a new color
	pickedColor = pickRandomColor();
	colorDisplay.textContent = pickedColor;
	//Hide the bottom three squares
	for(var i = 0; i < squares.length; i++){
		//if there is a color in the array at index i
		//set the color of the square
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}

	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	if(numOfColors !== 6){
		//set numOfColors to 6
		numOfColors = 6;
		//Create a new colors array
		colors = generateRandomColors(numOfColors);
		//pick a new color
		pickedColor = pickRandomColor();
		colorDisplay.textContent = pickedColor;
		//set the squares
		for(var i = 0; i < squares.length; i++){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}
	}
});
//Create event listener for the reset button
resetBtn.addEventListener("click", function(){
	//create a new color array
	colors = generateRandomColors(numOfColors);
	//Get new picked Color
	pickedColor = pickRandomColor();
	//Update colorDisplay
	colorDisplay.textContent = pickedColor;
	//Update backgroundColor for all the squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "steelblue";
	this.innerHTML = "New Colors";
	displayMessage.textContent = "";
});

for(var i = 0; i < squares.length; i++){
	//Add iniital color to squares
	squares[i].style.backgroundColor = colors[i];
	//Add click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			alert("correct");
			displayMessage.textContent = "Correct!";
			changeColors(clickedColor);
			console.log("clickedColor: " + clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetBtn.textContent = "Play Again?";

		}else{
			alert("wrong");
			displayMessage.textContent = "Try Again!";
			this.style.backgroundColor = "#232323";
		}
	});

}
function generateRandomColors(num){
	//Function will return an array of length num
	//Array will num numbers of random colors
	var array = [];
	for(var i = 0; i < num; i++){
		array[i] = randomColor();
	}
	return array;
}

function randomColor(){
	//Function creates a random rgb color rgb(0-255, 0-255, 0-255)
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue +")";
}

function changeColors(color){
	//Function will change all the colors of boxes to same color if the game is won
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickRandomColor(){
	//This will pick a random color from the colors Array
	var randNum = Math.floor(Math.random() * colors.length);
	return colors[randNum];
}


