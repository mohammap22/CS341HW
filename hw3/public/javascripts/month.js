eventHandler = function(){
	$(".dropbtn:first-child").html($(this).text());
	}


$(function(){  
	$("a").click(eventHandler);
});
