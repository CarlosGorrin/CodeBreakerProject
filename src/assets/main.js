let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
}

//implement new functions here

setHiddenFields(min, max) {
		var min = 0000;
		var max = 9999;
		var x = Math.floor(Math.random() * (max - min)) + min;
		// document.getElementById("dni").value = x;

	};