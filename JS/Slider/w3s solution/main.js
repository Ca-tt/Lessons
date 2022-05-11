window.onload = function () {

    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    const dot1 = document.querySelector('.dot1');
    const dot2 = document.querySelector('.dot2');
    const dot3 = document.querySelector('.dot3');

    let slideIndex = 1;

    prev.onclick = function() {
        plusSlides(-1);
    }
    next.onclick = function() {
        plusSlides(1);
    }


    //
    1// dot1.onclick = currentSlide(1);
    // dot2.onclick = currentSlide(2);
    // dot3.onclick = currentSlide(3);

    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        // let slideIndex = n;
        console.log(n, ' — n —');

        let i;

        let slides = document.getElementsByClassName("mySlides");

        let dots = document.getElementsByClassName("dot");

        console.log(slides, ' — slides —');
        console.log(dots, ' — slides —');

        console.log(slideIndex, ' — slideIndex —');


        if (n > slides.length) {
            slideIndex = 1
        }

        if (n < 1) {
            slideIndex = slides.length
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        console.log(slideIndex, ' — slideIndex —');
        console.log(slides[slideIndex], ' — slides —');

        slides[slideIndex - 1].style.display = "block";
        //
        dots[slideIndex - 1].className += " active";
    }
}