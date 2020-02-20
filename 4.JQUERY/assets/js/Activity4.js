var form = $('#form');
var error = $('#error');
var hobby = $('#hobby');
var addhobbybtn = $('#addhobbies');
var saveMe = $('#saveMe');
var checkboxesGroup = $('#checkboxgroup');
var addHobby = $('#addHobbyText');
var aboutme = $('textarea#textarea');
var maxCount = $('label[for="max"]');
var first = $(`.container>p#n`);
var second = $(`.container>p#g`);
var third = $(`.container>p#h`);
var fourth = $(`.container>p#a`);
var result = $('#result');
var goOver = $('#goOver');



$(window).on('load', function(){
	addhobbybtn.hide();
	goOver.hide();
});



form.on('submit', submitProfile);

function submitProfile(e){
	let name = $('#name');
	let nval = name.val();
	let gender = $('#gender');
	let gval = gender.val();
	let checkedboxes = $('input[type="checkbox"]:checked');
	let max = $('label[for="max"]');
	let submit = $('#submit');

	if (checkedboxes.length < 3){
		
		errorMessage('Please select atleast 3 hobbies!');
	}else{
		 // $(this).unbind('submit').submit()
		 return true;
		}

		let allChecked = ' ';
		checkedboxes.each(function(e){
			allChecked += ',' + $(this).val();
		})

		result.css({"border": "3px solid black",
			"border-radius": "5px",
			"border-color": "dodgerblue",
			"background-color": "paleturquoise","padding":"5px"});
		goOver.show();


		first.html(`Hi <strong>${nval}</strong>`);
		second.html(`Your gender is <strong>${gval}</strong>`);
		third.html(`Your hobbies are ${allChecked}`);
		fourth.html(`Here's a little fact about your self: ${aboutme.val()}`);

		form.hide();


	}






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




	function errorMessage(str){
		error.append(str);
		error.addClass('alert alert-danger alert-dismissible fade show');
		error.html(str)
	}




