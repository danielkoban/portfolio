$(document).ready(function(){
	$("#projects figure").hover(function(){
		$(this).find("img").animate({opacity: "0.1"}, 500);
		$(this).find("figcaption").fadeIn(500);
		}, function(){
		$(this).find("img").animate({opacity: "1"}, 500);
		$(this).find("figcaption").fadeOut(500);
	});	
});