// app object
let app = {

    // page elements
    elements: {
        body: $("body"),
        nav: $("nav"),
        scrollTopButton: $(".scroll-to-top"),
    },

    // app functions
    functions: {

        // smoothly scroll to top function
        scrollTop: () => {

            // smoothly scroll to the top of the page
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });

            // blur the button after scroll
            document.activeElement.blur();
        },

        // keyboard support for scroll
        scrollTopOnEnter: (keyCode) => {

            // store the codes for both the key pressed and the enter key
            let key = keyCode;
            let enter = 13;

            // if a key is pressed but it is not the enter key, behave normally
            if (key && (key !== enter)) {
                return;
            // if a key is pressed and it is the enter key, scroll to the top of the page
            } else {
                app.scrollTop();
            };
        },

        // toggle classes to hide or show the nav
        toggleNav: () => {
            app.elements.body.toggleClass("nav-open");
            app.elements.nav.toggleClass("active");
        },

        // mobile hamburger nav function
        // hamburgerFunction: () => {

        //     // if nav is closed
        //     if(!app.navUl.style.display){

        //         // open nav
        //         app.hamburger.classList.add('open');
        //         app.body.classList.add('nav-open');
        //         app.navUl.style.display = 'flex';
        //         app.navUl.style.animation = 'fade-in 0.75s';
        //         app.navUl.style.opacity = '1';

        //         // after nav is finished opening
        //         setTimeout(function(){

        //             // remove animation
        //             app.navUl.style.animation = '';

        //         }, 750)

        //     // if nav is open
        //     } else {

        //         // close nav
        //         app.hamburger.classList.remove('open');
        //         app.body.classList.remove('nav-open');
        //         app.navUl.style.animation = 'fade-out 0.75s';

        //         // after nav is finished hiding
        //         setTimeout(function(){

        //             // remove animation, opacity, and display values
        //             app.navUl.style.opacity = '0';
        //             app.navUl.style.display = '';
        //             app.navUl.style.animation = '';

        //         }, 750)

        //     }

        // }
    },

    // app event listeners
    events: () => {

        // on the nav button click, toggle the nav
        app.elements.nav.click(app.functions.toggleNav);

        // scroll up to top of browser window on button click
        app.elements.scrollTopButton.click(app.functions.scrollTop);

    },
    
    // app initializion
    init: () => {

        // add the event listeners
        app.events();
    },
};

// initialize the app
$(document).ready(() => {
    app.init();
});