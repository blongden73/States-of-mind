{% include miniheader.html %}
<div class="slides-wrapper">
  <div class="slide slide-cover">
    <img src="{{page.['Cover Image']}}">
    <div class="som-wrapper">
      <h1 style="color:{{page.['Cover Colour']}};">{{page.title}}</h1>
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
  {% assign links = slide.Links %}
    <div class="slide {{template}}">
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
        {% elsif template == "one" %}
          {% include templateone.html %}
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
  {% endfor %}
</div>
<div class="slides-footer">
  <div class="slides-counter">
    <div class="som-wrapper">
      <span>x</span> / {{page.Slides.size}}
    </div>
  </div>
</div>
{% include minifooter.html %}
