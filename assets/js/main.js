(function ($) {
    "use strict";

    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Search Popup JS
    $('.search-close-btn').on('click', function () {
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.search-close-btn').removeClass('active');
    });
    $('.search-btn').on('click', function () {
        $(this).hide();
        $('.search-overlay').fadeIn();
        $('.search-close-btn').addClass('active');
    });

    // Header Sticky
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 5) {
            $('.navbar-area').addClass("is-sticky");
        }
        else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Home Slides
    $('.home-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: true,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 750,
        autoHeight: true,
        items: 1,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    });
    $(".home-slides").on("translate.owl.carousel", function () {
        $(".main-banner-content span").removeClass("animated animate__fadeInDown").css("opacity", "0");
        $(".main-banner-content h1").removeClass("animated animate__fadeInUp").css("opacity", "0");
        $(".main-banner-content p").removeClass("animated animate__fadeInUp").css("opacity", "0");
        $(".main-banner-content .btn-box").removeClass("animated animate__fadeInUp").css("opacity", "0");
    });
    $(".home-slides").on("translated.owl.carousel", function () {
        $(".main-banner-content span").addClass("animated animate__fadeInDown").css("opacity", "1");
        $(".main-banner-content h1").addClass("animated animate__fadeInUp").css("opacity", "1");
        $(".main-banner-content p").addClass("animated animate__fadeInUp").css("opacity", "1");
        $(".main-banner-content .btn-box").addClass("animated animate__fadeInUp").css("opacity", "1");
    });

    // Video Popup JS
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Nice Select JS
    $('select').niceSelect();


    // Doctor Slides
    $('.doctor-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        margin: 30,
        navText: [
            "<i class='flaticon-left-arrow'></i>",
            "<i class='flaticon-arrow-pointing-to-right'></i>",
        ],
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });

    // FAQ Accordion
    $(function () {
        $('.accordion').find('.accordion-title').on('click', function () {
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('fast');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });

    // Feedback Carousel
    var $imagesSlider = $(".feedback-slides .client-feedback>div"),
        $thumbnailsSlider = $(".client-thumbnails>div");
    // Images Options
    $imagesSlider.slick({
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        fade: true,
        autoplay: true,
        draggable: true,
        rtl: true,
        asNavFor: ".client-thumbnails>div",
        prevArrow: '.client-feedback .prev-arrow',
        nextArrow: '.client-feedback .next-arrow'
    });
    // Thumbnails Options
    $thumbnailsSlider.slick({
        speed: 300,
        rtl: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        cssEase: 'linear',
        autoplay: true,
        centerMode: true,
        draggable: false,
        focusOnSelect: true,
        asNavFor: ".feedback-slides .client-feedback>div",
        prevArrow: '.client-thumbnails .prev-arrow',
        nextArrow: '.client-thumbnails .next-arrow',
    });
    var $caption = $('.feedback-slides .caption');
    var captionText = $('.client-feedback .slick-current img').attr('alt');
    updateCaption(captionText);
    $imagesSlider.on('beforeChange', function (event, slick, currentSlide, nextSlide) {
        $caption.addClass('hide');
    });
    $imagesSlider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        captionText = $('.client-feedback .slick-current img').attr('alt');
        updateCaption(captionText);
    });
    function updateCaption(text) {
        // If empty, add a no breaking space
        if (text === '') {
            text = '&nbsp;';
        }
        $caption.html(text);
        $caption.removeClass('hide');
    }

    // Tabs
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    // Input Plus & Minus Number JS
    $('.input-counter').each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find('.plus-btn'),
            btnDown = spinner.find('.minus-btn'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // Subscribe form
    $(".newsletter-form").validator().on("submit", function (event) {
        if (event.isDefaultPrevented()) {
            // handle the invalid form...
            formErrorSub();
            submitMSGSub(false, "Please enter your email address.");
        } else {
            // everything looks good!
            event.preventDefault();
        }
    });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        }
        else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }


    // Go to Top
    $(function () {
        // Scroll Event
        $(window).on('scroll', function () {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        // Click Event
        $('.go-top').on('click', function () {
            $("html, body").animate({ scrollTop: "0" }, 500);
        });
    });

    // WOW JS
    $(window).on('load', function () {
        if ($(".wow").length) {
            var wow = new WOW({
                boxClass: 'wow',
                animateClass: 'animated',
                offset: 20,
                mobile: true,
                live: true,
            });
            wow.init();
        }
    });

    // Preloader
    $(window).on('load', function () {
        $('.preloader').addClass('preloader-deactivate');
    });


    $(document).ready(function () {
        $('#bmiForm').on('submit', function (e) {
            e.preventDefault();

            const heightInput = $('#height').val();
            const weightInput = $('#weight').val();

            if (!heightInput || !weightInput || heightInput <= 0 || weightInput <= 0) {
                alert("الرجاء إدخال قيم صحيحة للطول والوزن.");
                return;
            }

            const heightInMeters = heightInput / 100;
            const bmi = (weightInput / (heightInMeters * heightInMeters)).toFixed(2);

            let category = '';
            let percentage = 0;

            if (bmi < 18.5) {
                category = 'وزن ناقص';
                percentage = (bmi / 18.5) * 16.666;
            } else if (bmi >= 18.5 && bmi < 25) {
                category = 'وزن صحي';
                percentage = 16.666 + ((bmi - 18.5) / (24.9 - 18.5)) * 16.666;
            } else if (bmi >= 25 && bmi < 30) {
                category = 'وزن زائد';
                percentage = 33.333 + ((bmi - 25) / (29.9 - 25)) * 16.666;
            } else if (bmi >= 30 && bmi < 35) {
                category = 'سمنة الدرجة الأولى';
                percentage = 50 + ((bmi - 30) / (34.9 - 30)) * 16.666;
            } else if (bmi >= 35 && bmi < 40) {
                category = 'سمنة الدرجة الثانية';
                percentage = 66.666 + ((bmi - 35) / (39.9 - 35)) * 16.666;
            } else {
                category = 'سمنة درجة ثالثة';
                percentage = 83.333 + ((bmi - 40) / 10) * 16.666;
            }

            percentage = Math.min(Math.max(percentage, 0), 100);

            $('.status').text(`مؤشر كتلة جسمك: ${bmi} - ${category}`);
            $('.status').css('background-color',
                category === 'وزن ناقص' ? 'lightblue' :
                    category === 'وزن صحي' ? 'lightgreen' :
                        category === 'وزن زائد' ? 'yellow' :
                            category === 'سمنة الدرجة الأولى' ? 'orange' :
                                category === 'سمنة الدرجة الثانية' ? 'red' : 'darkred');
            $('.layout').fadeIn();

            $('.calc_info_line_result_wrapper').css('right', `${percentage}%`);
        });

        // Close the result box on "X" click
        $('.fa-xmark').on('click', function () {
            resetLayout();
        });

        // Close the result box if clicked outside the .result box
        $(document).on('click', function (e) {
            const layout = $('.layout');
            const resultBox = $('.result');

            if (layout.is(':visible') && !resultBox.is(e.target) && resultBox.has(e.target).length === 0) {
                resetLayout();
            }
        });

        function resetLayout() {
            $('.layout').fadeOut();
            $('.calc_info_line_result_wrapper').css('right', '0');
        }
    });




    /* Popup Video */
    if ($('.popup-video').length) {
        $('.popup-video').magnificPopup({
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true
        });
    }

    /* Zoom Gallery screenshot */
    $('.gallery-items').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            opener: function (element) {
                return element.find('img');
            }
        }
    });

    // $(document).ready(function () {
    //     // Disable Ctrl+U
    //     $(document).on("keydown", function (event) {
    //         if (event.ctrlKey && event.key.toLowerCase() === "u") {
    //             event.preventDefault();
    //             alert("View Source is disabled!");
    //         }
    //         // Disable Ctrl+Shift+I (Developer Tools)
    //         if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
    //             event.preventDefault();
    //             alert("Developer Tools are disabled!");
    //         }
    //         // Disable Ctrl+Shift+C (Inspect Element)
    //         if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "c") {
    //             event.preventDefault();
    //             alert("Inspect Element is disabled!");
    //         }
    //         // Disable F12 (Developer Tools)
    //         if (event.key === "F12") {
    //             event.preventDefault();
    //             alert("Developer Tools are disabled!");
    //         }
    //     });

    //     // Disable right-click
    //     $(document).on("contextmenu", function (event) {
    //         event.preventDefault();
    //         alert("Right-click is disabled!");
    //     });
    // });


}(jQuery));