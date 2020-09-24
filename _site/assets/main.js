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
        grd.addColorStop(0, "#A3C3CF");
        grd.addColorStop(0.75, "#EDC9C9");
        grd.addColorStop(1, "#C69DBB");
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

function homePage(){
  console.log('hello');
  var enter = document.querySelector('.circle-container');
  var welcome = document.querySelector('.som-welcome');
  var homepage = document.querySelector('.init-homepage');

  if(enter){
    enter.addEventListener('click', function(){
      welcome.classList.add('init');
      homepage.classList.add('init');
    });
  }
}

function menu(){
  var menu = document.querySelector('.menu-mobile');
  var menuWrapper = document.querySelector('.mobile-menu-options');
  if(menu){
    menu.addEventListener('click', function(){
      this.classList.toggle('clicked');
      menuWrapper.classList.toggle('clicked');
    });
  }
}

function headerScroll(){
  var test = document.querySelector('.headertest');
  var header = document.querySelector('.som-header');
  if(test) {
  document.addEventListener('scroll', function(){
    console.log(test.getBoundingClientRect().top);

    if(test.getBoundingClientRect().top <= -10){
        console.log(true)
        header.classList.add('white');
    }else {
      console.log(false)
      header.classList.remove('white');
    }
  });
  }
}

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight + 50;

  // console.log(height, "height");
  // console.log(top + height , window.pageYOffset + window.innerHeight);
  // console.log(top , window.pageYOffset);

  while(el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top >= window.pageYOffset &&
    left >= window.pageXOffset &&
    (top + height) <= (window.pageYOffset + window.innerHeight) &&
    (left + width) <= (window.pageXOffset + window.innerWidth)
  );
}

var slides =  document.querySelector('.slides-wrapper');
var slide = document.querySelectorAll('.slide');

function presentation(){
  console.log('presenting');
  console.log(slide);
  var dots = document.querySelector('.dots');
  var dotsObj = [];
  for(j = 0; j < slide.length; j++) {
    console.log(dots);
    dotsObj.push('<span class="dot"></span>');
    console.log(dotsObj.join().replace(/,/g, ''));
    dots.innerHTML = dotsObj.toString().replace(/,/g, '');
  }
  slide[0].classList.add('inview');
  var currentLocation = window.location.pathname;
  var dot = document.querySelectorAll('.dot');
  var numbers = document.querySelector('.update-numbers');
  numbers.innerHTML = '0 ';
  dot[0].classList.add('inview');
  document.addEventListener('scroll', function(){
    console.log('scrolling');
    for(i=0; i < slide.length; i++) {
      var id = slide[i].id;
      var postion = slide[i].getBoundingClientRect();
      // console.log(postion, 'position');
      if(postion.top <= 2 && postion.top >= -1){
        console.log(true);
        console.log(postion);
        console.log(id);
        history.pushState(null, null, currentLocation+'#'+id);
        slide[i].classList.add('inview');
        dot[i].classList.add('inview');
        numbers.innerHTML = i+' ';
      }else {
        slide[i].classList.remove('inview');
        dot[i].classList.remove('inview');
      }
      // if(elementInViewport(slide[i])){
      //
      // }else {
      //
      // }
    }
  });
  var nextSlide = document.querySelector('.next-slide');
  var previousSlide = document.querySelector('.previous-slide');
  nextSlide.addEventListener('click', function(){
    var current = document.querySelector('.inview');
    var next = document.querySelector('.inview + .slide');
    next.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    console.log('click');
  });
  previousSlide.addEventListener('click', function(){
    var current = document.querySelector('.inview');
    var previous = current.previousElementSibling;
    previous.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    console.log('click');
  });

  var start = document.querySelector('.som-button');
  start.addEventListener('click', function(){
    var next = document.querySelector('.inview + .slide');
    next.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  });

  document.onkeydown = checkKey;
  function checkKey(e) {
    e = e || window.event;
    if (e.keyCode == '38') {
      e.preventDefault();
      var current = document.querySelector('.inview');
      var previous = current.previousElementSibling;
      previous.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
    else if (e.keyCode == '40') {
      e.preventDefault();
      console.log('downKey');
      var next = document.querySelector('.inview + .slide');
      next.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
    }
  }

  var discussionCount = document.querySelectorAll('.ten');
  for(g=0; g < discussionCount.length; g++) {
    var count = g + 1;
    discussionCount[g].querySelector('.slide-title').innerHTML = "Discussion " + count;
  }
}

function saved(el){
  console.log(el);
  el.currentTarget.innerHTML = 'Saved!';
  console.log('form saved', el);
}

var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycby1lB9as0jKusRMwgCGs9iqgCGgJAD6ezzZ5vvAjyt6WByYP1k/exec'

    console.log($form);
    console.log(url);

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
    saved(e));
})

