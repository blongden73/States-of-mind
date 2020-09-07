{% assign quizType = page.['Quiz type'] %}
{% assign question = page.Question %}
{% assign choice = page.Choice %}
{% assign answers = page.Answers %}

{% include header.html %}
<div class="education-background"></div>

<div class="quiz-wrapper som-wrapper {{quizType}}">
  <div class="page-centred">
    {% if quizType == 'Multiple Choice'%}
    <h2>{{question}}</h2>
    <p class="choose-option">Choose {{choice}} answers</p>
    <ul>
    {% for answer in answers%}
      <li data-type="{% if answer.['True/False'] == "True" %}1{% endif %}{% if answer.['True/False'] == "False" %}0{% endif %}">{{answer.Answer}}</li>
    {% endfor%}
    </ul>
    <div class="check-button">
      Check answers
    </div>
    <div class="see-correct">
      See correct
    </div>
  </div>
</div>
{% include footer.html %}
