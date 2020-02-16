function grid(){
  var url = window.location.href;
  console.log(url);
  var grid = document.querySelector('.grid');
  if(url.includes("grid")) {
    grid.classList.add('display');
  }
}

function getScrollPercent() {
    var h = document.documentElement,
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
        var scrollPercentage = (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight);
    return scrollPercentage * 100;
}

function animateImages(){
  var images = document.querySelectorAll('.animate-in');
  for(var i = 0; i < images.length; i++){
    var imagesTop = images[i].getBoundingClientRect().top;
    console.log(imagesTop);

    if(imagesTop <= 100) {
      images[i].classList.add('animateNow');
    } else {
      images[i].classList.remove('animateNow');
    }
  }
}

document.addEventListener('scroll', function(){
  var scroll = getScrollPercent();
  var circle = document.querySelector('.som-cirlce__large');
  console.log(scroll);
  if(scroll >= 4) {
    circle.classList.add('remove');
  } else {
    circle.classList.remove('remove');
  }
  animateImages();
});

var $circle = $('.circle-follower');

function moveCircle(e) {
	TweenLite.to($circle, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);

function enlarger(){
  var enlarge = document.querySelectorAll('.magnify');
  var follower = document.querySelector('.circle-follower');
  for(var i = 0; i < enlarge.length; i++) {
    console.log(enlarge[i]);
    enlarge[i].addEventListener('mouseover', function(){
      console.log('enter');
      follower.classList.add('enlarge');
    });
    enlarge[i].addEventListener('mouseleave', function(){
      console.log('leave');
      follower.classList.remove('enlarge');
    });
  }
}

function init(){
  grid();
  enlarger();
}
init();
