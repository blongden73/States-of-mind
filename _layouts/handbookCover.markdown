{% include header.html %}
<div class="education-background"></div>
<div class="education-header">
  <div class="som-wrapper">
  </div>
</div>
<div class="education-list">
  <div class="som-wrapper">
        {% assign handbooks = site.handbook | sort: 'Education programme' %}
        {% for handbook in handbooks %}
          <div class="flex">
            <div class="left">
              {% assign pindex = handbook.position | plus: 1 %}
              <span>{{handbook.['Education programme']}}</span>
              <div class="arrow">→</div>
            </div>
            <div class="right">
              <h1><div class="indicator"></div><a href="/quiz/{{handbook.title | slugify}}.html">{{handbook.title}}</a></h1>
            </div>
          </div>
        {% endfor %}
  </div>
</div>
{% include footer.html %}
