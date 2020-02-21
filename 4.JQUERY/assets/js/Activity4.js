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
var hobbyval = $('#addHobbyText');


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
	let gval = gender.val();
	let checkedboxes = $('input[type="checkbox"]:checked');
	let cb = $('input[type="checkbox"]')
	let max = $('label[for="max"]');
	let submit = $('#submit');
	let regex = /^[A-Za-z0-9 ]+$/;
	let isValid = regex.test(nval);


//if name && checkedboxes are null / undefined / blanked
if(!nval || checkedboxes < 3 || !aboutme.val() || !hobbyval){
	errorMessage('Please input the required fields for the following!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	$('#checkboxgroup').children().focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	$('textarea#textarea').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	$('#addHobbyText').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}



if(!isValid){
	alert(`${nval} contains special characters`);
	errorMessage('&nbsp;Beware of special characters!!!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}


if(checkedboxes.length <= 0){
	errorMessage('Please input the required fields for the hobbies!');
	$('input[type="checkbox"]').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

if(!nval){
	errorMessage('Please input the required fields for the name!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

if(!hobbyval){
	errorMessage('Please input the required fields for the name!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

//if name contains special characters
if(!isValid){
	alert(`${addHobby} contains special characters`);
	errorMessage('&nbsp;Beware of special characters!!!');
	$('textarea#textarea').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
	return false;
}


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
	return false;
}

// accumulated hobbies are inserted to a blank string
let allChecked = ' ';
checkedboxes.each(function(e){
	allChecked += ',' + $(this).val();
})

result.css({"border": "3px solid black",
	"border-radius": "5px",
	"border-color": "dodgerblue",
	"background-color": "paleturquoise","padding":"5px"});

//show button for redo
goOver.show();

//Results insertion
first.html(`Hi <strong>${nval}</strong>`);

second.html(`Your gender is <strong>${gval}</strong>`);

third.html(`Your hobbies are ${allChecked}`);

fourth.html(`Here's a little fact about your self: ${aboutme.val()}`);

//hide the form
form.hide();

}

console.warn(`JS Connection successful!`);





saveMe.on('click', function(e){
	var add = addHobby.val();
	checkboxesGroup.append(`<input type="checkbox" value="${add}"> ${add} <br>`);
	addhobbybtn.hide();
	hobby.show();
	console.log("success!");

})


hobby.on('click',function(e) {
	addhobbybtn.show();
	hobby.hide();
	console.log(`success!`);
});


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

$('input[type="checkbox"]:checked').click( function(){
	$(this).parent('label').toggleClass('highlight', this.checked);
});

$('#addHobbyText').keydown(function (e) {
	if (e.shiftKey || e.ctrlKey || e.altKey) {
		e.preventDefault();
	} else {
		let key = e.keyCode;
		if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
			e.preventDefault();
		}
	}
});
