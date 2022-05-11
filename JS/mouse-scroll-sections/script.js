const scrollSections = document.querySelectorAll(".scroll-section");
const sectionsCount = scrollSections.length - 1;
let currentSectionIndex = 0;

function scrollToNextSection(currentSectionIndex) {
	let nextSection = scrollSections[currentSectionIndex];

	window.scroll({
		top: nextSection.offsetTop,
		left: 0,
		behavior: "smooth",
	});
}

window.onwheel = function (event) {
	// get wheel direction based on wheel.deltaY value
	let deltaY = event.deltaY;
	let wheelDirection = deltaY > 0 ? "down" : "up";

	// check if we don't reach the section's end (length)
	if (wheelDirection == "up" && currentSectionIndex != 0) {
		currentSectionIndex--;
	} else if (wheelDirection == "down" && currentSectionIndex < sectionsCount) {
		currentSectionIndex++;
	}
	scrollToNextSection(currentSectionIndex);
};
