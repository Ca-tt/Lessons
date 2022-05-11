window.onload = function () {
	/*** CONFIGURATION ***/
	let slides = {
		all: document.querySelectorAll(".slide"),
		active: document.querySelector(".slide.active"),
		count: document.querySelectorAll(".slide").length,
		activeWidth: document.querySelector(".slide.active").offsetWidth + "px",
		index: {
			current: 0,
			next: 0,
		},
	};

	let dots = {
		section: document.querySelector(".dots"),
		first: document.querySelector(".dot"),
		duplicates: "",
	};

	let arrows = {
		next: document.querySelector(".arrow.next"),
		prev: document.querySelector(".arrow.prev"),
	};

	let slideNumbers = {
		current: document.querySelector(".current-slide-number"),
		count: document.querySelector(".slides-count-number"),
	};
	/*** CONFIGURATION END ***/

	/*** SLIDER INITIALIZATION 
		1) Generate dots
		2) disable all slides and dots for the God's sake
		3) Set the first slide and dot active
		4) Enable arrows
	***/
	function generateDots(fromDot, slidesCount) {
		for (let i = 0; i < slidesCount - 1; i++) {
			dots.duplicates = fromDot.cloneNode();
			dots.section.append(dots.duplicates);
		}
		dots.count = document.querySelectorAll(".dot").length;
		dots.all = document.querySelectorAll(".dot");

		return dots.count, dots.all;
	}
	generateDots(dots.first, slides.count);

	function enableDots(dots, count) {
		for (let i = 0; i < count; i++) {
			dots[i].onclick = function () {
				goToSlide(i);
			};
		}
	}
	enableDots(dots.all, dots.count);

	function disableSlides() {
		for (let i = 0; i < slides.count; i++) {
			slides.all[i].classList.add("inactive");
		}
	}

	function disableDots() {
		for (let i = 0; i < dots.count; i++) {
			dots.all[i].classList.remove("active");
		}
	}

	function sliderReset() {
		disableSlides();
		disableDots();

		slides.all[0].classList = "slide active";
		dots.first.classList.add("active");
	}
	sliderReset();

	function setNumbers(currentSlideIndex) {
		slideNumbers.current.innerHTML = currentSlideIndex + 1;
		slideNumbers.count.innerHTML = slides.count;
	}
	setNumbers(slides.index.current);

	function enableArrows() {
		arrows.next.onclick = function () {
			changeSlide(1);
		};

		arrows.prev.onclick = function () {
			changeSlide(-1);
		};
	}
	enableArrows();
	/*** SLIDER INITIALIZATION END ***/

	/*** SLIDES CHANGE 
		1) Change slides based on next index arrows passed 
		OR based on current dot's index
		2) Check for slider's end while changing slides
		3) Update current slides text 
	***/
	function swapSlides(currentActive, nextActive) {
		currentActive.classList = "slide inactive";
		nextActive.classList = "slide active";
	}

	function swapDots(currentActiveDot, nextActiveDot) {
		currentActiveDot.classList.remove("active");
		nextActiveDot.classList.add("active");
	}

	function updateCurrentNumber(nextSlideIndex) {
		slideNumbers.current.innerHTML = nextSlideIndex + 1;
	}

	function checkForSliderEnd(nextSlide) {
		if (nextSlide > slides.count - 1) {
			nextSlide = 0;
		} else if (nextSlide < 0) {
			nextSlide = slides.count - 1;
		}
		return nextSlide;
	}

	// change slides depending on next index
	function changeSlide(nextSlide) {
		slides.index.current = slides.index.next;
		slides.index.next += nextSlide;

		slides.index.next = checkForSliderEnd(slides.index.next);

		swapSlides(slides.all[slides.index.current], slides.all[slides.index.next]);
		swapDots(dots.all[slides.index.current], dots.all[slides.index.next]);

		updateCurrentNumber(slides.index.next);
	}

	function goToSlide(slideNumber) {
		disableDots();
		disableSlides();
		
		dots.all[slideNumber].classList = "dot active m-x-small";

		swapSlides(slides.all[slides.index.current], slides.all[slideNumber]);

		slides.index.current = slideNumber;
		slides.index.next = slides.index.current;

		updateCurrentNumber(slides.index.next);
	}
};
