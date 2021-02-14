eventHandler1 = function(){
    if($("textarea").val().indexOf("vegan") > -1 ){
			alert('Cheese contains dairy.'); 
		}
	else{
		var number = $("select").find(":selected").text();
		var stuff = $('input[name = "topping"]:checked').val(); 
		var notes = $('textarea').val(); 
		$("label").hide(); 
		$("p").hide();               
		$("h3").hide();
		$("input").hide();	   
		$("select").hide(); 
		$("textarea").hide();
		$("button[name = 'first']").hide();
		$("p").replaceWith("<h2>Thank You! Your order has been placed </h2>"); 
		$("h3").replaceWith("<h2> You ordered " + number + " topping(s) with " + stuff + ". And these notes: " + notes + "</h2>"); 
	   } 
}
$(function(){       
	$("button[name = 'ok']").click(eventHandler1);

});  

