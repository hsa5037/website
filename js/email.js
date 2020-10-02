function emailSubmit () {
	alert("Opening Email Client");


	var email = document.body.getElementByID("emailinput").value;
	var subj = document.body.getElementByID("subjectinput").value;
	var text = document.body.getElementByID("textinput").value;

	window.open("mailto:hsa5037@gmail.com&subject=" + subj + "&body=" + text);
}

