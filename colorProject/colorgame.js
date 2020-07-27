var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 255)",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
console.log("pickedColor: " + pickedColor);

for(var i = 0; i < squares.length; i++){
	//Add iniital color to squares
	squares[i].style.backgroundColor = colors[i];
	//Add click listeners
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;

		if(clickedColor === pickedColor){
			alert("correct");
			console.log("clickedColor: " + clickedColor);
		}else{
			alert("wrong");
			console.log("clickedColor: " + clickedColor);
		}
	});

}

var colorDisplay = document.getElementById("colorDisplay");
colorDisplay.textContent = pickedColor;

