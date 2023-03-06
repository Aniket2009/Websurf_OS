function display(value) {
	document.getElementById("result").value += value;
}

function clearDisplay() {
	document.getElementById("result").value = "";
}

function calculate() {
	let result = document.getElementById("result").value;
	let answer = eval(result);
	document.getElementById("result").value = answer;
}
