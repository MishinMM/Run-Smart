window.addEventListener('DOMContentLoaded', function() {
    
    //Slider
    let slideIndex = 1,
        slides = document.querySelectorAll('.slider__item'),
        prev = document.querySelector('.slider__prev'),
        next = document.querySelector('.slider__next'),
        dotsWrap = document.querySelector('.slider__dots'),
        dots = document.querySelectorAll('.slider__dots-dot');

    showSlides(slideIndex);

    function showSlides(n) {

        if(n > slides.length) {
            slideIndex = 1;
        }
        if(n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach((item) => item.style.display = 'none');
        // for (let i = 0; i < slides.length; i++) {
        //     slides[i].style.display = 'none';
        // }
        dots.forEach((item) => item.classList.remove('slider__dots-dot_active'));

        slides[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].classList.add('slider__dots-dot_active');
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }
    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    prev.addEventListener('click', function() {
        plusSlides(-1);
    });
    next.addEventListener('click', function() {
        plusSlides(1);
    });

    dotsWrap.addEventListener('click', function(event) {
        for (let i = 0; i < dots.length + 1; i++) {
            if (event.target.classList.contains('slider__dots-dot') && event.target == dots[i-1]) {
                currentSlide(i);
            }
        }
    });
});