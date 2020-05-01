$(document).ready(function() {

	//opens summaries
	$(".book").click(function() {
		//makes summary page visible
		let index = $('.book').index(this);
		let scrolledPixels = 793 * (index + 1);
		$("#summaries").css("visibility", "visible");
		//stores index for scrolling pixels
    	$("#summaries").animate({opacity: "1"});
    	$('#summaries').animate({scrollTop: scrolledPixels}, 1000, $.bez([.15,.08,0,1]));
		});

	//opens about
	$("#about").click(function() {
		//makes summary page visible
		$("#summaries").css("visibility", "visible");
		//stores index for scrolling pixels
    	$("#summaries").animate({opacity: "1"});
    	$('#summaries').animate({scrollTop: 0}, 1000, $.bez([.15,.08,0,1]));
		});

	//close out of summaries
	$("#x").click(function(){
    	$("#summaries").animate({opacity: "0"});
    	setTimeout(function () {
    		$("#summaries").scrollTop(0);
    		$("#summaries").css("visibility", "hidden");
    		}, 1000);
    	});
    	

 	// reveals carousel
  	$("#carousel-container").hover(function(){
		$("#carousel").animate({opacity: "1"});
		  $("#carousel").css("visibility", "visible");
		   }, 
		function(){
		   $("#carousel").animate({opacity: "0"});
		   setTimeout(function () {
		   			$("#carousel").css("visibility", "hidden");
		   			}, 300);
		});
	  
	//carousel selection scroll
	$(".bookcoverCarousel").click(function() {
			//makes summary page visible
			let index = $('.bookcoverCarousel').index(this);
			let scrolledPixels = 793 * (index);
	    	$('#summaries').animate({scrollTop: scrolledPixels}, 1300, $.bez([.15,.08,0,1]));
		});

	//clicking down function
	$("#down").click(function() {
			//makes summary page visible
			console.log("a;sdlkfj");
			let index = $("#summaries").scrollTop();
			let scrolledPixels = index -  (index%793) +793;    	
			$('#summaries').animate({scrollTop: scrolledPixels}, 1300, $.bez([.15,.08,0,1]));
		});

	//autoscroll for when the window is in between
	$('#summaries')
	  .on("scrollstop", {latency: 500}, function() {
	    console.log("scrollingstopped");
	    if(($("#summaries").scrollTop() %793 > 75)&& ($("#summaries").scrollTop() %793 > 150)){
	    	let index = $("#summaries").scrollTop();
			let scrolledPixels = index -  (index%793) +793;    	
			$('#summaries').animate({scrollTop: scrolledPixels}, 1500, $.bez([.15,.08,0,1]));
	    }
	    else if (($("#summaries").scrollTop() %793 > 75) && ($("#summaries").scrollTop() %793 < 150)) {
	    //code to be executed if the condition1 is false and condition2 is true
	    	let index = $("#summaries").scrollTop();
			let scrolledPixels = index - (index%793);    	
			$('#summaries').animate({scrollTop: scrolledPixels}, 1500, $.bez([.15,.08,0,1]));
	 	}})

	// progress bar
	$("#summaries").scroll(function(){
	  //this code executes when the scroll event occurs.
	  console.log("dk");
	  let index = $("#summaries").scrollTop();
	  var height = ($(".bookcontainer").length - 1)* 793
	  console.log(height);
	  var scrolled = (index / height) * 100;
	  $("#progress-bar").css('width', scrolled +"%");

	});
});