var clicker = $('.basic');

$(clicker).click(function(){
  $(this).children('p').removeClass("fromRight");
  $(this).children('h3').css('display','none');
});
