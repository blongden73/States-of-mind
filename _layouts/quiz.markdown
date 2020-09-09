{% assign quizType = page.['Quiz type'] %}
{% assign question = page.Question %}
{% assign choice = page.Choice %}
{% assign answers = page.Answers %}

{% include header.html %}
<style type="text/css">
/* DEMO CSS */
#heading{
  height:100px;
}

/* END DEMO CSS */

#dragScriptContainer{	/* BIG DIV containing HTML needed for the entire script */
  width:100%;
  margin:0 auto;
  height:400px;
  margin-top:20px;
  padding:3px;
  -moz-user-select:no;
  height: auto;
  overflow: hidden;
}

#questionDiv{	/* Big div for all the questions */
  float:left;
  height:100%;
  width:70%;
  padding:2px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #121212;
  padding-right: 10px;
  box-sizing: border-box;
}
#answerDiv{	/* Big div for all the answers */
  float:right;
  height:100%;
  width: 28%;
  box-sizing: border-box;
}

.dragDropSmallBox {
  background-color: #F8A4B8;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 5px;
}

#questionDiv div,#answerDiv div,#dragContent div{	/* General rules for small divs - i.e. specific questions and answers */
  width:100%;
  height:auto;
  line-height:20px;
  float:left;
  margin-right:2px;
  text-align:center;
}

#dragContent div{	/* Drag content div - i.e. specific answers when they are beeing dragged */
  border:1px solid #000;
}

#answerDiv .dragDropSmallBox{	/* Small answer divs */
  border:1px solid #000;
  cursor:pointer;
}

#questionDiv .dragDropSmallBox{	/* Small answer divs */
  border:1px solid #000;
  cursor:pointer;
  background-color:#85bfe4; /* Light blue background color */
  padding: 10px;
  text-align: left;
  box-sizing: border-box;
}

#questionDiv div div{	/* DIV after it has been dragged from right to left box */
  margin:0px;
  border:0px;
  padding:0px;
  background-color:#FFF;
}
#questionDiv .destinationBox{	/* Small empty boxes for the questions - i.e. where answers could be dragged */
  border:0px;
  background-color:#e8e8e8;
  width:100%;
  height:50px;
  margin-bottom: 20px;
}
#questionDiv .correctAnswer{	/* CSS indicating correct answer */
  background-color: #a8c1ac;
  color:#fff;
  border:1px solid #000;
  height: 30px;
  padding-top: 13px;
  padding-bottom: 7px;
  width: 99.5%;
}
#questionDiv .wrongAnswer{	/* CSS indicating wrong answer */
  background-color:#f44336;
  color:#fff;
  border:1px solid #000;
  height: 30px;
  padding-top: 13px;
  padding-bottom: 7px;
  width: 99.5%;
}

#dragContent div{
  background-color:#FFF;
}

#questionDiv .dragContentOver{	/* Mouse over question boxes - i.e. indicating where dragged element will be appended if mouse button is relased */
  border:1px solid #F00;
  height: 100px;
}

#answerDiv.dragContentOver{	/* Mouse over answer box - i.e. indicating where dragged element will be appended if mouse button is relased */
  border:1px solid #F00;
}

/* NEVER CHANGE THIS */
#dragContent{
  position:absolute;
  display:none;
}

.som-button {
  background-color: #fff;
  border: 1px solid #121212;
  font-size: 16px;
  color: #121212;
  width: max-content;
  bottom: 60px;
  z-index: 100;
  padding: 10px;
  margin-bottom: 60px;
}

</style>
<script type="text/javascript">
var shuffleQuestions = true;	/* Shuffle questions ? */
var shuffleAnswers = true;	/* Shuffle answers ? */
var lockedAfterDrag = false;	/* Lock items after they have been dragged, i.e. the user get's only one shot for the correct answer */

