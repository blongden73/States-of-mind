{% include header.html %}
<div class="som-wrapper">
  <div class="som-page-title">
    <h1>Say hello</h1>
  </div>
</div>
<canvas id="canvas4"></canvas>
<div class="som-news-wrapper">
  <div class="som-wrapper">
    <div class="som-inner-content">
      <h1>{{page.content | markdownify}}</h1>
    </div>
  </div>
</div>
{% include footer.html %}
