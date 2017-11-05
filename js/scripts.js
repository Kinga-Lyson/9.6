// odniesienie do buttona z id addElem
var buttonElem = document.getElementById('addElem');
// odniesienie do listy z id list
var list = document.getElementById('list');


// nasłuchiwacz dla buttona po zdarzeniu kliknięcie
buttonElem.addEventListener('click', function(e) {
	var element = document.createElement('li');
	var liElem = document.getElementsByTagName('li');
	element.innerHTML = 'item ' + liElem.length;
	list.appendChild(element);
});