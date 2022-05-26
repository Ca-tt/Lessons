function checkIfButtonDisabled(button) {
	return button.dataset.buttonDisabled;
}

function changeWindowLocation(newLocation) {
	location.href = newLocation;
}

function handleButton(button, currentState, newLocation, newText, cssClass) {
	if (currentState == "true") {
		changeWindowLocation(newLocation);
	} else {
		disableButton(button, newText, cssClass);
	}
}


function disableButton(button, newText, cssClass) {
	button.dataset.buttonDisabled = true;
	button.querySelector(".button-text").innerHTML = newText;
	button.classList.add(cssClass);
}

// применяем новые функции к старым кнопкам

function enableButton(button, text, cssClass) {}
