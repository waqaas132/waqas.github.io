$(document).ready(function () {


    $('#menu').click(function () {
        // $(this).toggleClass('fa fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        // $('#menu').removeClass(' fa-times');
        $('header').removeClass('toggle');
    });


});