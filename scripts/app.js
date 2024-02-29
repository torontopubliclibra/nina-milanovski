// app object
let app = {

    // page elements
    elements: {
        body: $("body"),
        nav: $("nav"),
    },

    project_1: {
        id: 1,
        currentSlide: 0,
        maxSlide: 0,
        slides: document.querySelectorAll(".project-1 .img-slide"),
        slidetext: document.querySelectorAll(".project-1 .img-text"),
        nextSlide: document.querySelector(".project-1 .img-textbox .img-nav.next"),
        prevSlide: document.querySelector(".project-1 .img-textbox .img-nav.prev"),
    },

    project_2: {
        id: 2,
        currentSlide: 0,
        maxSlide: 0,
        slides: document.querySelectorAll(".project-2 .img-slide"),
        slidetext: document.querySelectorAll(".project-2 .img-text"),
        nextSlide: document.querySelector(".project-2 .img-textbox .img-nav.next"),
        prevSlide: document.querySelector(".project-2 .img-textbox .img-nav.prev"),
    },
    project_3: {
        id: 3,
        currentSlide: 0,
        maxSlide: 0,
        slides: document.querySelectorAll(".project-3 .img-slide"),
        slidetext: document.querySelectorAll(".project-3 .img-text"),
        nextSlide: document.querySelector(".project-3 .img-textbox .img-nav.next"),
        prevSlide: document.querySelector(".project-3 .img-textbox .img-nav.prev"),
    },
    project_4: {
        id: 4,
        currentSlide: 0,
        maxSlide: 0,
        slides: document.querySelectorAll(".project-4 .img-slide"),
        slidetext: document.querySelectorAll(".project-4 .img-text"),
        nextSlide: document.querySelector(".project-4 .img-textbox .img-nav.next"),
        prevSlide: document.querySelector(".project-4 .img-textbox .img-nav.prev"),
    },

    // app functions
    functions: {

        // change image carousel slide text function
        changeSlideText: (id) => {

            // loop through all the slide text
            app[`project_${id}`].slidetext.forEach((text, index) => {

                // if the text matches the currently displayed image
                if (index === app[`project_${id}`].currentSlide){

                    // display that text
                    text.style.display = `initial`;
                } else {

                    // otherwise hide it
                    text.style.display = `none`;
                }
            })
        },

        // image carousel previous slide button function
        prevSlideFunction: (id) => {

            // if the current slide is the first
            if (app[`project_${id}`].currentSlide === 0) {

                // change it to the last slide
                app[`project_${id}`].currentSlide = app[`project_${id}`].maxSlide;
            } else {

                // otherwise move back one slide
                app[`project_${id}`].currentSlide--;
            }

            // loop through image carousel slide images
            app[`project_${id}`].slides.forEach((slide, index) => {

                // move them all back by one slide
                slide.style.transform = `translateX(${100 * (index - app[`project_${id}`].currentSlide)}%)`;
            });

            // update slide text to current slide
            app.functions.changeSlideText(id);

        },

        // image carousel next slide button function
        nextSlideFunction: (id) => {

            // if the current slide is the last
            if (app[`project_${id}`].currentSlide === app[`project_${id}`].maxSlide) {

                // change it to the first slide
                app[`project_${id}`].currentSlide = 0;

            } else {

                // otherwise move forward one slide
                app[`project_${id}`].currentSlide++;
            }

            // loop through image carousel slide images
            app[`project_${id}`].slides.forEach((slide, index) => {

                // move them all forward by one slide
                slide.style.transform = `translateX(${100 * (index - app[`project_${id}`].currentSlide)}%)`;

            });

            // update slide text to current slide
            app.functions.changeSlideText(id);

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

        if (app.project_1.maxSlide > 0) {
            app.project_1.prevSlide.addEventListener('click', () => app.functions.prevSlideFunction(1));
        }

        if (app.project_2.maxSlide > 0) {
            app.project_2.prevSlide.addEventListener('click', () => app.functions.prevSlideFunction(2));
        }

        if (app.project_3.maxSlide > 0) {
            app.project_3.prevSlide.addEventListener('click', () => app.functions.prevSlideFunction(3));
        }

        if (app.project_4.maxSlide > 0) {
            app.project_4.prevSlide.addEventListener('click', () => app.functions.prevSlideFunction(4));
        }

    },
    
    // app initializion
    init: () => {

        app.project_1.currentSlide = 0,
        app.project_2.currentSlide = 0,
        app.project_3.currentSlide = 0,
        app.project_4.currentSlide = 0,

        app.project_1.maxSlide = app.project_1.slides.length - 1,
        app.project_2.maxSlide = app.project_2.slides.length - 1,
        app.project_3.maxSlide = app.project_3.slides.length - 1,
        app.project_4.maxSlide = app.project_4.slides.length - 1,

        app.project_1.slides.forEach((slide, index) => {

            // place the images end to end on the page
            slide.style.transform = `translateX(${index * 100}%)`;
        
            // add animation property to the images
            slide.style.animation = `fade-in 1s`;
        
            // once images have loaded, display them on the page
            slide.style.display = `block`;
        });

        app.project_2.slides.forEach((slide, index) => {

            // place the images end to end on the page
            slide.style.transform = `translateX(${index * 100}%)`;
        
            // add animation property to the images
            slide.style.animation = `fade-in 1s`;
        
            // once images have loaded, display them on the page
            slide.style.display = `block`;
        });

        app.project_3.slides.forEach((slide, index) => {

            // place the images end to end on the page
            slide.style.transform = `translateX(${index * 100}%)`;
        
            // add animation property to the images
            slide.style.animation = `fade-in 1s`;
        
            // once images have loaded, display them on the page
            slide.style.display = `block`;
        });

        app.project_4.slides.forEach((slide, index) => {

            // place the images end to end on the page
            slide.style.transform = `translateX(${index * 100}%)`;
        
            // add animation property to the images
            slide.style.animation = `fade-in 1s`;
        
            // once images have loaded, display them on the page
            slide.style.display = `block`;
        });

        // update slide text to current slide
        app.functions.changeSlideText(1);
        app.functions.changeSlideText(2);
        app.functions.changeSlideText(3);
        app.functions.changeSlideText(4);

        // add the event listeners
        app.events();
    },
};

// initialize the app
$(document).ready(() => {
    app.init();
});