

$(document).ready(function () {

    $('[name="phone"]').inputmask('+7 (999) 999-99-99');


    $('[name="phone"]').attr('type', 'tel');

    $('.js-callback').magnificPopup({
        items: {
            src: '#popup-form',
            type: 'inline'
        }
    });

    $('.js-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: false,
        dots: true,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            }
        ]
    });
    $('.js-popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0,1] // Will preload 0 - before current, and 1 after the current image
        },
        image: {
            tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'

        }
    });

    // якорь
    $(function() {
        $('.menu__item').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });

});


function initMap() {

    var myOptions = {
        zoom: 16,
        center: new google.maps.LatLng(55.128140, 37.547990),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    var myOptions2 = {
        zoom: 16,
        center: new google.maps.LatLng(55.464850, 36.937365),
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions, hotel);

    var map2 = new google.maps.Map(document.getElementById("map_canvas2"),
        myOptions2,  marker2);

    var hotel = {lat: 55.128140, lng: 37.547990};
    var marker = new google.maps.Marker({
        position: hotel,
        map: map
    });

    var hotel2 = {lat: 55.464850, lng: 36.937365};
    var marker2 = new google.maps.Marker({
        position: hotel2,
        map: map2
    });


}

