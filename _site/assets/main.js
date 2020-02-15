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



function init(){
  grid();
}
init();
