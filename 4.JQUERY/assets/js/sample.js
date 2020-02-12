// Declarations
let First = document.querySelector(".Part1");
let Second = document.querySelector(".Part2");
let Third = document.querySelector(".Part3");
let Fourth = document.querySelector(".Bonus");


//Functions
//Part 1
const Part1=()=>{
	let total=0;
	for(let i=1; i <50 ; i+=2) {
		total += i;
	}
	document.write(total);
}

// Part 2
const Part2=()=>{
	const Student ={
		name:"Hillary",
		age:14,
		marks:[
		100,
		99,
		98,
		80,
		70
		]
	}
	let total = 0;
	Student.marks.forEach((average)=> Average=total+=average/Student.marks.length);
	document.write(`Average grade: ${Average} <br>`);
	if(Average < 100){
		document.write(`Grade : A`);
	}
	else if(Average < 90){
		document.write(`Grade : B`);
	}
	else if(Average < 80){
		document.write(`Grade : C`);
	}
	else if(Average < 70){
		document.write(`Grade : D`);
	}
	else if(Average < 60){
		document.write(`Grade : F`);
	}
	else{
		document.write(`Guess it's time to die.`);
	}
}

// Part 3
const Part3=()=> {
	let i;
	for(i=1;i<=100;i++){
		if( i%5 == 0 && i%3 == 0 ){
			document.write(`${i} BeepBoop <br>`);
		}
		else if( i%5 == 0){
			document.write(`${i} Boop <br>`);
		}
		else if( i%3 == 0){
			document.write(`${i} Beep <br>`);
		} else{
			document.write(`${i} <br>`);
		}
	}
}

//Bonus
const Bonus=()=> {
	for (let i = 0; i <= 5; i++) {
		for (let j = 0; j <= i; j++) {
			document.write('*');
		}
		document.write(`<br>`);
	}
}




//Add Events Listeners
First.addEventListener("click", Part1);
Second.addEventListener("click", Part2);
Third.addEventListener("click", Part3);
Fourth.addEventListener("click", Bonus);