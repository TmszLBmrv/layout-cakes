$(document).ready(function(){

  // g variables
  var landHeight = ($(window).height())/1.4,
      sf_header = $(".sf_header"),
      sf_textblock = $(".sf_textblock"),
      sf_pic = $(".sf_pic"),
      sf_pic_container = $(".sf_pic_container"),
      sp = $(".section_parallax"),
      st_header = $(".st_header"),
      st_pic = $(".st_pic");

  // arrow button
  $(".down_arrow").click(function(){
    $('html, body').animate({
      scrollTop: sf_header.offset().top
    }, 700);
  });

 $(document).scroll(function() {
   var wScroll = $(this).scrollTop();

   // landing elements in first section
    function landing(element, className) {
      if (wScroll >element.offset().top - landHeight) {
        element.addClass(className);
      }
    }
    landing(sf_header, "sfh_land");
    landing(sf_textblock, "sfh_land");
    landing(sf_pic_container, "sfh_land");
    landing(st_header, "sth_land");

   $(".st_pic").each(function() {
     if (wScroll >$(this).offset().top - landHeight*1.1) {
       $(this).addClass('stp_land');
     }
   });

   // parallax in second section
   if ((wScroll + $(window).height()) > sp.offset().top) {

     function rotateLeft(element, move, rotate){
       $(element).css({
         transform: "translateY( -" + wScroll/move + "%) rotate(-" + wScroll/rotate + "deg)"
       });
     }

     function rotateRight(element, move, rotate){
       $(element).css({
         transform: "translateY( -" + wScroll/move + "%) rotate(" + wScroll/rotate + "deg)"
       });
     }

     rotateRight(".prlx1", 6, 15);
     rotateLeft(".prlx2", 8, 15);
     rotateLeft(".prlx3", 5.5, 15);
     rotateLeft(".prlx4", 7.5, 15);
     rotateRight(".prlx5", 5.5, 15);
     rotateRight(".prlx6", 8, 10);
     rotateRight(".prlx7", 5, 13);
     rotateLeft(".prlx8", 15, 15);
     rotateRight(".prlx9", 15, 8);
     rotateRight(".prlx10", 10, 15);
     rotateRight(".prlx11", 6, 15);
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
