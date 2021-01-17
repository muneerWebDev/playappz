$(document).ready(function () {

    $("body").niceScroll({
        cursorcolor: "#0A004B",
        cursorwidth: "2px",
        background: "#0A7DFC",
        cursorborder: "0px",
        cursorborderradius: 2
    });

    $(".navbar-nav li a").on('click', function (e) {

        var full_url = this.href;
        var parts = full_url.split("#");
        var trgt = parts[1];
        var target_offset = $("#" + trgt).offset();
        var target_top = target_offset.top;
    
        $('html,body').animate({
          scrollTop: target_top - 130
        }, 1000);
    
        $(".navbar-collapse").removeClass("show collapse");
        return false;
      });

    if($(window).scrollTop()>2){
        $('body').addClass("scrolled");
    }else{
        $('body').removeClass("scrolled");
    }
    $(window).scroll(function(){
        if($(window).scrollTop()>2){
            $('body').addClass("scrolled");
        }else{
            $('body').removeClass("scrolled");
        }
    });

    //loading-anim
    $("body .banner .curve-bg .image").addClass("loaded");
    $("body").delay(1000).addClass("loaded");


    //slider-init
    $(".banner .slider").slick({
        autoplay: true,
        arrows: true,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
    });

    //outside-of-container-sliders-margin
    var containerOffset = $(".services .container").css("margin-left");
    $(".services .slider,.latest-blogs .slider").css('margin-left', parseInt(containerOffset) + 15);
    $(".services .slider,.latest-blogs .slider").slick({
        slidesToShow: 3,
        SlidesToScroll: 1,
        autoplay: true,
        prevArrow: "<button type='button' class='slick-prev pull-left big-blue'><img class='img-fluid' src='images/icons/back.png'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right big-blue'><img class='img-fluid' src='images/icons/back.png'></button>",
        responsive: [{
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })

    $(".case-study .slider").slick({
        dots: true,
        autoplay: true,
        loop: false,
        infinite: false,
        centerMode: false,
        prevArrow: "<button type='button' class='slick-prev pull-left big-blue'><img class='img-fluid' src='images/icons/back.png'></button>",
        nextArrow: "<button type='button' class='slick-next pull-right big-blue'><img class='img-fluid' src='images/icons/back.png'></button>",
        responsive: [{
                breakpoint: 767,
                settings: {
                    dots: false
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    })

    if ($(window).width() < 768) {
        $(".development-cycle .connectors-wrap").remove();
    }

    $(".development-cycle .content .row").slick({
        arrows: false,
        responsive: [{
                breakpoint: 9999,
                settings: "unslick"
            },
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });


    $(".testimonials .slider").slick({
        arrows: false,
        dots: true
    })
    new WOW().init({
        callback: function (box) {
            $('.block-animate').addClass('block-initiate-animation');
        }
    });
});