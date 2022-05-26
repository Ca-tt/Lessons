let dropdownMenu = document.querySelector(".dropdown-menu");
let animationUp = "slide-up";
let animationDown = "slide-down";
let stayVisible = "stay-visible";

document.querySelectorAll(".site-nav-link").forEach((link) => {
	link.onmouseenter = () => {
		dropdownMenu.classList.remove(stayVisible);
		dropdownMenu.classList.remove(animationDown);
		dropdownMenu.classList.add(animationUp);
	};
	link.onmouseleave = () => {
		dropdownMenu.classList.add(stayVisible);
		dropdownMenu.classList.add(animationDown);
		dropdownMenu.classList.remove(animationUp);
	};
});

dropdownMenu.onmouseenter = () => {
	dropdownMenu.classList.add(stayVisible);
	dropdownMenu.classList.remove(animationDown);
	dropdownMenu.classList.remove(animationUp);
};
dropdownMenu.onmouseleave = () => {
	dropdownMenu.classList.add(animationDown);
};
