// 5 7 => 12
// -3 0 => -3
//-7 12 => 5

function add (a,b){

	//convert a and b to numbers
	//add a and b
	a = parseFloat(a);
	b = parseFloat(b);

	return a + b;
}

function subtract (a,b){

	a = parseFloat(a);
	b = parseFloat(b);

	return a - b;
}

function tax (subtotal, tax){

	subtotal = parseFloat(subtotal);
	tax = parseFloat(tax);
	var total = subtotal * tax;
	var sum = subtotal + total;

	return sum;
}

function stringLength(string){

	console.log(typeof string)

		if (string.length < 5){

			return "short string";

		}else if (string.length > 5 && string.length < 10){

			return "medium string"

		}else if (string.length >10){

			return "long string"
		}
}

function startsWith(string){

	// console.log(string);

	if(string.charAt(0) === 'a' || string.charAt(0) === 'A'){

		return "starts with A"

	}else if(string.charAt(0) === 'b' || string.charAt(0) === 'B'){

		return "starts with B"

	}else if(string.charAt(0) === 'c' || string.charAt(0) === 'C'){

		return "starts with C"

	}else if(string.charAt(0) === 'd' || string.charAt(0) === 'd'){

		return "starts with D"

	}else if(string.charAt(0) === 'e' || string.charAt(0) === 'E'){

		return "starts with E"
	}else{

		return "starts with something else"
	}
}

function stringRepeat(s, n){

	var stringArray =[];

	while(stringArray.length < n){

		stringArray.push(s);
	}

	var newString = stringArray.join();
	newString =newString.replace( /,/g, " " );

	return newString

}

function nSum(n){

	var sum = 0;
	for(var i = 1; i< n; i++){

		sum = i + sum;
			console.log(i + ' ' + sum);
	}
	return sum
}

function join (array, spacer){

	var newArray = [];

	for(var i = 0 ; i < array.length; i++){

		newArray.push(array[i]);
		newArray.push(spacer);
	}

	var newString = newArray.join();
	newString = newString.replace(/,/g, "")
	return newString
}

function countLetters(string){

	var newArray =[];
	var count = 1;

	for(var i = 0; i <string.length; i++){

		for(var j = i + 1; j< string.length; j++){

			if(string[i] === string[j]){
				console.log('true');
				
					count++;
			}
		}
		newArray.push(string[i] + ': ' + count);
				count = 0;
	}console.log(newArray);
		return newArray
}

function maze(){

	var newArray = [
	['start',true, true, true,false, false, false,false],
	[false,false, false,true, true, false, true, false],
	[false,false, false,false, false, false, true, false],
	[true,true, false,false, true, true, true, false],
	[false,false, false,true, true, false, false, 'end'],
	]

	return newArray
}

function table(year, make, model, color){

	var obj1 = {
		year: '2001',
		make: 'Toyota',
		model: 'Camry',
		color: 'Grey'
	}
	var obj2 = {
		year: '2002',
		make: 'Toyota',
		model: 'Camry',
		color: 'Red'
	}
	var obj3 = {
		year: '2003',
		make: 'Toyota',
		model: 'Corola',
		color: 'Green'
	}
	var obj4 = {
		year: '2004',
		make: 'Toyota',
		model: 'Camry',
		color: 'Blue'
	}
	var obj5 = {
		year: '2005',
		make: 'Toyota',
		model: 'Camry',
		color: 'Black'
	}
	var obj6 = {
		year: '2005',
		make: 'Honda',
		model: 'Accord',
		color: 'Red'
	}
	var obj7 = {
		year: '2003',
		make: 'Honda',
		model: 'Accord',
		color: 'Red'
	}
	var obj8 = {
		year: '2006',
		make: 'Honda',
		model: 'Accord',
		color: 'Red'
	}
	var obj9= {
		year: '2010',
		make: 'Ford',
		model: 'F150',
		color: 'Blue'
	}
	var objArray= [obj1, obj2, obj3, obj4, obj5, obj6, obj7, obj8, obj9];
	var newArray=[];

	
	for(var i = 0; i< objArray.length; i++){

		if (objArray[i].year === year){

			console.log(objArray[i]);
		}
	}
	
}
