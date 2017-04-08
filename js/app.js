$(document).ready(function(){

// variables
  var landHeight = ($(window).height())/1.4;
  var sf_header = $(".sf_header");
  var sf_textblock = $(".sf_textblock");
  var sf_pic = $(".sf_pic");

// reusable funcions




// scroll
 $(window).scroll(function() {
   var wScroll = $(this).scrollTop();

   if (wScroll >sf_header.offset().top - landHeight) {
     sf_header.addClass('sfh_land');
   }

   if (wScroll >sf_textblock.offset().top - landHeight) {
     sf_textblock.addClass('sfh_land');
   }

   if (wScroll >sf_pic.offset().top - landHeight) {
     sf_pic.addClass('sfh_land');
   }


 });





}) //END OF SCRIPT
