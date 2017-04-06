$(document).ready(function(){
 // variables
  var s_f_header = $("#s_f_header");
  console.log(document.body.clientWidth);
 $(window).scroll(function() {
   var wScroll = $(this).scrollTop();

   if (wScroll > s_f_header.offset().top - 200) {
     console.log("hi")
   }

 });





}) //END OF SCRIPT
