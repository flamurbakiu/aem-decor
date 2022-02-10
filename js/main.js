/* 

Vanilla Template

https://templatemo.com/tm-526-vanilla

*/

jQuery(document).ready(function ($) {
  "use strict";

  var top_header = $(".parallax-content");
  top_header.css({ "background-position": "center center" }); // better use CSS

  $(window).scroll(function () {
    var st = $(this).scrollTop();
    top_header.css({
      "background-position": "center calc(50% + " + st * 0.5 + "px)",
    });
  });

  $("body").scrollspy({
    target: ".fixed-side-navbar",
    offset: 200,
  });

  // smoothscroll on sidenav click

  $(".tabgroup > div").hide();
  $(".tabgroup > div:first-of-type").show();
  $(".tabs a").click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = "#" + $this.parents(".tabs").data("tabgroup"),
      others = $this.closest("li").siblings().children("a"),
      target = $this.attr("href");
    others.removeClass("active");
    $this.addClass("active");
    $(tabgroup).children("div").hide();
    $(target).show();
  });

  var owl = $("#owl-testimonials");

  owl.owlCarousel({
    pagination: true,
    paginationNumbers: false,
    autoPlay: 5000, //Set AutoPlay to 3 seconds
    items: 2, //10 items above 1000px browser width
    itemsDesktop: [1000, 2], //5 items between 1000px and 901px
    itemsDesktopSmall: [900, 1], // betweem 900px and 601px
    itemsTablet: [600, 1], //2 items between 600 and 0
    itemsMobile: false, // itemsMobile disabled - inherit from itemsTablet option
  });
});
