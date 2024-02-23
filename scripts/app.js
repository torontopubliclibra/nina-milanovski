// app object
let app = {

    currentSlide: 0,
    maxSlide: 0,

    // page elements
    elements: {
        body: $("body"),
        nav: $("nav"),
        slides: document.querySelectorAll(".img-slide"),
        slidetext: document.querySelectorAll(".img-text"),
        nextSlide: document.querySelector(".next"),
        prevSlide: document.querySelector(".prev"),
    },

    // app functions
    functions: {

        // change image carousel slide text function
        changeSlideText: () => {

            // loop through all the slide text
            app.elements.slidetext.forEach((text, index) => {

                // if the text matches the currently displayed image
                if (index === app.currentSlide){

                    // display that text
                    text.style.display = `initial`;
                } else {

                    // otherwise hide it
                    text.style.display = `none`;
                }
            })
        },

        // image carousel previous slide button function
        prevSlideFunction: () => {

            // if the current slide is the first
            if (app.currentSlide === 0) {

                // change it to the last slide
                app.currentSlide = app.maxSlide;
            } else {

                // otherwise move back one slide
                app.currentSlide--;
            }

            // loop through image carousel slide images
            app.elements.slides.forEach((slide, index) => {

                // move them all back by one slide
                slide.style.transform = `translateX(${100 * (index - app.currentSlide)}%)`;
            });

            // update slide text to current slide
            app.functions.changeSlideText();

        },

        // image carousel next slide button function
        nextSlideFunction: () => {

            // if the current slide is the last
            if (app.currentSlide === app.maxSlide) {

                // change it to the first slide
                app.currentSlide = 0;

            } else {

                // otherwise move forward one slide
                app.currentSlide++;
            }

            // loop through image carousel slide images
            app.elements.slides.forEach((slide, index) => {

                // move them all forward by one slide
                slide.style.transform = `translateX(${100 * (index - app.currentSlide)}%)`;

            });

            // update slide text to current slide
            app.functions.changeSlideText();

        },

        // toggle classes to hide or show the nav
        toggleNav: () => {
            app.elements.body.toggleClass("nav-open");
            app.elements.nav.toggleClass("active");
        },
    },

    // app event listeners
    events: () => {

        // on the nav button click, toggle the nav
        app.elements.nav.click(app.functions.toggleNav);

        // add event listener to image carousel previous slide button
        if (app.elements.prevSlide) {

            app.elements.prevSlide.addEventListener('click', app.functions.prevSlideFunction);
        }

        // add event listener to image carousel next slide button
        if (app.elements.nextSlide) {
            app.elements.nextSlide.addEventListener('click', app.functions.nextSlideFunction);
        }

    },
    
    // app initializion
    init: () => {

        app.currentSlide = 0,
        app.maxSlide = app.elements.slides.length - 1,

        app.elements.slides.forEach((slide, index) => {

            // place the images end to end on the page
            slide.style.transform = `translateX(${index * 100}%)`;
        
            // add animation property to the images
            slide.style.animation = `fade-in 1s`;
        
            // once images have loaded, display them on the page
            slide.style.display = `block`;
        });

        // update slide text to current slide
        app.functions.changeSlideText();

        // add the event listeners
        app.events();
    },
};

// initialize the app
$(document).ready(() => {
    app.init();
});