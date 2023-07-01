
_386 = {fastLoad:true,onePass:true, speedFactor:4.0};

var lFollowX = 0,
    lFollowY = 0,
    x = 0,
    y = 0,
    friction = 1 / 30;

function moveBackground() {
  x += (lFollowX - x) * friction;
  y += (lFollowY - y) * friction;
  
  translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  $('.bg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
  });

  window.requestAnimationFrame(moveBackground);
}

$(window).on('mousemove click', function(e) {

  var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
  var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
  lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
  lFollowY = (10 * lMouseY) / 100;

});

moveBackground();

// var ps1 = new Audio("muse/ps1.ogg");
// ps1.volume = .3;
// ps1.play();

var hamburger = new Audio("muse/hamburger.ogg")
hamburger.volume = .5;
var furry_egg = new Konami(function(){
  hamburger.currentTime = 0;
  hamburger.play();
});

var hover = new Audio("muse/hover.ogg");
hover.volume = .25;
$(".btn").mouseover(function(){
  hover.currentTime = 0;
  hover.play();
});

var crtOn = new Audio("muse/crton.ogg");
$("#switch").click(function(){
  if($("#switch").is(":checked")){
    crtOn.currentTime = 0;
    crtOn.play();
  } else {
    crtOn.pause();
    crtOn.currentTime = 0;
  }
});

var alert = new Audio("muse/CHIMES.ogg");
alert.volume = .25;
$("#refbutton").click(function(){
  alert.play();
})

var i = 0;
var txt = '【aruyote】'; 
var speed = 500;

function typeWriter() {
  if (i < txt.length) {
    $("#myname").html($("#myname").html() + txt.charAt(i));
    i++;
    setTimeout(typeWriter, speed);
  }
}

typeWriter();