{% include miniheader.html %}
<div class="quiz-pop">
  <div class="quiz-close">
    Close
  </div>
  <div class="loading-circle"></div>
  <iframe class="iframe-pop" src=""></iframe>
</div>
<div class="slides-wrapper">
  <div id="slide-0" class="slide slide-cover">
    <img src="{{page.['Cover Image']}}">
    <div class="som-wrapper">
      <h1 style="color:{{page.['Cover Colour']}};">{{page.title}}</h1>
      <div class="som-button" style="color:{{page.['Cover Colour']}}; border-color:{{page.['Cover Colour']}};">Start module</div>
    </div>
  </div>
  {% for slide in page.Slides %}
  {% assign template = slide.Template %}
  {% assign title = slide.Title %}
  {% assign image = slide.Image %}
  {% assign description = slide.Description %}
  {% assign graphic = slide.['Graphic Image'] %}
  {% assign audio = slide.['Audio url'] %}
  {% assign video = slide.['Video Url'] %}
  {% assign credit = slide.['Credit'] %}
  {% assign quote = slide.['Quote'] %}
  {% assign quoteCred = slide.['Quote Credit'] %}
  {% assign slideColor = slide.['Slide Colour']%}
  {% assign links = slide.Links %}
  {% assign quiz = slide.Quiz %}
    <div id="slide-{{ forloop.index }}" class="slide {{template}} {%if image %}white{% endif %}" {%if slideColor %}style="background:{{slideColor}};"{% endif %}>
      <div class="som-wrapper">
        {% if template == "five" %}
          {% include templatefive.html %}
        {% elsif template == "four" %}
          {% include templatefour.html %}
        {% elsif template == "ten" %}
          {% include templateten.html %}
        {% elsif template == "two" %}
          {% include templatetwo.html %}
        {% elsif template == "sixteen" %}
          {% include templatesixteen.html %}
        {% elsif template == "list" %}
          {% include templatelist.html %}
        {% elsif template == "one" %}
          {% include templateone.html %}
        {% elsif template == "fourteen" %}
          {% include templatefourteen.html %}
        {% elsif template == "nineteen" %}
          {% include templatenineteen.html %}
        {% elsif template == "six" %}
          {% include templatesix.html %}
        {% elsif template == "twenty" %}
          {% include templatetwenty.html %}
        {% else %}
          <div class="dev-info">
            <p>Template: {% if template %}{{template}}{% else %} undefined {% endif %}</p>
            <p>Title: {% if title %}{{title}}{% else %} undefined {% endif %}</p>
            <p>Description: {% if description %}{{description}}{% else %} undefined {% endif %}</p>
            <p>Image: {% if image %}{{image}}{% else %} undefined {% endif %}</p>
            <p>Graphic: {% if graphic %}{{graphic}}{% else %} undefined {% endif %}</p>
            <p>Audio: {% if audio %}{{audio}}{% else %} undefined {% endif %}</p>
            <p>Video: {% if video %}{{video}}{% else %} undefined {% endif %}</p>
            <p>Quote: {% if quote %}{{quote}}{% else %} undefined {% endif %}</p>
            <p>QuoteCred: {% if quoteCred %}{{quoteCred}}{% else %} undefined {% endif %}</p>
            {% for link in links %}
              <p>Link: {% if link.['Link Url'] %}{{link.['Link Url']}}{% else %} undefined {% endif %}</p>
            {% endfor %}
          </div>
        {% endif %}
      </div>
    </div>
    {% if quiz %}
    <div id="slide-{{ forloop.index }}-1" class="slide quiz">
      <div class="som-wrapper">
        <div class="discussion-header">
          <h1 class="slide-title">Quiz</h1>
        </div>
        <div class="slide-content">
          <div class="slide-description">
            <div class="quiz-launcher-wrapper">
              {% for quizes in quiz %}
                <div data-link="{{quizes}}" class="som-button quiz-launcher">Quiz {{ forloop.index }}</div>
              {% endfor %}
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endif %}
  {% endfor %}
  <div id="slide-end" class="slide four slide-cover slide-end">
    <div class="som-wrapper">
      <h1>
        <span>End of module</span>
        {{page.title}}
      </h1>
      <a href="/education-programme"><div class="som-button">Back to modules</div></a>
    </div>
  </div>
</div>
<div class="slides-footer">
  <div class="slides-counter">
    <div class="som-wrapper">
      <div class="controls">
        <div class="previous-slide">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 17.99L13.519 14v3.196H26v1.57H13.519V22L9 17.99z" fill="#000"/><circle cx="18" cy="18" r="17.5" transform="rotate(-180 18 18)" stroke="#000"/></svg>
        </div>
        <div class="next-slide">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M27 18.01L22.481 22v-3.196H10v-1.57h12.481V14L27 18.01z" fill="#000"/><circle cx="18" cy="18" r="17.5" stroke="#000"/></svg>
        </div>
        <div class="pagination"><span class="update-numbers"></span> /{{page.Slides.size}}</div>
      </div>
      <div class="dots"></div>
    </div>
  </div>
</div>
{% include minifooter.html %}
