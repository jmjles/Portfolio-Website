$("#movie a").on("mouseover click", function(){
	$('.intro').css("background-color", "#A26A42");
});
$("#movie a").on("mouseout", function(){
	$('.intro').css("background-color", "#f9f9ea");
});

$("#youtube a").on("mouseover click", function(){
	$('.intro').css("background-color", "red");
});
$("#youtube a").on("mouseout", function(){
	$('.intro').css("background-color", "#f9f9ea");
});

$("#github a").on("mouseover click", function(){
	$('.intro').css("background-color", "grey");
});
$("#github a").on("mouseout", function(){
	$('.intro').css("background-color", "#f9f9ea");
});

$(function(){
	$("#slides").slidesjs({
		width:100,
		height:300,
		play:{
			active: true,
			effect: "slide",
			interval: 3000,
			auto: true,
			pauseOnHover: true,
			swap: true
		}
	});
});