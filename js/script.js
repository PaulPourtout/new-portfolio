$(document).ready(function() {

    // AU CLIQUE DANS LES BOUTONS DU MENU LA PAGE SCROLL VERS LA SECTION VISEE
    // SECTION HOME
    $('#btn-home').click(function() {
        $("html,body").animate({
            scrollTop: $('#home').offset().top
        }, 500);
    });
    // SECTION A PROPOS
    $('#btn-a-propos').click(function() {
        $(this).addClass('');
        $('html, body').animate({
            scrollTop: $('#a-propos').offset().top
        }, 500);
    });
    // SECTION COMPETENCES
    $('#btn-competences').click(function() {
        $('html, body').animate({
            scrollTop: $('#competences').offset().top
        }, 500);
    });
    // SECTION PORTFOLIO
    $("#btn-portfolio").click(function() {
        $("html, body").animate({
            scrollTop: $('#portfolio').offset().top
        }, 500);
    });
    // SECTION CONTACT
    $("#btn-contact").click(function() {
        $("html, body").animate({
            scrollTop: $("#contact").offset().top
        }, 500);
        return true;
    });


    // Au clique sur fleche la page scroll à la prochaine section
    $('#arrow-to-a-propos').click(function() {
        $('html, body').animate({
            scrollTop: $('#a-propos').offset().top
        }, 500);
    });

    $('#arrow-to-competences').click(function() {
        $('html, body').animate({
            scrollTop: $('#competences').offset().top
        }, 500);
    });

    $('#arrow-to-portfolio').click(function() {
        $('html, body').animate({
            scrollTop: $('#portfolio').offset().top
        }, 500);
    });

    $('#arrow-to-contact').click(function() {
        $('html, body').animate({
            scrollTop: $('#contact').offset().top
        }, 500);
    });



    // fadeIn ou fadeOut du bouton scroll-top-arrow

    var lastScroll = 0;
    var scrollTopArrow = $('#scroll-top-arrow');
    scrollTopArrow.css('opacity', '0');

    $(window).bind('scroll', function() {
        var currentScroll = $(document).scrollTop();
        if (currentScroll > lastScroll) {
            scrollTopArrow.fadeIn();
            console.log("--- lastScroll : " + lastScroll);
            console.log("currentScroll : " + currentScroll);
        } else {
            scrollTopArrow.fadeOut();
            console.log("--- lastScroll : " + lastScroll);
            console.log("currentScroll : " + currentScroll);
        }
        lastScroll = currentScroll;
    });

});
