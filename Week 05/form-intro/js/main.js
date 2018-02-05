document.querySelector('form.login').addEventListener('submit', function (evt) {
	//The evt.target is the <form> element
	var formElement = evt.target;
	// A <form> HTML Element has a collection called elements which holds values that will be submitted from the form.
	//Each <input> or other form elements on the form will ahve the control's id attributes as "property" (or, an index) on the elements collection.
	var user = formElement.elements.usernameId;
	var pass = formElement.elements.passwordInfo;
	//Any property can be accessed as though it were a string-like "index" to an array.
	var pass2 = formElement.elements["password"];
	//pass2 is an <input> type="password" element in the element collection.
	//pass2 has a property called "name", and a property called "value". Form these, the form can construct a name-value pair to submit to the web server.

	var valid = true;

	// check the username, should be email
	if (user.value.indexOf('@') == -1) {
		valid = false;
		user.classList.add('error');
	} else {
		user.classList.remove('error');
	}

	// check password, b/w 6 and 10 chars
	if (pass.value.length < 6 || pass.value.length > 10) {
		valid = false;
		pass.classList.add('error');
	} else {
		pass.classList.remove('error');
	}

	if (valid == false) {
		evt.preventDefault();
	}
});