function discussionForms(){
  var form = document.querySelectorAll('.discussion-form');
  if(form){
    for(i=0; i < form.length; i++) {
      var moduleTitle = document.querySelector('.module_title').innerText.replace(/ /g, '-');
      console.log(moduleTitle);
      var discussionFormTextArea = form[i].querySelector('textarea');
      var formButtonSubmit = form[i].querySelector('button');
      var discussionNum = i + 1;
      var formName = moduleTitle.toLowerCase() + '-' + discussionNum;
      formButtonSubmit.setAttribute('id', 'submit-form' + '-' + discussionNum);
      // discussionFormTextArea.setAttribute('name', formName);

      $(formButtonSubmit).on('click', function(e) {
        var formtoSubmit = $(this).context.form;
        console.log(formtoSubmit);
        e.preventDefault();
        var jqxhr = $.ajax({
          url: url,
          method: "GET",
          dataType: "json",
          data: $(formtoSubmit).serializeObject()
        }).success(
          // do something
          saved(e));
      })
    }
  }
}
discussionForms();

// var testform = document.querySelector('#test-form-1');
// console.log(testform, 'test');

// $('#submit-form-2').on('click', function(e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     // do something
//     saved(e));
// })
//
// $('#submit-form-3').on('click', function(e) {
//   e.preventDefault();
//   var jqxhr = $.ajax({
//     url: url,
//     method: "GET",
//     dataType: "json",
//     data: $form.serializeObject()
//   }).success(
//     // do something
//     saved(e));
// })

var quizCheck = document.querySelector('.quiz-wrapper');
function quiz() {
  var quizWrapper = document.querySelector('.quiz-wrapper');
  var answers = document.querySelectorAll('.quiz-wrapper li');
  var checkButton = document.querySelector('.check-button');
  var seeanswers = document.querySelector('.see-correct');

  for(i = 0; i < answers.length; i++) {
    console.log(answers[i]);
    answers[i].addEventListener('click', function(){
      this.classList.toggle('chosen');
    });
    checkButton.addEventListener('click', function(){
      console.log('clicked');
      var chosen = document.querySelector('.chosen');
      var answersChosen = document.querySelectorAll('.chosen');
      var correctAnswers = document.querySelectorAll('[data-type="1"]');
      console.log(correctAnswers.length);

      if(answersChosen.length == correctAnswers.length) {
        seeanswers.classList.add('display');
        console.log(answersChosen);
        for(j = 0; j < answersChosen.length; j++){
          var checkAnswers = answersChosen[j].dataset.type;
          if(checkAnswers == 1){
            answersChosen[j].classList.add('correct');
          } else {
            answersChosen[j].classList.add('wrong');
          }
        }
      }else {
        var highlight = document.querySelector('.choose-option');
        highlight.classList.add('bigger');
      }
    });
    seeanswers.addEventListener('click', function(){
      var wrongAnswers = document.querySelectorAll('[data-type="0"]');
      var correctAnswers = document.querySelectorAll('[data-type="1"]');
      if(wrongAnswers) {
        for(g = 0; g < wrongAnswers.length; g++) {
          wrongAnswers[g].classList.remove('wrong');
          wrongAnswers[g].classList.add('hide');
        }
        for(k = 0; k < correctAnswers.length; k++) {
          correctAnswers[k].classList.add('correct');
        }
      }
    });
  }
  var single = document.querySelector('.single-quiz');
  var checkButtonSingle = document.querySelector('.check-button-single');
  var correctmessage = document.querySelector('.correct-answer');
  var wrongmessage = document.querySelector('.correct-wrong');
  var seeCorrectSingle = document.querySelector('.see-correct-single');
  var correctAnswer = document.querySelector('.correct-answer-reveal');
  if(single) {
    checkButtonSingle.addEventListener('click', function(){
      var singleAnswer = single.value;
      var correct = single.dataset.type;
      if( singleAnswer == correct){
        single.classList.remove('wrong');
        single.classList.add('correct');
        wrongmessage.classList.remove('display');
        correctmessage.classList.add('display');
      }else {
        single.classList.add('wrong');
        wrongmessage.classList.add('display');
        seeCorrectSingle.classList.add('display');
      }
    });
    seeCorrectSingle.addEventListener('click', function(){
      correctAnswer.classList.add('display');
    });
  }
}

