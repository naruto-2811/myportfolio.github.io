 
(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 17;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // Header scroll class
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#header').addClass('header-scrolled');
    } else {
      $('#header').removeClass('header-scrolled');
    }
  });



 jQuery(function ($) {
  $('a.sywh-open-services').click(function () {
    if ($('.sywh-services').hasClass('active')) {
      $('.sywh-services').removeClass('active');
      $('a.sywh-open-services i.fa-times').hide();
      $('a.sywh-open-services i.fa-comments').show();
      $('a.sywh-open-services').removeClass('data-tooltip-hide');
      $('.sywh-services a:nth-child(1)').delay(0).fadeOut();
      $('.sywh-services a:nth-child(2)').delay(100).fadeOut();
      $('.sywh-services a:nth-child(3)').delay(200).fadeOut();
      $('.sywh-services a:nth-child(4)').delay(300).fadeOut();
      $('.sywh-services a:nth-child(5)').delay(400).fadeOut();
    } else {
      $('.sywh-services').addClass('active');
      $('a.sywh-open-services i.fa-comments').hide();
      $('a.sywh-open-services i.fa-times').show();
      $('a.sywh-open-services').addClass('data-tooltip-hide');
      $('.sywh-services a:nth-child(5)').delay(0).fadeIn();
      $('.sywh-services a:nth-child(4)').delay(100).fadeIn();
      $('.sywh-services a:nth-child(3)').delay(200).fadeIn();
      $('.sywh-services a:nth-child(2)').delay(300).fadeIn();
      $('.sywh-services a:nth-child(1)').delay(400).fadeIn();
    }
  });
});








  

  if ($(window).scrollTop() > 100) {
    $('#header').addClass('header-scrolled');
  }

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Intro carousel
  var introCarousel = $(".carousel");
  var introCarouselIndicators = $(".carousel-indicators");
  introCarousel.find(".carousel-inner").children(".carousel-item").each(function(index) {
    (index === 0) ?
    introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "' class='active'></li>"):
      introCarouselIndicators.append("<li data-target='#introCarousel' data-slide-to='" + index + "'></li>");
  });

  introCarousel.on('slid.bs.carousel', function(e) {
    $(this).find('h2').addClass('animate__animated animate__fadeInDown');
    $(this).find('p, .btn-get-started').addClass('animate__animated animate__fadeInUp');
  });

  // Skills section
  $('#skills').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // jQuery counterUp (used in Facts section)
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Porfolio isotope and filter
  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-item',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on('click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({
      filter: $(this).data('filter')
    });
    aos_init();
  });

  // Initiate venobox (lightbox feature used in portofilo)
  $(document).ready(function() {
    $('.venobox').venobox();
  });

  // Clients carousel (uses the Owl Carousel library)
  $(".clients-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 2
      },
      768: {
        items: 4
      },
      900: {
        items: 6
      }
    }
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);




function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

 

  (function(){var gtConstEvalStartTime = new Date();/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var h=this||self,l=/^[\w+/_-]+[=]{0,2}$/,m=null;function n(a){return(a=a.querySelector&&a.querySelector("script[nonce]"))&&(a=a.nonce||a.getAttribute("nonce"))&&l.test(a)?a:""}function p(a,b){function c(){}c.prototype=b.prototype;a.c=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.b=function(g,f,k){for(var e=Array(arguments.length-2),d=2;d<arguments.length;d++)e[d-2]=arguments[d];return b.prototype[f].apply(g,e)}}function q(a){return a};function r(a){if(Error.captureStackTrace)Error.captureStackTrace(this,r);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}p(r,Error);r.prototype.name="CustomError";function u(a,b){a=a.split("%s");for(var c="",g=a.length-1,f=0;f<g;f++)c+=a[f]+(f<b.length?b[f]:"%s");r.call(this,c+a[g])}p(u,r);u.prototype.name="AssertionError";function v(a,b){throw new u("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var w;function x(a,b){this.a=b===y?a:""}x.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"};var y={};function z(a){var b=document.getElementsByTagName("head")[0];b||(b=document.body.parentNode.appendChild(document.createElement("head")));b.appendChild(a)}
function _loadJs(a){var b=document;var c="SCRIPT";"application/xhtml+xml"===b.contentType&&(c=c.toLowerCase());c=b.createElement(c);c.type="text/javascript";c.charset="UTF-8";if(void 0===w){b=null;var g=h.trustedTypes;if(g&&g.createPolicy){try{b=g.createPolicy("goog#html",{createHTML:q,createScript:q,createScriptURL:q})}catch(t){h.console&&h.console.error(t.message)}w=b}else w=b}a=(b=w)?b.createScriptURL(a):a;a=new x(a,y);a:{try{var f=c&&c.ownerDocument,k=f&&(f.defaultView||f.parentWindow);k=k||h;
if(k.Element&&k.Location){var e=k;break a}}catch(t){}e=null}if(e&&"undefined"!=typeof e.HTMLScriptElement&&(!c||!(c instanceof e.HTMLScriptElement)&&(c instanceof e.Location||c instanceof e.Element))){e=typeof c;if("object"==e&&null!=c||"function"==e)try{var d=c.constructor.displayName||c.constructor.name||Object.prototype.toString.call(c)}catch(t){d="<object could not be stringified>"}else d=void 0===c?"undefined":null===c?"null":typeof c;v("Argument is not a %s (or a non-Element, non-Location mock); got: %s",
"HTMLScriptElement",d)}a instanceof x&&a.constructor===x?d=a.a:(d=typeof a,v("expected object of type TrustedResourceUrl, got '"+a+"' of type "+("object"!=d?d:a?Array.isArray(a)?"array":d:"null")),d="type_error:TrustedResourceUrl");c.src=d;(d=c.ownerDocument&&c.ownerDocument.defaultView)&&d!=h?d=n(d.document):(null===m&&(m=n(h.document)),d=m);d&&c.setAttribute("nonce",d);z(c)}
function _loadCss(a){var b=document.createElement("link");b.type="text/css";b.rel="stylesheet";b.charset="UTF-8";b.href=a;z(b)}function _isNS(a){a=a.split(".");for(var b=window,c=0;c<a.length;++c)if(!(b=b[a[c]]))return!1;return!0}function _setupNS(a){a=a.split(".");for(var b=window,c=0;c<a.length;++c)b.hasOwnProperty?b.hasOwnProperty(a[c])?b=b[a[c]]:b=b[a[c]]={}:b=b[a[c]]||(b[a[c]]={});return b}
window.addEventListener&&"undefined"==typeof document.readyState&&window.addEventListener("DOMContentLoaded",function(){document.readyState="complete"},!1);
if (_isNS('google.translate.Element')){return}(function(){var c=_setupNS('google.translate._const');c._cest = gtConstEvalStartTime;gtConstEvalStartTime = undefined;c._cl='en';c._cuc='googleTranslateElementInit';c._cac='';c._cam='';c._ctkk='446315.3666395047';var h='translate.googleapis.com';var s=(true?'https':window.location.protocol=='https:'?'https':'http')+'://';var b=s+h;c._pah=h;c._pas=s;c._pbi=b+'/translate_static/img/te_bk.gif';c._pci=b+'/translate_static/img/te_ctrl3.gif';c._pli=b+'/translate_static/img/loading.gif';c._plla=h+'/translate_a/l';c._pmi=b+'/translate_static/img/mini_google.png';c._ps=b+'/translate_static/css/translateelement.css';c._puh='translate.google.com';_loadCss(c._ps);_loadJs(b+'/translate_static/js/element/main.js');})();})();
 
