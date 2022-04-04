// Create a new list item when clicking on the Add button start
function newElement() {
	var li = document.createElement('li');
	var inputValue = document.getElementById('myInput').value;
	var t = document.createTextNode(inputValue);
	li.appendChild(t);
	if (inputValue === '') {
		alert('Bro You Forgot to Write Something!');
	} else {
		document.getElementById('myUl').appendChild(li);
	}
	document.getElementById('myInput').value = '';

	var span = document.createElement('SPAN');
	var txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	li.appendChild(span);

	for (i = 0; i < close.length; i++) {
		close[i].onclick = function () {
			var div = this.parentElement;
			div.style.display = 'none';
		};
	}
}
// Create a new list item when clicking on the Add button end

// create a close button and append it to each list item start
var myNodeList = document.getElementsByTagName('Li');
var i;
for (i = 0; i < myNodeList.length; i++) {
	var span = document.createElement('span');
	var txt = document.createTextNode('\u00D7');
	span.className = 'close';
	span.appendChild(txt);
	myNodeList[i].appendChild(span);
}
// create a close button and append it to each list item end

// Click on a close button to hide the current list item start
var close = document.getElementsByClassName('close');
var i;
for (i = 0; i < close.length; i++) {
	close[i].onclick = function () {
		var div = this.parentElement;
		div.style.display = 'none';
	};
}

// Click on a close button to hide the current list item end

// Add a checked symbol when clicking on a list item start
var list = document.querySelector('ul');
list.addEventListener(
	'click',
	function (ev) {
		if (ev.target.tagName === 'LI') {
			ev.target.classList.toggle('checked');
		}
	},
	false,
);
// Add a checked symbol when clicking on a list item end
