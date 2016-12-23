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

});
