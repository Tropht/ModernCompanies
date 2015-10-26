var clicker = $('.basic');
var iconClick = $('.iconImg');

$(clicker).click(function(){
  $(this).children('p').removeClass("fromRight");
  $(this).children('h3').css('display','none');
});
$(iconClick).click(function(){
  // $(this).removeClass("fromRight");
  console.log('hello');
});

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#notClick1"})
					.setClassToggle("#notClick1", "fromLeft")
					.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#notClick2"})
					.setClassToggle("#notClick2", "fromLeft")
					.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#notClick3"})
					.setClassToggle("#notClick3", "fromLeft")
					.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#icons1"})
					.setClassToggle("#icons1", "fromLeft")
					.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#icons2"})
					.setClassToggle("#icons2", "fromLeft")
					.addTo(controller);
