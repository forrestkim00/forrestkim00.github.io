$(document).ready(function() {
	//opening animation
	anime({
		targets: '.box',
		opacity: 1,
		duration: 600,
		easing: 'easeOutQuad', 
		delay: anime.stagger(200, {grid: [5, 4],  from: 0})
		});

	//click on a box 
	$(".box").click(function() {
		//makes summary page visible
		let index = $('.box').index(this);

		anime({
			targets: '.box',
		  	opacity: 0,
		  	duration: 600,
		  	easing: 'easeOutQuad', 
		  	delay: anime.stagger(200, {grid: [5, 4],  from: index})
			});

		setTimeout(function () {
		   	$(".box").css("visibility", "hidden");
		   	$('.picture')[index + 1].style.visibility = "visible";
		  	$('.title')[index+1].style.visibility = "visible";
		  	$('.summary')[index+1].style.visibility = "visible";
			anime({
				targets: '.summary',
				opacity: 1,
				duration: 2000,
				});

			anime({
		 		targets: '.title',
		   		opacity: 1,
		  		duration: 2000,
			  	});

			anime({
				targets: '.picture',
				opacity: 1,
				duration: 2000,
				})
			;}, 1000);	
		});

	//click on a about 
	$(".about").click(function() {
		//makes summary page visible
		$('.picture').css("visibility","hidden");
		$('.title').css("visibility","hidden");
		$('.summary').css("visibility", "hidden");

		anime({
			targets: '.box',
		  	opacity: 0,
		  	duration: 600,
		  	easing: 'easeOutQuad', 
		   	delay: anime.stagger(200, {grid: [5, 4],  from: 'center'})
			});

		setTimeout(function () {
		   	$(".box").css("visibility", "hidden");
		   	$('.picture')[0].style.visibility = "visible";
		  	$('.title')[0].style.visibility = "visible";
		  	$('.summary')[0].style.visibility = "visible";

		   	anime({
				targets: '.summary',
			  	opacity: 1,
			  	duration: 2000,
				});

		   	anime({
	 			targets: '.title',
	   			opacity: 1,
	  			duration: 2000,
		  		});

		   	anime({
				targets: '.picture',
			  	opacity: 1,
			  	duration: 2000,
				})
			;}, 1000);	
		});


	//backfunction
	$("#back").click(function() {
		$(".box").css("visibility", "visible");

		anime({
			targets: '.summary',
			opacity: 0,
			duration: 2000,
		    });

	 	anime({
		  	targets: '.title',
		  	opacity: 0,
		  	duration: 2000,
		  	});

	   	anime({
			targets: '.picture',
			opacity: 0,
			duration: 2000,
			})

		setTimeout(function () {
		   	$('.picture').css("visibility","hidden");
		  	$('.title').css("visibility","hidden");
		  	$('.summary').css("visibility", "hidden");
		   	;}, 1000);	

		anime({
			targets: '.box',
			opacity: 1,
			duration: 600,
			easing: 'easeOutQuad', 
			delay: anime.stagger(200, {grid: [5, 4],  from: 0})
			});
		});
});