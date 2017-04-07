$(document).ready(function(){

// variables
  var landHeight = ($(window).height())/2;
  var sf_header = $(".sf_header");
  var sf_paragraph = $(".sf_paragraph");
  var sf_pic = $(".sf_pic");



// scroll
 $(window).scroll(function() {
   var wScroll = $(this).scrollTop();

   if (wScroll >sf_header.offset().top - landHeight) {
     sf_header.addClass('sfh_land');
   }

   if (wScroll >sf_paragraph.offset().top - landHeight) {
     sf_paragraph.addClass('sfh_land');
   }

   if (wScroll >sf_pic.offset().top - landHeight) {
     sf_pic.addClass('sfh_land');
   }


 });





}) //END OF SCRIPT
