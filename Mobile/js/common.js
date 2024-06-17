(function ($) {
  "use strict";
  var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var isMobile = {
    Android: function () {
      return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
      return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
  }


  //backToTop
  function backToTop() {
    $(window).scroll(function () {
      if ($(window).scrollTop() >= 200) {
        $('#to_top').fadeIn();
      } else {
        $('#to_top').fadeOut();
      }
    });

    $("#to_top").click(function () {
      $("html, body").animate({
        scrollTop: 0
      });
      return false;
    });
  }
  //resizeSite
  function resizeSite() {
    var checkPoint = 1200,
      windowWidth = $(window).innerWidth();
    // mobile
    if (checkPoint > windowWidth) {

    } else {

    }
  }

  //magnificPopup
  function magnificPopup() {
    $('.open-popup-link').magnificPopup({
      type: 'inline',
      midClick: true,
      mainClass: 'mfp-with-zoom',
      fixedContentPos: false,
      fixedBgPos: true,
      overflowY: 'auto',
      closeBtnInside: true,
      preloader: false,
      removalDelay: 300,
    });
  }


  function searchHome() {
    $(".warp-search").find(".input_search").click(function () {
      $(".warp-search").find('.suggest-search').hide();
      $(".dropdown-content").slideUp();
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $(this).next('.suggest-search').show();
      } else {
        $(this).removeClass("active");
        $(this).next('.suggest-search').hide();
      }
    });
    $(document).click(function () {
      $(".warp-search").find(".input_search").removeClass('active');
      $(".warp-search").find('.suggest-search').hide();
    });
    $(".warp-search .input_search").click(function (event) {
      event.stopPropagation();
    });
  }

  function onClick() {
    
    $(".nav-bar").click(function () {
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
        $('.warp_menu ').removeClass("active");
      } else {
        $(this).removeClass("active");
        $('.warp_menu ').addClass("active");
      }
    });
    
    $(".auto_search_button").click(function () {
      if (!$(this).hasClass('is-clicked')) {
          $(this).addClass('is-clicked');
      } else {
          $(this).removeClass('is-clicked');
      }
      $(".search-wrap").animate({
          width: "toggle"
      });
  }); 
  }

  function tabContainer() {
    $(".tab-default a").click(function (event) {
      $(".tab-default a").removeClass("active")
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
      event.preventDefault();
      var tab = $(this).attr("href");
      $(".tab-container > div").not(tab).css("display", "none");
      $(tab).fadeIn();
    });
  }

  function slideSwiper() {
    //Slide baner
    var slider_baner = new Swiper('.slide_banner .swiper-container', {
      slidesPerView: 1.5,
      spaceBetween: 10,
    });

    //slide nhãn hàng
    var slide_category = new Swiper('.slide_category .swiper-container', {
      slidesPerView: 3.5,
      spaceBetween: 18,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });



    //slide nhãn hàng 2
    var slide_nh = new Swiper('.list-category2 .swiper-container', {
      slidesPerView: 3.5,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });

    //slide product
    var slide_sale = new Swiper('.slide_sale .swiper-container', {
      slidesPerView: 2.2,
      spaceBetween: 7,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      }
    });

    //slide product
    var slide_flash_sale = new Swiper('.flash_sale .swiper-container', {
      slidesPerView: 2.2,
    });

    //slide thương hiệu
    var slide_th = new Swiper('.box-thuong-hieu .swiper-container', {
      slidesPerView: 3,
      loop: true,
      autoplay: {
        delay: 5000,
      },
    });
    
    //slide-product
    var slide_product = new Swiper('#slide-product .swiper-container', {
      slidesPerView: 1,
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });



  }

  function loginForm() {
    $("#login-popup .form .tab").find("a").click(function (event) {
      $("#login-popup .form .tab").find("a").removeClass("active")
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
      event.preventDefault();
      var tab = $(this).attr("href");
      $("#login-popup .form .tab-content").not(tab).css("display", "none");
      $(tab).css("display", "block");
    });
  }

  $(function () {
    backToTop();
    searchHome();
    onClick();
    tabContainer();
    slideSwiper();
    loginForm();
    magnificPopup();
    
  });

  $(window).on('load resize', function () {
    resizeSite()
  });
})(jQuery);