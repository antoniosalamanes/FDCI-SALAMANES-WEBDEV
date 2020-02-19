var sum = [];
var arr = [];
var arr2 = [];
var total = 0;
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


	//declare empty object
	var person = {
		name: name,
		age: age,
	};
	//push the values to the array

	arr.push(person);
	console.log(arr);

	// JSONized format
	final.html(JSON.stringify(arr, null , 4));
	//append as in readable format
	var text = "";
	for (let x  in arr){
		text += `Name: ${arr[x].name} , Age: ${arr[x].age} <br>`;
	}
	readable.html(text);
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

	var product = {
		n:name,
		s:stock,
		p:price
	};

	arr2.push(product);
	// console.log(arr2);


	for(let x in arr2){
		plist.html(`<b>Name:</b> <code>${arr2[x].n}</code>  <b>Stock(s):</b> <code>${arr2[x].s}</code>  <b>Price:</b> <code>${arr2[x].p}</code> <br>`)
	}
	console.log(arr2);

	$('#calc').on('click', function(){
		for(var x in arr2){

			calc = (arr2[x].s) * (arr2[x].p);
			sum.push(calc);
			console.log(sum);
			tval.html(`<code>${arr2[x].n}</code> will have a total value of <code>${calc}.</code>  <br>`);
		}
		
});
};

console.log('Hey');