	$("#subButton").on("click", function(){
		
		// Here we grab the form elements
		var newFriend = {
			name: $('#inputName').val().trim(),
			photoLink: $('#inputPhoto').val().trim(),
			answers: [$('#q1').val(),$('#q2').val(),$('#q3').val(),$('#q4').val(),$('#q5').val(),$('#q6').val(),$('#q7').val(),$('#q8').val(),$('#q9').val(),$('#q10').val()]
		};

		console.log(newFriend);

		// This line is the magic. It's very similar to the standard ajax function we used. 
		// Essentially we give it a URL, we give it the object we want to send, then we have a "callback".
		// The callback is the response of the server. In our case, we set up code in api-routes that "returns" true or false
		// depending on if a tables is available or not. 

		// Here we get the location of the root page. 
		// We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
		var currentURL = window.location.origin;

	    $.post(currentURL + "/api/friends", newFriend,
	    function(data){
	    		('#bestName').text(data.name);
	    		('#bestPic').attr("src", data.photo);

	    });
	    $('#modalBest').modal('toggle');

return false;

});