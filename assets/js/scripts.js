(function ($) {

    /**----- Preloader -----**/

    $(window).on('load', function() {
        setTimeout(function() {
            $(".preloader").fadeOut('slow');
        }, 600);
    });

    /**-------------------- Back Top ----------------------**/

    $(window).scroll(function(){
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        $('html').css("scrollBehavior", "auto");
    });
    
    /**----- Scrollspy Navbar -----**/

    $('body').scrollspy({target: ".navbar-nav", offset: 67});

    $(".navbar-nav a").on('click', function(event) {
        if (this.hash !== "") {

            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                window.location.hash = hash;
            });
            
            $(".navbar-collapse").collapse("hide");
        }
    });

    /**----- Carousel Products -----**/

    $('#products-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    /**----- Carousel Testimonial -----**/

    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        dots:false,
        autoplay:true,
        smartSpeed:1000,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:2
            }
        }
    });

})(jQuery);

/**----- Style Switcher -----**/

function setActiveStyle(colorName) {
    $(".alternate-style").attr("disabled", "true");
    $(".alternate-style[title="+colorName+"]").removeAttr("disabled");
}

$(".style-switcher-toggle").click(function() {
    $(".style-switcher").toggleClass("open")
});