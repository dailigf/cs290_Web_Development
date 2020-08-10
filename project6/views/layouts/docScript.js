
alert("insdie docScript.js");
var buttons = document.querySelectorAll("button");

buttons.forEach(button => {
	button.addEventListener('click', () =>{
		alert("clicked on button: " + button.id);
	});
});
