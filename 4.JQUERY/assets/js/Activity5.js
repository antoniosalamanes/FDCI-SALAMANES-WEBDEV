$(document).ready(function(){

	//Part 1

	//hide the answers on document ready
	$('p.answers').hide();

	//attach event delegation to hyperlinks
	$('a').on('click', function(e){
		$(e.currentTarget).parent().next().slideToggle();
	})

// IF ( <p> !== CLICKED PARAGRAPH ) => SLIDE/HIDE 
$('#first').on('click', ()=>{
	$('p:nth-child(4)').slideUp();
	$('p:nth-child(6)').slideUp();
})
$('#second').on('click', ()=>{
	$('p:nth-child(2)').slideUp();
	$('p:nth-child(6)').slideUp();
})
$('#third').on('click', ()=>{
	$('p:nth-child(2)').slideUp();
	$('p:nth-child(4)').slideUp();
})




//Part 2
$('#start').on('click', ()=>{
	//animate chaining
	$('.box').
	animate({width: '400px'}, 500).
	animate({height: '400px'}, 500).
	animate({right: '-200px'}, 500).
	animate({borderWidth: '15px'},500, 
	function(){
		//perform callback after animation
	  	$(this).css({"opacity":"0.5"});
	})
});

$('#reset').on('click', ()=> location.reload());



//Part 3
$('#start2').on('click', ()=> { $('.box-2').animate({right: '-=50px', bottom: '-=50px',width: '+=100px', height: '+=100px'}), 500 });

$('#rewind').on('click', ()=> { $('.box-2').animate({left: '-=50px', bottom: '+=50px', width: '-=100px', height: '-=100px'}), 500 });

$('#reset2').on('click', ()=> location.reload());


















































});




