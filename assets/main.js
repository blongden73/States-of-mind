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
  if(images) {
    for(var i = 0; i < images.length; i++){
      var imagesTop = images[i].getBoundingClientRect().top;

      if(imagesTop <= 100) {
        images[i].classList.add('animateNow');
      } else {
        images[i].classList.remove('animateNow');
      }
    }
  }
}

function fadein() {
  var fader = document.querySelectorAll('.fade-in');
  if(fader) {
    for(i=0; i<fader.length; i++){
      var faderTop = fader[i].getBoundingClientRect().top;
      var children = fader[i].querySelector('*');
      console.log(faderTop, (screen.height)/2);

      if(faderTop <= (screen.height)/2) {
        children.classList.add('faded');
      } else {
        children.classList.remove('faded');
      }
    }
  }
}

document.addEventListener('scroll', function(){
  var scroll = getScrollPercent();
  var circle = document.querySelector('.som-cirlce__large');
  if(circle) {
    if(scroll >= 4) {
      circle.classList.add('remove');
    } else {
      circle.classList.remove('remove');
    }
  }
  animateImages();
  fadein();
});

//this is jquery lol ooops
var $circle = $('.circle-follower');
var $headline = $('.shadow-headline');

function moveCircle(e) {
	TweenLite.to($circle, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

function moveHeadline(e) {
	TweenLite.to($headline, 0.3, {
    css: {
      left: e.pageX,
      top: e.pageY
    }
  });
}

$(window).on('mousemove', moveCircle);
$(window).on('mousemove', moveHeadline);





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

function animatedCircles() {
    // Multiple Animated Circle - Get Canvas element by Id
    var canvas4 = document.getElementById( "canvas4" );
    // Set Canvas dimensions

    canvas4.width   = screen.width;
    canvas4.height  = screen.height;
    // Get drawing context
    var c4 = canvas4.getContext( '2d' );
    // The Circle class
    function Circle( x, y, dx, dy, radius ) {
    	this.x 	= x;
    	this.y 	= y;
    	this.dx = dx;
    	this.dy = dy;
    	this.radius = radius;
    	this.draw = function() {
    		c4.beginPath();
    		c4.arc( this.x, this.y,  this.radius, 0, Math.PI * 2, false  );
        var grd = c4.createLinearGradient(0, 0, screen.width, 0);
        grd.addColorStop(0, "#edc9c9");
        grd.addColorStop(0.25, "#a8c1ac");
        grd.addColorStop(0.5, "#85bfe4");
        grd.addColorStop(1, "white");
        c4.fillStyle = grd;
        c4.fill();
  	  }
  	this.update = function() {
  		if( this.x + this.radius > screen.width || this.x - this.radius < 0 ) {
  			this.dx = -this.dx;
  		}
  		if( this.y + this.radius > screen.height || this.y - this.radius < 0 ) {
  			this.dy = -this.dy;
  		}
  		this.x += this.dx;
  		this.y += this.dy;
  		this.draw();
  	}
  }
  var circles = [];
  // Radius
  var radius = 200;
  for( var i = 0; i < 5; i++ )  {
  	// Starting Position
  	var x = Math.random() * ( screen.width - radius * 2 ) + radius;
  	var y = Math.random() * ( screen.height - radius * 2) + radius;
  	// Speed in x and y direction
    	var dx = ( Math.random() - 0.5 ) * 2;
    	var dy = ( Math.random() - 0.5 ) * 2;
  	circles.push( new Circle( x, y, dx, dy, radius ) );
  }
  function animate4() {
  	requestAnimationFrame( animate4 );
  	c4.clearRect( 0, 0, screen.width, screen.height );
  	for( var r = 0; r < 5; r++ ) {
  		circles[ r ].update();
  	}
  }
  animate4();
}


function init(){
  grid();
  enlarger();
  if(document.querySelector('canvas')){
    animatedCircles();
  }
}
init();
