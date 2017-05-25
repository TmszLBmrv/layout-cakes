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
     rotateRight("prlx9", 15, 8);
     rotateRight("prlx10", 10, 15);
     rotateRight("prlx11", 6, 15);
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
