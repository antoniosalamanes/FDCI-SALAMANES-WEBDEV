//Part 1
const longestWord = (str) => {

	let splittedWord = str.split(' ');
	let arr  = [];
	let arr2 = [];

		//get the lengths of each splitted word
		for( let i = 0; i < splittedWord.length; i++ )
		{	
		//array of lengths pushed to first Array
		arr.push((splittedWord[i].length));

		//get Max Number from the array of word lengths
		const maxNumber = Math.max.apply(null, arr);

		if( splittedWord[i].length == maxNumber )
		{

		//array of lengths pushed to second Array
		arr2.push( splittedWord[i] );
		counter = arr2.length;
	}
}

console.log( `String is: ${str}  \nThe longest word: ${arr2[counter-1]}` );
}

//call Function
longestWord("The quickest brown fox jumps over the lazy dog.");





//Part2 
const primeOrNot = (n) => 
{
	for( let i = 2; i < n; i++ )
		if( n % i === 0 )

		// if false
	return console.log(`${n} is not a prime`); 

		// if true
		return console.log(`${n} is a prime`);
	}

	// call Function that accepts randomNumber
	//declare random number
	let randomNum = Math.round ( Math.random () * 100 );
	primeOrNot(randomNum);






//Part 3
const convertHoursToMinutes = (hour) => hour * 60 ;

//call Function
console.log(convertToMinutes(1));






















