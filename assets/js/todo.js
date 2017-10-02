//Check of each todo by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("done");
});

//Click the span to remove the todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//Adding user input to the list
$("input[type = 'text']").keypress(function(event){
	//When the ENTER key is pressed
	if(event.which === 13){
		var userEntery = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash-o' aria-hidden='true'></i></span>" + userEntery + "</li>");
	}
})
 //Toggling the input box
 $(".fa-pencil").click(function(){
 	$("input[type = 'text']").fadeToggle();
 })
