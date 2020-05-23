{% include header.html %}
  <!-- <div class="som-wrapper padding">
    <div class="som-inner-content">
      {{page.content}}
    </div>
  </div> -->
  <div class="som-news flex som-panel scroller book beige page">
    <div class="som-news-image">
      <img src="{{page.Image}}">
    </div>
    <div class="som-news-info-wrapper">
      <div class="som-scroll-text right">
        <h1>{{page.title}}</h1>
        <h2 class="courier">{{page.categories}} {{page.Byline}}</h2>
        <h2 class="courier">{{page.date | date: "%a, %b %d, %y"}} </h2>
        <p>{{page.Intro}}</p>
      </div>
    </div>
  </div>
  <div class="som-news flex som-panel scroller book beige page">
    <div class="som-news-text">
        {{page.content | markdownify}}
    </div>
  </div>
{% include footer.html %}