function quizIsFinished()
{
  // This function is called when everything is solved
}
/* Don't change anything below here */
var dragContentDiv = false;
var dragContent = false;
var dragSource = false;
var dragDropTimer = -1;
var destinationObjArray = new Array();
var destination = false;
var dragSourceParent = false;
var dragSourceNextSibling = false;
var answerDiv;
var questionDiv;
var sourceObjectArray = new Array();
var arrayOfEmptyBoxes = new Array();
var arrayOfAnswers = new Array();
function getTopPos(inputObj)
{
  if(!inputObj || !inputObj.offsetTop)return 0;
  var returnValue = inputObj.offsetTop;
  while((inputObj = inputObj.offsetParent) != null)returnValue += inputObj.offsetTop;
  return returnValue;
}
function getLeftPos(inputObj)
{
  if(!inputObj || !inputObj.offsetLeft)return 0;
  var returnValue = inputObj.offsetLeft;
  while((inputObj = inputObj.offsetParent) != null)returnValue += inputObj.offsetLeft;
  return returnValue;
}
function cancelEvent()
{
  return false;
}
function initDragDrop(e)
{
  if(document.all)e = event;
  if(lockedAfterDrag && this.parentNode.parentNode.id=='questionDiv')return;
  dragContentDiv.style.left = e.clientX  + Math.max(document.documentElement.scrollLeft,document.body.scrollLeft) + 'px';
  dragContentDiv.style.top = e.clientY  + Math.max(document.documentElement.scrollTop,document.body.scrollTop) + 'px';
  dragSource = this;
  dragSourceParent = this.parentNode;
  dragSourceNextSibling = false;
  if(this.nextSibling)dragSourceNextSibling = this.nextSibling;
  if(!dragSourceNextSibling.tagName)dragSourceNextSibling = dragSourceNextSibling.nextSibling;

  dragDropTimer=0;
  timeoutBeforeDrag();

  return false;
}
function timeoutBeforeDrag(){
  if(dragDropTimer>=0 && dragDropTimer<10){
    dragDropTimer = dragDropTimer +1;
    setTimeout('timeoutBeforeDrag()',10);
    return;
  }
  if(dragDropTimer>=10){
    dragContentDiv.style.display='block';
    dragContentDiv.innerHTML = '';
    dragContentDiv.appendChild(dragSource);
  }
}
function dragDropMove(e)
{
  if(dragDropTimer<10){
    return;
  }
  if(document.all)e = event;
  var scrollTop = Math.max(document.documentElement.scrollTop,document.body.scrollTop);
  var scrollLeft = Math.max(document.documentElement.scrollLeft,document.body.scrollLeft);
  dragContentDiv.style.left = e.clientX + scrollLeft + 'px';
  dragContentDiv.style.top = e.clientY + scrollTop + 'px';
  var dragWidth = dragSource.offsetWidth;
  var dragHeight = dragSource.offsetHeight;
  var objFound = false;
  var mouseX = e.clientX + scrollLeft;
  var mouseY = e.clientY + scrollTop;
  destination = false;
  for(var no=0;no<destinationObjArray.length;no++){
    var left = destinationObjArray[no]['left'];
    var top = destinationObjArray[no]['top'];
    var width = destinationObjArray[no]['width'];
    var height = destinationObjArray[no]['height'];
    destinationObjArray[no]['obj'].className = 'destinationBox';
    var subs = destinationObjArray[no]['obj'].getElementsByTagName('DIV');
    if(!objFound && subs.length==0){
      if(mouseX < (left/1 + width/1) && (mouseX + dragWidth/1) >left && mouseY < (top/1 + height/1) && (mouseY + dragHeight/1) >top){
        destinationObjArray[no]['obj'].className='dragContentOver';
        destination = destinationObjArray[no]['obj'];
        objFound = true;
      }
    }
  }
  sourceObjectArray['obj'].className='';
  if(!objFound){
    var left = sourceObjectArray['left'];
    var top = sourceObjectArray['top'];
    var width = sourceObjectArray['width'];
    var height = sourceObjectArray['height'];

    if(mouseX < (left/1 + width/1) && (mouseX + dragWidth/1) >left && mouseY < (top/1 + height/1) && (mouseY + dragHeight/1) >top){
      destination = sourceObjectArray['obj'];
      sourceObjectArray['obj'].className='dragContentOver';
    }
  }
  return false;
}
function dragDropEnd()
{
  if(dragDropTimer<10){
    dragDropTimer = -1;
    return;
  }
  dragContentDiv.style.display='none';
  sourceObjectArray['obj'].style.backgroundColor = '#FFF';
  if(destination){
    destination.appendChild(dragSource);
    destination.className='destinationBox';
    // Check if position is correct, i.e. correct answer to the question
    if(!destination.id || destination.id!='answerDiv'){
      var previousEl = dragSource.parentNode.previousSibling;
      if(!previousEl.tagName)previousEl = previousEl.previousSibling;
      var numericId = previousEl.id.replace(/[^0-9]/g,'');
      var numericIdSource = dragSource.id.replace(/[^0-9]/g,'');

      if(numericId==numericIdSource){
        dragSource.className='correctAnswer';
        checkAllAnswers();
      }
      else
        dragSource.className='wrongAnswer';
    }
    if(destination.id && destination.id=='answerDiv'){
      dragSource.className='dragDropSmallBox';
    }
  }else{
    if(dragSourceNextSibling)
      dragSourceNextSibling.parentNode.insertBefore(dragSource,dragSourceNextSibling);
    else
      dragSourceParent.appendChild(dragSource);
  }
  dragDropTimer = -1;
  dragSourceNextSibling = false;
  dragSourceParent = false;
  destination = false;
}
function checkAllAnswers()
{
  for(var no=0;no<arrayOfEmptyBoxes.length;no++){
    var sub = arrayOfEmptyBoxes[no].getElementsByTagName('DIV');
    if(sub.length==0)return;
    if(sub[0].className!='correctAnswer'){
      return;
    }
  }
  quizIsFinished();
}
function resetPositions()
{
  if(dragDropTimer>=10)return;

  for(var no=0;no<destinationObjArray.length;no++){
    if(destinationObjArray[no]['obj']){
      destinationObjArray[no]['left'] = getLeftPos(destinationObjArray[no]['obj'])
      destinationObjArray[no]['top'] = getTopPos(destinationObjArray[no]['obj'])
    }

  }
  sourceObjectArray['left'] = getLeftPos(answerDiv);
  sourceObjectArray['top'] = getTopPos(answerDiv);
}
function initDragDropScript()
{
  dragContentDiv = document.getElementById('dragContent');
  answerDiv = document.getElementById('answerDiv');
  answerDiv.onselectstart = cancelEvent;
  var divs = answerDiv.getElementsByTagName('DIV');
  var answers = new Array();
  for(var no=0;no<divs.length;no++){
    if(divs[no].className=='dragDropSmallBox'){
      divs[no].onmousedown = initDragDrop;
      answers[answers.length] = divs[no];
      arrayOfAnswers[arrayOfAnswers.length] = divs[no];
    }
  }
  if(shuffleAnswers){
    for(var no=0;no<(answers.length*10);no++){
      var randomIndex = Math.floor(Math.random() * answers.length);
      answerDiv.appendChild(answers[randomIndex]);
    }
  }
  sourceObjectArray['obj'] = answerDiv;
  sourceObjectArray['left'] = getLeftPos(answerDiv);
  sourceObjectArray['top'] = getTopPos(answerDiv);
  sourceObjectArray['width'] = answerDiv.offsetWidth;
  sourceObjectArray['height'] = answerDiv.offsetHeight;
  questionDiv = document.getElementById('questionDiv');
  questionDiv.onselectstart = cancelEvent;
  var divs = questionDiv.getElementsByTagName('DIV');
  var questions = new Array();
  var questionsOpenBoxes = new Array();
  for(var no=0;no<divs.length;no++){
    if(divs[no].className=='destinationBox'){
      var index = destinationObjArray.length;
      destinationObjArray[index] = new Array();
      destinationObjArray[index]['obj'] = divs[no];
      destinationObjArray[index]['left'] = getLeftPos(divs[no])
      destinationObjArray[index]['top'] = getTopPos(divs[no])
      destinationObjArray[index]['width'] = divs[no].offsetWidth;
      destinationObjArray[index]['height'] = divs[no].offsetHeight;
      questionsOpenBoxes[questionsOpenBoxes.length] = divs[no];
      arrayOfEmptyBoxes[arrayOfEmptyBoxes.length] = divs[no];
    }
    if(divs[no].className=='dragDropSmallBox'){
      questions[questions.length] = divs[no];
    }

  }
  if(shuffleQuestions){
    for(var no=0;no<(questions.length*10);no++){
      var randomIndex = Math.floor(Math.random() * questions.length);

      questionDiv.appendChild(questions[randomIndex]);
      questionDiv.appendChild(questionsOpenBoxes[randomIndex]);

      destinationObjArray[destinationObjArray.length] = destinationObjArray[randomIndex];
      destinationObjArray.splice(randomIndex,1);

      questionsOpenBoxes[questionsOpenBoxes.length] = questionsOpenBoxes[randomIndex];
      questionsOpenBoxes.splice(randomIndex,1);
      questions[questions.length] = questions[randomIndex];
      questions.splice(randomIndex,1);
    }
  }
  questionDiv.style.visibility = 'visible';
  answerDiv.style.visibility = 'visible';

  document.documentElement.onmouseup = dragDropEnd;
  document.documentElement.onmousemove = dragDropMove;
  setTimeout('resetPositions()',150);
  window.onresize = resetPositions;
}
/* Reset the form */
function dragDropResetForm()
{
  for(var no=0;no<arrayOfAnswers.length;no++){
    arrayOfAnswers[no].className='dragDropSmallBox'
    answerDiv.appendChild(arrayOfAnswers[no]);
  }
}
window.onload = initDragDropScript;
</script>
<div class="education-background"></div>
<div class="quiz-wrapper som-wrapper {{quizType}}">
  <div class="page-centred">
    {% if quizType == 'Multiple choice' or quizType == 'Multiple Choice'%}
      <h2>{{question}}</h2>
      <p class="choose-option">Choose {{choice}} answers</p>
      <ul>
      {% for answer in answers%}
        <li data-type="{% if answer.['True/False'] == "True" %}1{% endif %}{% if answer.['True/False'] == "False" %}0{% endif %}">{{answer.Answer}}</li>
      {% endfor%}
      </ul>
      <div class="check-button">
        Check answers
      </div>
      <div class="see-correct">
        See correct
      </div>
    {% endif %}
    {% if quizType == "Drag" %}
    <h2>{{question}}</h2>
    <div id="dragScriptContainer">
      <div id="questionDiv">
        {% for answer in answers%}
          <div class="dragDropSmallBox" id="q{{ forloop.index }}">{{answer.['True/False']}}</div>
          <div class="destinationBox"></div>
        {% endfor%}
      </div>
      <div id="answerDiv">
        {% for answer in answers%}
          <div class="dragDropSmallBox" id="a{{ forloop.index }}">{{answer.Answer}}</div>
        {% endfor%}
      </div>
      </div>
      <div id="dragContent"></div>
      <input class="som-button" type="button" onclick="dragDropResetForm();return false" value="Reset">
    {% endif %}
    {% if quizType == "Single" %}
    <h2>{{question}}</h2>
    {% for answer in answers%}
      <input class="single-quiz" data-type="{{answer.Answer}}" placeholder="Type your answer here" value=""></input>
      <p class="correct-answer">😄Well done! You're right!</p>
      <p class="correct-wrong">🤦🏽‍♀️Offfff! Not quite!</p>
      <p class="correct-answer-reveal">The correct answer is <span>{{answer.Answer}}</span></p>
    {% endfor %}
    <div class="check-button-single">
      Check answer
    </div>
    <div class="see-correct-single">
      See correct
    </div>
    {% endif %}
  </div>
</div>
{% include footer.html %}
