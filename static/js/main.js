//body preloader
$(window).on('load', function () {
  setTimeout(function () { // allowing 3 secs to fade out loader
    $('.page-loader').fadeOut('slow');
  }, 3000);
  setTimeout(function () { // allowing 1.5 secs to fade out loader
    $(".loader").delay(200).fadeOut("slow");
  }, 1500);
});
// aa


// reveal effect js
gsap.to(".bar", 1.5, {
  delay: 1.5,
  height: 0,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

// wow js
$(document).ready(function () {
  wow = new WOW(
    {
      boxClass: 'wow',      // default
      animateClass: 'animated', // default
      offset: 0,          // default
      mobile: true,       // default
      live: true        // default
    }
  )
  wow.init();
});

// On Scroll back to top button
$(window).on('scroll', function () {
  // Back Top Button
  if ($(window).scrollTop() > 1500) {
    $('.scrollup').addClass('back-top');
  } else {
    $('.scrollup').removeClass('back-top');
  }
});
// On Click Section Switch
// used for back-top
$('[data-type="section-switch"]').on('click', function () {
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    if (target.length > 0) {

      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

// video frame open popup
jQuery(document).ready(function ($) {
  // Define App Namespace
  var popup = {
    // Initializer
    init: function () {
      popup.popupVideo();
    },
    popupVideo: function () {

      $('.video_model').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });

      // Image Gallery Popup
      $('.gallery_container').magnificPopup({
        delegate: 'a',
        type: 'image',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        gallery: {
          enabled: true
        }
      });

    }
  };
  popup.init($);
  // video button - object
  $('#video-button').magnificPopup({
    items: {
      src: 'https://www.youtube.com/watch?v=pBFQdxA-apI'
    },
    type: 'iframe' // this is default type
  });
});
// hero single slider
$('#hero-single-slider').owlCarousel({
  loop: true,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  mouseDrag: false,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});
//review slider
$('#carouselReview').owlCarousel({
  loop: false,
  margin: 30,
  nav: true,
  dots: false,
  items: 1,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});
//partner slider
$('#carouselPartner').owlCarousel({
  margin: 30,
  dots: false,
  nav: false,
  loop: true,
  autoplay: false,
  autoplaySpeed: 2000,
  items: 6,
  responsive: {
    0: {
      items: 2,
      center: true,
    },
    600: {
      items: 3
    },
    1000: {
      items: 6
    }
  }
});
//trending game slider
$('#carouselTrending').owlCarousel({
  loop: false,
  margin: 20,
  nav: true,
  dots: false,
  items: 3,
  navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
  navContainer: '.trending .custom-nav',
  responsive: {
    0: {
      items: 1
    },
    1000: {
      items: 2
    },
    1200: {
      items: 3
    }
  }
});
//streaming video slider
$('#carouselStream').owlCarousel({
  loop: true,
  center: true,
  margin: 50,
  nav: false,
  dots: false,
  items: 2,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 2
    }
  }
});

//streamer slider
$('#carouselStreamer').owlCarousel({
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
});

// cursor dot js
var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor-f');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function (e) {
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function () {
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function () {
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

// mobile menu & header, tab js
!function (f) {
  "use strict";
  if (f(window).on("load", function () {

  }),
    f(".menu-wrap li.menu-item-children ul").length && f(".menu-wrap .navigation li.menu-item-children").append('<div class="down-btn"><span class="plus"></span></div>'),
    f(".mobile-menu").length) {
    var x, y, z, a, b = f(".menu-wrap .main-menu").html();
    f(".mobile-menu .mobile-menu-box .mobile-menu-wrap").append(b),
      f(".mobile-menu li.menu-item-children .down-btn").on("click", function () {
        f(this).toggleClass("open"),
          f(this).prev("ul").slideToggle(300)
      }),
      f(".nav-toggle").on("click", function () {
        f("body").addClass("mobile-menu-open")
      }),
      f(".mobile-menu-ovelay, .mobile-menu .close-btn").on("click", function () {
        f("body").removeClass("mobile-menu-open")
      })
  }

  x = f(window),
    y = 0,
    a = (z = f("#sticky-header")).outerHeight() + 30,
    x.scroll(function () {
      var f = x.scrollTop();
      f >= a ? z.addClass("sticky-menu") : (z.removeClass("sticky-menu"),
        z.removeClass("sticky-show")),
        z.hasClass("sticky-menu") && (f < y ? z.addClass("sticky-show") : z.removeClass("sticky-show")),
        y = f
    }),

    f(".menu-second .search").length && (f(".menu-second .search").on("click", function () {
      return f("body").addClass("search-open"),
        !1
    }),

      f(".search-close").on("click", function () {
        f("body").removeClass("search-open")
      })),

    f(".search a, .side-toggle, .nav-toggle, .down-btn").on("click", () => new Audio("assets/audio/open.mp3").play()),
    f(".search-close, .offCanvas-close, .offCanvas-overlay, .close-btn").on("click", () => new Audio("assets/audio/close.mp3").play()),
    f(".game-tab ul button").on("click", () => new Audio("assets/audio/tab.mp3").play()),

    f(".side-toggle").on("click", function () {
      f("body").addClass("offCanvas-open")
    }),
    f(".offCanvas-overlay, .offCanvas-close").on("click", function () {
      f("body").removeClass("offCanvas-open")
    }),
    !1

  f(".shop-model-list li").on("click", function () {
    f(this).siblings(".active").removeClass("active"),
      f(this).addClass("active"),
      x.preventDefault()
  }), !1

}(jQuery);

//product details - slider
$('.carouselProduct').owlCarousel({
  items: 1,
  loop: false,
  center: true,
  margin: 10,
  URLhashListener: true,
  autoplayHoverPause: true,
  startPosition: 'URLHash'
});

//gallery - tournament details Slider
$('#carouselGalleryPost').owlCarousel({
  dots: false,
  nav: true,
  items: 3,
  loop: true,
  center: true,
  margin: 20,
  autoplay: true,
  autoplayTimeout: 3000,
  autoplayHoverPause: true
});

// zoom product gallery
function zoom(e) {
  var zoomer = e.currentTarget;
  e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
  e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
  x = offsetX / zoomer.offsetWidth * 100
  y = offsetY / zoomer.offsetHeight * 100
  zoomer.style.backgroundPosition = x + '% ' + y + '%';
}

// plus minus button
$(document).ready(function () {
  $('.button-minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $('.button-plus').click(function () {
    var $input = $(this).parent().find('input');
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

});

// Background Set
$('.set-bg').each(function () {
  var bg = $(this).data('setbg');
  $(this).css('background-image', 'url(' + bg + ')');
});


