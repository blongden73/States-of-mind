{% include header.html %}
<div class="som-carousel">
  <ul>
    {% for item in page['Carousel']  %}
        <li class="magnify">
          <a href="{{item.Link}}"></a>
          <h1><span>{{item.Category}}</span>{{item.Headline}}</h1>
          <img src="{{item.Image}}">
        </li>
    {% endfor %}
  </ul>
</div>
<div class="som-panel som-what research">
  <div class="som-wrapper">
    <div class="som-wwd flex">
      <div class="som-left">
        <h1>Education</h1>
        <p class="courier">{{page ['Education Description']}}</p>
      </div>
      <div class="som-right">
        <div class="circle right outline"></div>
      </div>
    </div>
  </div>
</div>
<div class="som-panel som-what education">
  <div class="som-wrapper">
    <div class="som-wwd flex">
      <div class="som-left">
        <div class="circle left yellow"></div>
      </div>
      <div class="som-right">
        <h1>Research</h1>
        <p class="courier">{{page ['Research Description']}}</p>
      </div>
    </div>
  </div>
</div>
<div class="som-panel som-what projects">
  <div class="som-wrapper">
    <div class="som-wwd flex">
      <div class="som-left">
        <h1>Projects</h1>
        <p class="courier">{{page ['Projects Description']}}</p>
      </div>
      <div class="som-right">
        <div class="circle right outline"></div>
      </div>
    </div>
  </div>
</div>
{% include footer.html %}
