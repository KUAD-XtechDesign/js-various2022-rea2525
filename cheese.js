$(function(){
    $("button").click(function () {
      $(this).siblings('p').slideToggle();
    });
  });

  $(window).scroll(function() {
    var offset = $(this).scrollTop() / -20;
    $('.bg_scroll').css( 'background-position', '0px ' + offset + 'px' );
});
  