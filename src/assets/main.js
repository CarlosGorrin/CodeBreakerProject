let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
	let input = document.getElementById('user-guess');
	if(answer.value == '' || attempt.value == '') {
		setHiddenFields();
	}
}

function setHiddenFields() {
	aswer.value = Math.floor(Math.random() * 10000).toString();
	while(aswer.value.length < 4) {
		answer.value = "0" + answer.value;
	}
	attempt.value = "0";
}