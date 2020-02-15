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
      <h1 class="numbers">{{page ['Big Number 2']}}</h1>
    </div>
    <div class="som-right">
      <p class="courier">{{page ['Copy a']}}</p>
      <p class="courier">{{page ['Copy b']}}</p>
    </div>
  </div>
</div>
<div class="som-panel white">
  <div class="som-wrapper flex">
    <div class="som-left">
      <h1>{{page ['Copy 1']}}</h1>
      <p class="courier">{{page ['Copy 2']}}</p>
    </div>
    <div class="som-right">
      <img src="{{page ['About image'] | prepend: site.baseurl}}">
    </div>
  </div>
</div>
{% include footer.html %}
