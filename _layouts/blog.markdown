{% include header.html %}
{% assign blogPosts = site.posts | where:"categories","Blog" %}
<div class="som-wrapper">
  <div class="som-page-title">
    <h1>What others say</h1>
  </div>
    <ul class="som-blog-content">
      {% for post in blogPosts %}
          <li class="magnify">
            <div class="blog-image-wrappaer">
              <div class="blog-image">
                <img src="{{post.image}}">
              </div>
            </div>
            <h1>{{post.title}}</h1>
            <p>{{post.content}}</p>
            <h2>{{post.date | date: "%a, %b %d, %y"}}</h2>
          </li>
      {% endfor %}
    </ul>
</div>
{% include footer.html %}
