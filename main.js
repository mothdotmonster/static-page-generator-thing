id = 1
const placeWePutStuff = document.querySelector('#kevin')

function download(filename, text) {
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

function addForm() {
	placeWePutStuff.insertAdjacentHTML("beforeend", '<div class="form-outer" id="outer' + id + '"> <div class="form-inner" id="form' + id + '"> <input type="text" id="name' + id + '" name="name' + id + '" placeholder="label" class="label"> <input type="text" id="link' + id + '" name="link' + id + '" placeholder="link" class="link"> </div> <div class="form-buttons" id="buttons' + id + '"> <button type="button" id="add' + id + '" onclick="addForm(id)" class="button-add" title="add another link">+</button> <button type="button" id="remove' + id + '" onclick="removeForm(' + id + ')" class="button-remove" title="remove this link">-</button> </div> </div>')
	id = id + 1
}

function removeForm(id) {
	document.getElementById('outer' + id).remove()
}

function generateOutput() {
	var form = document.getElementById('kevin')
	entries = form.children
	var outputLinks = ""
	for (var i = 0; i < entries.length; i++) {
		var currentEntry = entries[i]
		console.log(currentEntry)
		label = currentEntry.getElementsByClassName('label')[0].value
		link = currentEntry.getElementsByClassName('link')[0].value
		anchor = '			<a class="link" href="' + link + '">' + label + '</a>\n'
		outputLinks = outputLinks + anchor
	}
	outputBox = document.createElement('textarea')
	outputName = document.getElementById('your-name').value
	outputBio = document.getElementById('bio').value
	outputBio = outputBio.split("\n").join("<br>");
	outputText = '<!DOCTYPE html>\n<html lang="en">\n<head>\n	<title>' + outputName + '</title> \n	<meta charset="UTF-8" />\n	<meta name="viewport" content="width=device-width,initial-scale=1" />\n	<link rel="stylesheet" type="text/css" href="style.css" />\n	<link rel="icon" href="favicon.png">\n</head>\n<body>\n	<div class="outer">\n		<div class="bio-container">\n			<img class="icon" src="icon.png" alt="Icon">\n			<h1 class="name">' + outputName + '</h1>\n			<p class="bio">' + outputBio + '</p>\n		</div>\n		<div class="link-container">\n' + outputLinks + '		</div>\n	</div>\n</body>\n</html>'
	download('index.html', outputText)
}

