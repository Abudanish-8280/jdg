$(document).ready(function () {
    $('.team-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        nav: false,
        pauseOnHover: false,
        prevArrow: '<div class="team_arrow team_prevarrow"><img src="assets/images/leftarrow.png"></div>',
        nextArrow: '<div class="team_arrow team_nextarrow"><img src="assets/images/rightarrow.png"></div>',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                arrows: false,
                dots: true,
            }
        }]
    });
});




$(document).ready(function () {
    $('.whatwedo-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        arrows: true,
        dots: false,
        nav: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 1
            }
        }, {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }]
    });
    $('a[data-bs-toggle="pill"]').on('shown.bs.tab', function (e) {
        $('.whatwedo-slider').slick('setPosition');
      })
});

