
//Part 1 Global Declarations
var Part1 = document.getElementById("btn-1");
let modal1 = document.getElementById("modal-1");
let input1 = document.getElementById("input-1");

//Part 2 Global Declarations
var Part2 = document.getElementById("btn-2");
let modal2 = document.getElementById("modal-2");
let input2 = document.getElementById("input-2");

//Part 3 Global Declarations
var Part3 = document.getElementById("btn-3");
let modal3 = document.getElementById("modal-3");
let input3 = document.getElementById("input-3");




//Adding Event Listeners
Part1.addEventListener('click', getLongestWord);
Part2.addEventListener('click', getPrimeOrNot);
Part3.addEventListener('click', convertHoursToMinutes);
document.body.addEventListener('mousemove' , changeBackGroundColor);










//Part 1 EVENT
function getLongestWord (e) {
	e.preventDefault();

//get Longest Word Function starts here
const longestWord = (str) => {

//declare empty array
let arr = [ ] ;

// split the string value
const splittedWord = str.split(' ');

// get the string lengths
splittedWord.forEach ( x => arr.push( x.length ) );

// compare each to determine the MAX
const maxLength = Math.max.apply( null, arr );

// retrieve word(s) with the highest length as a String value
let result = splittedWord.filter( x => x.length === maxLength).toString();

// log the word with the highest length
modal1.innerHTML = `<strong> String is: </strong> <code> ${str} </code>  <br> <strong> The longest word:</strong> <code>  ${result} </code>`;
}

//get input value
input1 = document.getElementById("input-1").value;

//call function using input value
longestWord(input1);

}






//Part 2 EVENT
function getPrimeOrNot (e) {
	e.preventDefault();


//identify if Number is Prime or Not function starts here
const primeOrNot = (n) => 
{
	//just for declarations
	for( let i = 2; i < n; i++ )

		if( n % i === 0 )

	// if false
	modal2.innerHTML = `<code> ${n} </code> <strong> is not a prime </strong> `;

	// if true
	modal2.innerHTML = `<code> ${n} </code> <strong> is a prime </strong>`;
}

//get input value
input2 = document.getElementById("input-2").value;

//call function using input value
primeOrNot(input2);
}

















//Part 3 EVENT
function convertHoursToMinutes (e) {
	e.preventDefault();

//Hours to Minutes Converter starts here
const convertHoursToMinutes = (hour) => hour * 60 ;

//get input value
input3 = document.getElementById("input-3").value

//call function using input value
modal3.append(convertHoursToMinutes(input3));

}












//change backgroundColor
function changeBackGroundColor(e){
	document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+", 40)";
}



























