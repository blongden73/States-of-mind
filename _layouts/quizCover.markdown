{% include header.html %}
<div class="education-background"></div>
<div class="education-header">
  <div class="som-wrapper">
  </div>
</div>
<div class="education-list quiz-list">
  <div class="som-wrapper">
        {% assign quizes = site.quiz | sort: 'Education programme' %}
        {% for quiz in quizes %}
        {% assign edu = quiz.['Education programme'] %}
          <div class="flex">
            <div class="left">
              {% assign pindex = quiz.position | plus: 1 %}
              <span>{{edu}}</span>
              <div class="arrow">→</div>
            </div>
            <div class="right">
              <h1><div class="indicator"></div><a href="{{quiz.permalink}}">{{quiz.title}}</a></h1>
            </div>
          </div>
        {% endfor %}
  </div>
</div>
{% include footer.html %}
