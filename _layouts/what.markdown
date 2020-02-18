{% include header.html %}
<div class="som-page-title">
  <div class="som-wrapper">
    <h1>Our work</h1>
  </div>
</div>
<div class="som-carousel">
  <ul>
    {% for item in page['Carousel']  %}
        <li class="magnify">
          <a href="{{item.Link}}"></a>
          <h1 class="shadow-headline"><span>{{item.Category}}</span>{{item.Headline}}</h1>
          <img src="{{item.Image}}">
        </li>
    {% endfor %}
  </ul>
</div>
<div class="som-panel som-what research fade-in">
  <div class="som-wrapper">
    <div class="som-wwd flex">
      <div class="som-left">
        <h1>Education</h1>
        <p class="courier">{{page ['Education Description'] | markdownify}}</p>
      </div>
      <div class="som-right">
        <div class="circle right outline"></div>
      </div>
    </div>
  </div>
</div>
<div class="som-panel som-what education fade-in">
  <div class="som-wrapper">
    <div class="som-wwd flex">
      <div class="som-left">
        <div class="circle left yellow"></div>
      </div>
      <div class="som-right">
        <h1>Research</h1>
        <p class="courier">{{page ['Research Description'] | markdownify}}</p>
      </div>
    </div>
  </div>
</div>
<div class="som-panel som-what projects fade-in">
  <div class="som-wrapper">
    <div class="som-wwd flex">
      <div class="som-left">
        <h1>Projects</h1>
        <p class="courier">{{page ['Projects Description'] | markdownify}}</p>
      </div>
      <div class="som-right">
        <div class="circle right outline"></div>
      </div>
    </div>
  </div>
</div>
{% include footer.html %}
