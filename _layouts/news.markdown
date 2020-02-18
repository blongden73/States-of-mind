{% include header.html %}
<canvas id="canvas4"></canvas>
<div class="som-page-title">
  <div class="som-wrapper">
    <h1>Coming up</h1>
  </div>
</div>
<div class="som-news-wrapper">
  {% assign news = site.posts | where:"categories","news & events" %}

  <div class="som-wrapper">
    <div class="som-inner-content">
      <ul>
      {% for post in news %}
          <li class="magnify">
            <a href="{{post.url}}">{{post.title}}</a>
            <p>{{post.date | date: "%a, %b %d, %y"}}</p>
          </li>
      {% endfor %}
      </ul>
    </div>
  </div>
</div>
{% include footer.html %}
