let button = document.getElementById("button");
button.addEventListener('click',()=>{
	let numer = document.querySelector("input.numer").value;
	let result = document.getElementById("resultado");
	let result1 = document.getElementById("result1");
	let select = document.getElementById("operação");
	let two = 1;
	result.innerHTML = '';
	if (numer == 0) {
		option.innerHTML = '';
	}
	else{
		for (two;two<=10;two++) {
		let tot = numer*two;
		option = document.createElement("option");
		option.text = `${numer}x ${two} = ${tot}`;
		result.appendChild(option);
	    option.style.margin = "15px";
	}
	}
});


