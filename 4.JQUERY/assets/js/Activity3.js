var sum = 0;
var arr = [];
var arr2 = [];
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

	var text2 = "";
	for(let x in arr2){
		text2 += `<b>Name:</b> <code>${arr2[x].n}</code>  <b>Stock(s):</b> <code>${arr2[x].s}</code>  <b>Price:</b> <code>${arr2[x].p}</code> <br>`;
	}
	plist.html(text2);
	// console.log(arr2);
	var text3 = "";
	var total = [];
	$('#calc').on('click', function(){
		for(var x in arr2){
			calc = (arr2[x].s) * (arr2[x].p);
			text3 += `<code>${arr2[x].n}</code> will have a total value of <code>${calc}.</code>  <br>`;
		}
			sum += calc;
		tval.html(text3);
		$('#prodValue').html(`<h3>Product Total Value </h3><strong> <code> ${sum} </code> </strong>`);
	// const product = total.forEach((x)=> total+=sum);
		// tval.html(product);
		
});
};

console.log('Hey');