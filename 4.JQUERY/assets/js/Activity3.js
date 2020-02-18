


//Part 1

//Add 'submit' Event listener to the form
$('#form').on('submit', addAdditionalObj);

function addAdditionalObj (e) {
	//prevent actual submission
	e.preventDefault();

	//get the input values for age && name
	var name = $('#name').val();
	var age = $('#age').val();

	//declare variables
	var final = $('#final-object');
	var readable = $('#readable-format');

	//declare empty array
	var arr = [];
	//declare empty object
	var person = {};

	//assign the inputs to the object keys
	person.name = name;
	person.age = age;
	//push the values to the array
	arr.push(person);

	//append in JSONized format
	final.append(JSON.stringify(arr, null , 4));

	//append as in readable format
	for (let x  in arr){
		readable.append(`Name: ${arr[x].name} , Age: ${arr[x].age} <br>`)
	}
}




//Part 2

$('#form-2').on('submit', addProduct);

function addProduct (e) {
	e.preventDefault();
	var name = $('#name2').val();
	var stock = $('#stocks').val();
	var price = $('#price').val();
	var tval = $('#totalValue');
	var plist = $('#product-list');

	var arr = [];
	var product = {};
	

	product.n = name;
	product.s = stock;
	product.p = price;
	arr.push(product);
	var total = [];
	var calc = stock * price;
	total.push(calc);



	
	for(let x in arr){
		plist.append(`<b>Name:</b> <code>${arr[x].n}</code>  <b>Stock(s):</b> <code>${arr[x].s}</code>  <b>Price:</b> <code>${arr[x].p}</code> <br>`)
	}

	// $('#calc').on('click', function(){
	// 	for(var x in arr){
	// 		calc = (arr[x].s) * (arr[x].p);
	// 		tval.append(`<code>${arr[x].n}</code> will have a total value of <code>${calc}.</code>  <br>`);
	// 		total = total + calc;
	// 		console.log(total);
	// 	}


	$('#calc').on('click', function(){
		for( let i = 0; i < arr.length ; i++ ){
			calc = (arr[i].s) * (arr[i].p);
			total = [];
			total.push(calc);
			tval.append(`<code>${arr[i].n}</code> will have a total value of <code>${calc}.</code>  <br>`);
			
			console.log(total);

		}
		// tval.append(`<strong> Total Value: ${total} </strong> `);
	})	
}


// tval.append(`<strong> Total Value: ${total} </strong> `);
	// $('#calc').on('click', function(){
	// 	for( let i = 0; i<arr.length ; i++ ){
	// 		console.log(arr[i].n);
	// 	}


