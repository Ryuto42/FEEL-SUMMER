
  $('.animation').css('visibility','hidden');
$(window).scroll(function(){
 var windowHeight = $(window).height(),
     topWindow = $(window).scrollTop();
 $('.animation').each(function(){
  var targetPosition = $(this).offset().top;
   if(topWindow > targetPosition - windowHeight + 150){
    //ここで表示時間の変化できる
   $(this).addClass("fadeInRight");
  }
 });
});

$(function() {
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('nav ul').addClass('active');
      } else {
          $('nav ul').removeClass('active');
      }
  });
});