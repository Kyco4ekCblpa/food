function slider({
    container,
    slide,
    nextArrow,
    prevArrow,
    totalCounter,
    currentCounter,
    wrapper,
    field
}) {
    //---------------------SLIDER---------------------

    const slides = document.querySelectorAll(slide);
    const slider = document.querySelector(container);
    const prev = document.querySelector(prevArrow);
    const next = document.querySelector(nextArrow);
    const totalSlides = document.querySelector(totalCounter);
    const currentSlide = document.querySelector(currentCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const slidesField = document.querySelector(field);
    const width = window.getComputedStyle(slidesWrapper).width;

    let slideIndex = 1;
    let offset = 0;

    function deleteNoDigits(str) {
        return +str.replace(/\D/g, "");
    }

    function setCurrSlideNumber() {
        if (slideIndex < 10) {
            currentSlide.textContent = `0${slideIndex}`;
        } else {
            currentSlide.textContent = slideIndex;
        }
    }

    function setTotalSlidesCount() {
        if (slides.length < 10) {
            totalSlides.textContent = `0${slides.length}`;

        } else {
            totalSlides.textContent = slides.length;
        }
    }

    setTotalSlidesCount();
    setCurrSlideNumber();

    slidesWrapper.style.overflow = "hidden";

    slidesField.style.width = 100 * slides.length + "%";
    slidesField.style.display = "flex";
    slidesField.style.transition = "0.5s all";

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = "relative";

    const dots = document.createElement("ol");
    const dotsArr = [];
    dots.classList.add("slider-dots");
    dots.style.cssText = `
         position: absolute;
         right: 0;
         bottom: 0;
         left: 0;
         z-index: 15;
         display: flex;
         justify-content: center;
         margin-right: 15%;
         margin-left: 15%;
         list-style: none;
     `;
    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("li");
        dot.setAttribute("data-slide-to", i + 1);

        dot.style.cssText = `
             box-sizing: content-box;
             flex: 0 1 auto;
             width: 30px;
             height: 6px;
             margin-right: 3px;
             margin-left: 3px;
             cursor: pointer;
             background-color: #fff;
             background-clip: padding-box;
             border-top: 10px solid transparent;
             border-bottom: 10px solid transparent;
             opacity: .5;
             transition: opacity .6s ease;
         `;
        if ((i + 1) === slideIndex) {
            dot.style.opacity = "1";
        }
        dots.append(dot);
        dotsArr.push(dot);
    }

    next.addEventListener("click", () => {
        if (offset === deleteNoDigits(width) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += deleteNoDigits(width);
        }

        slidesField.style.transform = `translateX(${-offset}px)`;

        if (slideIndex >= slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        setCurrSlideNumber();

        dotsArr.forEach(dot => dot.style.opacity = "0.5");
        dotsArr[slideIndex - 1].style.opacity = "1";
    });

    prev.addEventListener("click", () => {
        if (offset === 0) {
            offset = deleteNoDigits(width) * (slides.length - 1);
        } else {
            offset -= deleteNoDigits(width);
        }

        slidesField.style.transform = `translateX(${-offset}px)`;

        if (slideIndex <= 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        setCurrSlideNumber();

        dotsArr.forEach(dot => dot.style.opacity = "0.5");
        dotsArr[slideIndex - 1].style.opacity = "1";
    });

    dotsArr.forEach(dot => {
        dot.addEventListener("click", e => {
            const slideTo = e.target.getAttribute("data-slide-to");

            slideIndex = slideTo;
            offset = deleteNoDigits(width) * (slideTo - 1);
            slidesField.style.transform = `translateX(${-offset}px)`;

            dotsArr.forEach(dot => dot.style.opacity = "0.5");
            dotsArr[slideIndex - 1].style.opacity = "1";

            setCurrSlideNumber();
        });
    });



    // showSlides(slideIndex);

    // if (slides.length < 10) {
    //     totalSlides.textContent = `0${slides.length}`;
    // } else {
    //     totalSlides.textContent = slides.length;
    // }

    // function showSlides(i) {
    //     if (i > slides.length) {
    //         slideIndex = 1;
    //     }
    //     if (i < 1) {
    //         slideIndex = slides.length;
    //     }

    //     slides.forEach(item => {
    //         item.style.display = "none";
    //     });

    //     slides[slideIndex - 1].style.display = "block";

    //     if (slideIndex < 10) {
    //         currentSlide.textContent = `0${slideIndex}`;
    //     } else {
    //         currentSlide.textContent = slideIndex;
    //     }
    // }

    // function plusSlides(i) {
    //     showSlides(slideIndex += i);
    // }

    // prev.addEventListener("click", () => {
    //     plusSlides(-1);
    // });

    // next.addEventListener("click", () => {
    //     plusSlides(1);
    // });


    //---------------------/sldier---------------------
}

export default slider;