//Global Variables
var form = $('#form');
var error = $('#error');
var hobby = $('#hobby');
var addhobbybtn = $('#addhobbies');
var saveMe = $('#saveMe');
var checkboxesGroup = $('#checkboxgroup');
var addHobby = $('#addHobbyText');
var aboutme = $('textarea#textarea');
var aboutmeval = $('textarea#textarea').val();
var maxCount = $('label[for="max"]');
var first = $(`.container>p#n`);
var second = $(`.container>p#g`);
var third = $(`.container>p#h`);
var fourth = $(`.container>p#a`);
var result = $('#result');
var goOver = $('#goOver');
var gval = $('#gender').val();
var error = $('.error');


//Hide on load
$(window).on('load', function(){
	addhobbybtn.hide();
	goOver.hide();
});


//Start of Activity 4
form.on('submit', submitProfile);
function submitProfile(e){
	e.preventDefault();
	let name = $('#name');
	let nval = name.val();
	let gender = $('#gender');
	let checkedboxes = $('input[type="checkbox"]:checked');
	let cb = $('input[type="checkbox"]')
	let max = $('label[for="max"]');
	let submit = $('#submit');
	let regex = /^[A-Za-z0-9 ]+$/;

//if everything is blanked
if(!nval && checkedboxes.length < 3 && !aboutme.val()){
	errorMessage('Please input the required fields for the following!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	$('.small').focus().css({"border":"1px solid red" , 'box-shadow':'coral l3px 4px' , 'width':'10%'});
	$('textarea#textarea').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	$('#addHobbyText').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if name is null/undefined
if(!nval){
	errorMessage('Please input the required fields for the name!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}


//if name contains special characters
let isValid = regex.test(nval);
if(!isValid){
	alert(`${nval} contains special characters`);
	errorMessage('&nbsp;Beware of special characters!!!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}


//if "aboutyourself" is blanked/nulled/undefined
if(!aboutme.val()){
	errorMessage('Please tell us about yourself!!!');
	$('#textarea#textarea').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if "aboutyourself" section contains special characters
isValid = regex.test(aboutme.val());
if(!isValid){
	alert(` ${aboutme.val()} contains special characters`);
	errorMessage('&nbsp;Beware of special characters!!!');
	$('textarea#textarea').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}



//checked checkboxes are evaluated
if (checkedboxes.length < 3){
	errorMessage('Please select atleast 3 hobbies!');
	$('.small').focus().css({"border":"1px solid red" , 'box-shadow':'coral l3px 4px' , 'width':'10%'});
	return false;
}

// accumulated hobbies are inserted to a blank string
let allChecked = ' ';
checkedboxes.each(function(){
	allChecked += ',' + $(this).val();
})

//inserting the values
appendToResult(first,`<code> Hi </code> <strong>${nval}</strong>`);
appendToResult(second,`<code> Your gender is </code> <strong> ${gval} </strong>`);
appendToResult(third,`<code> Your hobbies are </code> <strong> ${allChecked} </strong>`);
appendToResult(fourth,`<code> Here's a little fact about your self:</code> <strong> ${aboutme.val()} </strong>`);

//display the result div
result.css({"border": "3px solid black",
	"border-radius": "5px",
	"border-color": "dodgerblue",
	"background-color": "paleturquoise","padding":"5px"});

//hide form
form.slideUp();

//hide error messages
error.fadeToggle();

//show button for redo
goOver.fadeToggle();
}







saveMe.on('click', function(e){
	let regex = /^[A-Za-z0-9 ]+$/;
	isValid = regex.test((addHobbyText.value));

	if(!addHobbyText.value){
		errorMessage('Cannot save a blanked input!');
		$('#addHobbyText').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
		return false;
	}

	if(!isValid){
		alert(`Cannot add a "hobby" with special character(s)`);
		errorMessage('&nbsp;Beware of special characters!!!');
		$('#addHobbyText').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
		return false;
	} 	

	var add = addHobby.val();
	checkboxesGroup.append(`<input type="checkbox" value="${add}"> ${add} <br>`);
	addhobbybtn.fadeToggle();
	hobby.fadeToggle();
	// hobby.show();
	console.log("success!");

})

//toggle Add Hobbies section
hobby.on('click',function(e) {
	addhobbybtn.show();
	hobby.hide();
	console.log(`success!`);
});

//count the length of keys pressed
aboutme.on('keyup', function()
{
	maxCount.html(`${this.value.length}/20`); 
});


goOver.on('click', function(){
	location.reload();
})




//UTILITIES SECTION

//errorMessage
function errorMessage(str){
	let error = $(`.error`);
	error.addClass(`alert alert-danger alert-dismissible fade show`);
	error.html(str);
};

//result inserter
function appendToResult(container, str) {
	container.html(str)
}





console.warn(`JS Connection successful!`);