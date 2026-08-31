(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner(0);
    
    // Initiate the wowjs
    if (typeof WOW !== 'undefined') {
        new WOW().init();
    }

    // Smooth scroll for nav links & back to top
    $('.navbar-nav a.nav-link[href^="#"], a.btn[href^="#"]').on('click', function (e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 20
            }, 800);
        }
    });

    // Active link highlighting on scroll
    $(window).on('scroll', function () {
        var scrollPos = $(window).scrollTop() + 100;
        $('.navbar-nav a.nav-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            if (refElement.length) {
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $('.navbar-nav a.nav-link').removeClass("active");
                    currLink.addClass("active");
                }
            }
        });

        // Back to top button visibility
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

})(jQuery);
