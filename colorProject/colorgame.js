
var colors = generateRandomColors(6);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickRandomColor();;
var displayMessage = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var banner = document.getElementById("banner");
var resetBtn = document.getElementById("reset");

//Display the color that the player needs to guess
colorDisplay.textContent = pickedColor;


//Create event listener for the reset button
resetBtn.addEventListener("click", function(){
	//create a new color array
	colors = generateRandomColors(6);
	//Get new picked Color
	pickedColor = pickRandomColor();
	//Update colorDisplay
	colorDisplay.textContent = pickedColor;
	//Update backgroundColor for all the squares
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#232323";
	this.innerHTML = "New Colors";
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


