$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});


	$(".bottom_button").addClass('makeRed');

	$(".makeRed").hover(function() {
		$(this).removeClass("makeRed")
	}, function() {
		$(this).addClass('makeRed')
	});

	$(".bottom_button").hover(function() {
		$(this).addClass("makeBorder")
	}, function() {
		$(this).removeClass('makeBorder')
	});	

	$(".bottom_button").click(function(event) {
		event.preventDefault();
		$(this).prev().toggle(4000);
	});

	$("a").click(function(event) {
		event.preventDefault();
		$("a").css({"background-color": "#FFFF00"})
	});

}); 
