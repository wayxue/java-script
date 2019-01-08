function add(num1, num2) {
	var s1 = num1.toString();
	var s2 = num2.toString();
	var n1 = 0;
	var n2 = 0;
	try {
		n1 = s1.split(".")[1].length;
	} catch(e) {}
	try {
		n2 = s2.split(".")[1].length;
	} catch(e) {}
	var result;
	if (n1 == n2) {
		result = (Number(s1.replace(".", "")) + Number(s2.replace(".", ""))) / Math.pow(10, n1);
	} else if (n1 > n2) {
		var pow = n1 - n2;
		result = 
			(Number(s1.replace(".", "")) + Number(s2.replace(".", "")) * Math.pow(10, pow)) / Math.pow(10, n1);
	} else if (n1 < n2) {
		var pow = n2 - n1;
		result = 
			(Number(s1.replace(".", "")) * Math.pow(10, pow) + Number(s2.replace(".", ""))) / Math.pow(10, n2);
	}
	return result;
}

function subtract(num1, num2) {
	
	var s1 = num1.toString();
	var s2 = num2.toString();
	var n1 = 0;
	var n2 = 0;
	try {
		n1 = s1.split(".")[1].length;
	} catch(e) {}
	try {
		n2 = s2.split(".")[1].length;
	} catch(e) {}
	var result;
	if (n1 == n2) {
		result = (Number(s1.replace(".", "")) - Number(s2.replace(".", ""))) / Math.pow(10, n1);
	} else if (n1 > n2) {
		var pow = n1 - n2;
		result = 
			(Number(s1.replace(".", "")) - Number(s2.replace(".", "")) * Math.pow(10, pow)) / Math.pow(10, n1);
	} else if (n1 < n2) {
		var pow = n2 - n1;
		result = 
			(Number(s1.replace(".", "")) * Math.pow(10, pow) - Number(s2.replace(".", ""))) / Math.pow(10, n2);
	}
	return result;
}

function multiply(num1, num2) {
	
	var s1 = num1.toString();
	var s2 = num2.toString();
	var n = 0;
	try {
		n += s1.split(".")[1].length;
	} catch(e) {}
	try {
		n += s2.split(".")[1].length;
	} catch(e) {}
	return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, n);
}

function divide(num1, num2) {
	
	var s1 = num1.toString();
	var s2 = num2.toString();
	var n1 = 0;
	var n2 = 0;
	try {
		n1 = s1.split(".")[1].length;
	} catch(e) {}
	try {
		n2 = s2.split(".")[1].length;
	} catch(e) {}
	return Number(s1.replace(".", "")) / Number(s2.replace(".", "")) * Math.pow(10, n2 - n1);
}