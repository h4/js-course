function modify() {
	var newElem = document.createElement("P");
	newElem.id = "newP";
	var newText = document.createTextNode("Это второй параграф.");
	newElem.appendChild(newText);
    document.body.appendChild(newElem);
    document.getElementById("emphasis1").childNodes[0].nodeValue = "первый "
}