function quizPop() {
  var quizLauncher = document.querySelectorAll('.quiz-launcher');
  var iframepop = document.querySelector('.iframe-pop');
  var quizpop = document.querySelector('.quiz-pop');

  if(quizLauncher) {
    for(i=0; i<quizLauncher.length; i++) {
      quizLauncher[i].addEventListener('click', function(){
        console.log(quizpop);
        console.log(this.dataset.link);
        var link = this.dataset.link.trim();
        quizpop.classList.add('display');
        iframepop.classList.add('display');
        console.log(link);
        var linkReset = 'https://'+link;
        iframepop.setAttribute('src', linkReset);
      });
      quizpop.addEventListener('click', function(){
        quizpop.classList.remove('display');
        iframepop.classList.remove('display');
      });
    }
  }
}

var userAnswers = [];

function googleSheet(){
  var sheet = 'https://spreadsheets.google.com/feeds/list/1Bt3kMlaWT3TyacDK3QTYeQgXNCNYN_qDfXQ2b8rKnkk/1/public/full?alt=json';
  fetch(sheet)
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      response.json().then(function(data) {
        // console.log(data.feed.entry);
        function callAnswers($user) {
          var formEntries = document.querySelector('.form-entries');
          for(i = 0; i < data.feed.entry.length; i++) {
            var username = data.feed.entry[i].gsx$username.$t;
            if($user == username) {
              console.log(data.feed.entry[i].gsx$username.$t);
              // console.log(data.feed.entry[i].content.$t);
              var entry = data.feed.entry[i].content.$t;
              var splitEntry = entry.split(',');
              // console.log(splitEntry.length);
              for(j = 0; j < splitEntry.length; j++) {
                // console.log(splitEntry[j].trim())
                var answerSplit = splitEntry[j].trim().split(':');
                var answer = answerSplit[1];
                var question = answerSplit[0];
                userAnswers.push('<li class="question">' + '<span class="question">' + question + '</span>' + '<span class="answer">' + answer + '</span>' + '</li>');
                console.log(userAnswers);
                formEntries.innerHTML = userAnswers.join('');
              }
            }
          }
        }

        var ask = document.querySelector('.ask-answers');
        ask.addEventListener('click', function(e){
          e.preventDefault();
          var userNameAsk = document.querySelector('.username-ask').value;
          console.log(userNameAsk);
          callAnswers(userNameAsk);
        });
      });
    }
  )
  .catch(function(err) {
    console.log('Fetch Error :-S', err);
  });
}
if(document.querySelector('.ask-answers')) {
  googleSheet();
}

function init(){
  grid();
  enlarger();
  homePage();
  menu();
  headerScroll();
  quizPop();
  if(document.querySelector('canvas')){
    animatedCircles();
  }
  if(slides) {
    console.log('new scrolling v2');
    presentation();
  }
  if(quizCheck) {
    quiz();
  }
}
init();
