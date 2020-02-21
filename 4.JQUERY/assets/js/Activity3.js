//Global letiables
	var sum = 0;
	var arr = [];
	var arr2 = [];

//Part 1
$('#form').on('submit', addAdditionalObj);
function addAdditionalObj (e) {
//prevent actual submission
e.preventDefault();

//get the input values for age && name
let name = $('#name').val();
let age = $('#age').val();


//declare letiables
let final = $('#final-object');
let readable = $('#readable-format');
let namee = $('#name');
let agee = $('#age');
let regex = /^[A-Za-z0-9 ]+$/;
let isValid = regex.test(name);



//if age && name is null / undefined / blanked
if(!age && !name){
	errorMessage('Please input the required fields for the following!');
	$('#age').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if only name is null / undefined / blanked
else if(!name){
	errorMessage('Please input the required fields specifically for name!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if only age is null / undefined / blanked
else if(!age){
	errorMessage('Please input the required fields specifically for age!');
	$('#age').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if name contains special characters
if(!isValid){
	alert(`${name} contains special characters`);
	errorMessage('&nbsp;Beware of special characters!!!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if age contains special characters
isValid = regex.test(age);
if(!isValid){
	alert(`${age} contains special characters`);
	errorMessage('Beware of special characters!!!');
	$('#age').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}


//after validations, pass data to the object
let person = {
	name: name,
	age: age,
};

//push the values to the array
arr.push(person);
console.log(arr);

// JSONized format
final.html(JSON.stringify(arr, null , 4));
//append as in readable format
let text = "";
for (let x  in arr){
	text += `Name: ${arr[x].name} , Age: ${arr[x].age} <br>`;
}
readable.html(text);
}





//Part 2
$('#form-2').on('submit', addProduct);

function addProduct (e) {
	e.preventDefault();

//declaring letiables
let name = $('#name2').val();
let stock = $('#stocks').val();
let price = $('#price').val();
let tval = $('#totalValue');
let plist = $('#product-list');
let regex = /^[A-Za-z0-9 ]+$/;
let isValid = regex.test(name);


//if price,name,stock is equal to undefined or null or blanked
if(!price && !name && !stock){
	errorMessage('Please input the required fields for the following!');
	$('#name2').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	$('#stocks').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	$('#price').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if price,name,stock is equal to undefined or null or blanked
else if(!name){
	errorMessage('Please input the required fields specifically for name!');
	$('#name2').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}


//if only stock is equal to undefined or null or blanked
else if(!stock){
	errorMessage('Please input the required fields specifically for stock!');
	$('#stocks').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});

	return false;
}


//if only price is equal to undefined or null or blanked
else if(!price){
	errorMessage('Please input the required fields specifically for price!');
	$('#price').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});

	return false;
}


//if name contains special characters
if(!isValid){
	alert(`${name} contains special characters`);
	errorMessage('Beware of special characters!!!');
	$('#name2').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}


//if name stocks special characters
isValid = regex.test(stock);
if(!isValid){
	alert(`${stock} contains special characters`);
	errorMessage('Beware of special characters!!!');
	$('#stocks').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if name price special characters
isValid = regex.test(price);
if(!isValid){
	alert(`${price} contains special characters`);
	errorMessage('Beware of special characters!!!');
	$('#price').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//after validations, proceed on creating the object
let product = {
	n:name,
	s:stock,
	p:price
};

arr2.push(product);
// console.log(arr2);



let text2 = "";
for(let x in arr2){
	text2 += `<b>Name:</b> <code>${arr2[x].n}</code>  <b>Stock(s):</b> <code>${arr2[x].s}</code>  <b>Price:</b> <code>${arr2[x].p}</code> <br>`;
}
//product list
plist.html(text2);

let text3 = "";
$('#calc').on('click', function(){
	for(let x in arr2){
		calc = (arr2[x].s) * (arr2[x].p);
		text3 += `<code>${arr2[x].n}</code> will have a total value of <code>${calc}.</code>  <br>`;
	}
	sum += calc;

//total value
tval.html(text3);
$('#prodValue').html(`<h3>Product Total Value </h3><strong> <code> ${sum} </code> </strong>`);

});
};

//check if JS is working...
console.warn('JS Connection successful!');




//UTILITIES SECTION

//errorMessage
function errorMessage(str){
	let error = $(`.error`);
	error.addClass(`alert alert-danger alert-dismissible fade show`);
	error.append(str);
};


//Restrict input of non numeric characters to Price, Age, and Stocks(accepts decimal)
$('#price').on("keypress keyup blur", function (event) {
	this.value = this.value.replace(/[^0-9\.]/g,'');
	$(this).val($(this).val().replace(/[^0-9\.]/g,''));
	if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
});


$('#age').on("keypress keyup blur", function(event) {
	$(this).val($(this).val().replace(/[^\d].+/, ""));
	if ((event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
});

$('#stocks').on("keypress keyup blur", function(event) {
	$(this).val($(this).val().replace(/[^\d].+/, ""));
	if ((event.which < 48 || event.which > 57)) {
		event.preventDefault();
	}
});

//Restricts input of non alphabetical character && Special Characters

// $('#name').keydown(function (e) {
// 	if (e.shiftKey || e.ctrlKey || e.altKey) {
// 		e.preventDefault();
// 	} else {
// 		let key = e.keyCode;
// 		if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
// 			e.preventDefault();
// 		}
// 	}
// });

// $('#name2').keydown(function (e) {
// 	if (e.shiftKey || e.ctrlKey || e.altKey) {
// 		e.preventDefault();
// 	} else {
// 		let key = e.keyCode;
// 		if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
// 			e.preventDefault();
// 		}
// 	}
// }););