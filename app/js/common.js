$(function() {

	new WOW().init();

	$("#toggle").click(function() {
		$(this).toggleClass("on");
		$(".head_nav").slideToggle(500);
	});

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });


	$('#preloader').fadeOut();

});
