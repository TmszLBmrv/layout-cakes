$(document).ready(function(){

// variables
  var landHeight = ($(window).height())/1.4;
  var sf_header = $(".sf_header");
  var sf_textblock = $(".sf_textblock");
  var sf_pic = $(".sf_pic");
  var sf_pic_container = $(".sf_pic_container");
  var sp = $(".section_parallax");
  var st_header = $(".st_header");
  var st_pic = $(".st_pic");




// scroll
 $(document).scroll(function() {
   var wScroll = $(this).scrollTop();

   // landing elements in first section
   if (wScroll >sf_header.offset().top - landHeight) {
     sf_header.addClass('sfh_land');
   }

   if (wScroll >sf_textblock.offset().top - landHeight) {
     sf_textblock.addClass('sfh_land');
   }

   if (wScroll >sf_pic_container.offset().top - landHeight) {
     sf_pic_container.addClass('sfh_land');
   }

   if (wScroll >st_header.offset().top - landHeight) {
     st_header.addClass('sth_land');
   }

   $(".st_pic").each(function() {
     if (wScroll >$(this).offset().top - landHeight*1.1) {
       $(this).addClass('stp_land');
     }
   });

   // parallax in second section
  if ((wScroll + $(window).height()) > sp.offset().top) {
    $(".prlx1").css({
      transform: "translateY( -"+ wScroll/6 + "%) rotate(" + wScroll/15 + "deg)"
    });

    $(".prlx2").css({
      transform: "translateY( -"+ wScroll/8 + "%) rotate(-" + wScroll/15 + "deg)"
    });

    $(".prlx3").css({
      transform: "translateY( -"+ wScroll/5.5 + "%) rotate(-" + wScroll/15 + "deg)"
    });

    $(".prlx4").css({
      transform: "translateY( -"+ wScroll/7.5 + "%) rotate(-" + wScroll/15 + "deg)"
    });

    $(".prlx5").css({
      transform: "translateY( -"+ wScroll/5.5 + "%) rotate(" + wScroll/15 + "deg)"
    });

    $(".prlx6").css({
      transform: "translateY( -"+ wScroll/8 + "%) rotate(" + wScroll/10 + "deg)"
    });

    $(".prlx7").css({
      transform: "translateY( -"+ wScroll/5 + "%) rotate(" + wScroll/13 + "deg)"
    });

    $(".prlx8").css({
      transform: "translateY( -"+ wScroll/15 + "%) rotate(-" + wScroll/15 + "deg)"
    });

    $(".prlx9").css({
      transform: "translateY( -"+ wScroll/15 + "%) rotate(" + wScroll/8 + "deg)"
    });

    $(".prlx10").css({
      transform: "translateY( -"+ wScroll/10 + "%) rotate(" + wScroll/15 + "deg)"
    });

    $(".prlx11").css({
      transform: "translateY( -"+ wScroll/6 + "%) rotate(" + wScroll/15 + "deg)"
    });
  }

 });

// last section clicks & hovers
 if (!("ontouchstart" in document.documentElement)) {
     document.documentElement.className += "no-touch";
 } else {
   $(".st_pic").each(function() {
     $(this).click(function() {
       if ($(this).hasClass('st_picdiv_inactive')) {
         $(this).removeClass('st_picdiv_inactive')
         $(this).addClass('st_picdiv_active')
       } else {
         $(this).addClass('st_picdiv_inactive')
         $(this).removeClass('st_picdiv_active')
       }
     });
   });
 }

}) //END OF SCRIPT
