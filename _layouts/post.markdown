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
        <h2 class="courier">{{page.Section}} {{page.Byline}}</h2>
        <h2 class="courier">{{page.date | date: "%a, %b %d, %y"}} </h2>
        <p>{{page.Intro}}</p>
        <!-- Go to www.addthis.com/dashboard to customize your tools -->
        <div class="addthis_inline_share_toolbox"></div>
      </div>
    </div>
  </div>
  <div class="som-news flex som-panel scroller book beige page">
    <div class="som-news-text">
        {{page.content | markdownify}}
    </div>
  </div>
  <!-- Go to www.addthis.com/dashboard to customize your tools -->
  <script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-5ec94e3c9bf91b89"></script>
{% include footer.html %}
