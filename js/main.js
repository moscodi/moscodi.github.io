function askQuestions () {

	var firstName = prompt ('What is your first name?');
	var lastName = prompt ('What is your last name?');
	var fullName = firstName + ' '+ lastName;

	console.log (fullName);

	var age = prompt ('How old are you?');
	age = parseInt (age);

	if (age >= 18) {
		console.log ('User is an adult');
	 } else if (age >= 13)	{
	 	console.log ('User is a teengaer');
	 } else {
	 	console.log ('User is a child');
	 }

	if (firstName ==='General' && lastName !=='Assembly'){
	console.log ('Greetings General!');

	}

	var faveColour = prompt ('What is your favourite colour?').toLowerCase().trim();

	if 	(faveColour === 'red'||
		faveColour === 'green'||
		faveColour === 'blue'||
		faveColour === 'yellow') {

	$('h1').css ('color', faveColour);

	}

}

/* This ia a JS
block comment */

// This is a single line comment

// When the page has loaded
$ (function() {

	$ ('img'.on ('click', askQuestions);


	//When the user clicks an h3 
	$('h3').on ('click', function () {

		// Toggle the next element
		$ (this).next ().toggle();

	});

});
