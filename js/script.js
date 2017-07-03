$(document).ready(function() {
    var button = $('.share-social');
    var urlService = $('.service-block');
    var portfolioBox = $('.portfolio-box');
    var pageWrapper = $('.page-wrapper');

    function dropdownSocial() {
        button.on('click', function(event) {

            event.preventDefault();

            $(this).parent().toggleClass('active');
        });
    }

    function redirectService() {
        urlService.on('click', function() {
            var url = $(this).data('url');
            window.location.href = url;
        });
    }

    function porfoMixed() {
        $('a.filter').on('click', function(event) {
            event.preventDefault();
        });

        portfolioBox.mixItUp({
            animation: {
                duration: 400,
                effects: 'fade stagger(34ms) scale(0.79) rotateY(20deg) translateZ(-520px)',
                easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)'
            }
        });
    }

    function loading(time) {
        setTimeout(function(){
            pageWrapper.removeClass('loading').addClass('loaded');
            $('body').addClass('layout-switch');
            setTimeout(function(){
                $('body').removeClass('no-scroll');
            }, 1500);            
        },3000);
    }

    // init function
    dropdownSocial();
    redirectService();
    porfoMixed();
    loading();
});
