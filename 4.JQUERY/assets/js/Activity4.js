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


//Hide on load
$(window).on('load', function(){
	addhobbybtn.toggle();
	goOver.toggle();
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
	let isValid = regex.test(nval);


//if name && checkedboxes are null / undefined / blanked
if(!nval || checkedboxes < 3 || !aboutme.val()){
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


if(!nval){
	errorMessage('Please input the required fields for the name!');
	$('#name').focus().css({"border-color":"red" , 'box-shadow':'coral l3px 4px'});
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
	$('.small').focus().css({"border":"1px solid red" , 'box-shadow':'coral l3px 4px'});
	return false;
}

// accumulated hobbies are inserted to a blank string
let allChecked = ' ';
checkedboxes.each(function(){
	allChecked += ',' + $(this).val();
})


appendToResult(first,`<code> Hi </code> <strong>${nval}</strong>`);
appendToResult(second,`<code> Your gender is </code> <strong> ${gval} </strong>`);
appendToResult(third,`<code> Your hobbies are </code> <strong> ${allChecked} </strong>`);
appendToResult(fourth,`<code> Here's a little fact about your self:</code> <strong> ${aboutme.val()} </strong>`);

//display the result div
result.css({"border": "3px solid black",
	"border-radius": "5px",
	"border-color": "dodgerblue",
	"background-color": "paleturquoise","padding":"5px"});

form.fadeToggle();



//show button for redo
goOver.fadeToggle();
// goOver.show();

}

console.warn(`JS Connection successful!`);





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

function appendToResult(container, str) {
	container.html(str)
}

// $('#addHobbyText').keydown(function (e) {
// 	if (e.shiftKey || e.ctrlKey || e.altKey) {
// 		e.preventDefault();
// 	} else {
// 		let key = e.keyCode;
// 		if (!((key == 8) || (key == 32) || (key == 46) || (key >= 35 && key <= 40) || (key >= 65 && key <= 90))) {
// 			e.preventDefault();
// 		}
// 	}
// });
