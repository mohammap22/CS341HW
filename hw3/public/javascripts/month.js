//Peter Mohammadi

eventHandler = function(){
	$(".dropbtn:first-child").html($(this).text()); //just replaces the text of the button with the given month 
	}


$(function(){  
	$("a").click(eventHandler);
});
