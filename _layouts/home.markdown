{% include header.html %}
<div class="som-splash">
  <div class="som_splash__image-wrapper">
    <img class="som-splash__image" src="{{page ['header image'] | prepend: site.baseurl}}">
  </div>
  <div class="som-cirlce__large">
    <h1>Welcome to the <span>therapeutic</span> <span class="som-splash__broken-text">rebellion</span></h1>
  </div>
</div>

<div class="som-panel">
  <div class="som-wrapper flex">
    <div class="som-left">
      <h1 class="numbers">{{page ['Big Number']}}</h1>
      <h1 class="numbers">{{page ['Big Number']}}</h1>
      
    </div>
    <div class="som-right">
      <p class="courier">{{page ['Copy']}}</p>
    </div>
  </div>
</div>
{% include footer.html %}
