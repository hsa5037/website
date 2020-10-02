document.getElementById("projects").addEventListener("mouseover", function(event) {
	event.target.style.color = "red";
}, false);

document.getElementById("projects").addEventListener("mouseout", function(event) {
	event.target.style.color = "";
}, false);
