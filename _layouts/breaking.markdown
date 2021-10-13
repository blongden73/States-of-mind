{% include header.html %}
<div class="som-panel scroller left beige book noPad">
  <div class="flex">
  <div class="som-left white">
    <div class="som-image-style">
      <img src="{{page ['Intro image']}}">
    </div>
  </div>
  <div class="som-right">
    <div class="som-scroll-text right">
      {{page ['Intro text'] | markdownify}}
    </div>
  </div>
  </div>
</div>
<div class="som-panel scroller right blue book noPad">
  <div class="flex">
  <div class="som-left">
    <div class="som-scroll-text left">
      {{page ['Ambassador description'] | markdownify}}
    </div>
  </div>
  <div class="som-right">
    <img src="{{page ['Ambassador image']}}">
  </div>
  </div>
</div>
<div class="som-panel scroller left white noPad">
  <div class="flex">
  <div class="som-left">
    <img src="{{page ['Education image']}}">
  </div>
  <div class="som-right">
    <div class="som-scroll-text">
      <div class="som-scroll-sub-head">
        How we work
      </div>
      {{page ['Eduacation description'] | markdownify}}
    </div>
  </div>
  </div>
</div>
<div id="carousel" class="som-carousel">
  <div class="som-wrapper">
    <div class="som-panel-title">
      <h1>What our community says…</h1>
      <div class="som-scroll">
        <svg width="72" height="11" viewBox="0 0 72 11" xmlns="http://www.w3.org/2000/svg"><path d="M7.015 7.645c0 1.515-1.305 2.535-3 2.535-.825 0-1.38-.165-2.1-.54l-.045.555-.9-.12.15-1.59c.045-.45-.06-.9-.15-1.335l.9-.135.09.72C2.095 8.8 2.695 9.34 4.09 9.34c.885 0 1.95-.465 1.95-1.605 0-2.67-4.845-1.2-4.845-4.485 0-1.62 1.53-2.43 2.985-2.43.54 0 1.215.135 1.695.39l.09-.585.9.165-.135 1.5c-.045.45.045.885.135 1.32l-.915.135c-.03-.42-.015-1.02-.21-1.395-.285-.525-.915-.69-1.59-.69-.825 0-1.98.39-1.98 1.53 0 2.415 4.845 1.095 4.845 4.455zM15.79 8.68l.33.765a6.39 6.39 0 01-2.91.735c-1.905 0-3.435-1.26-3.435-3.225 0-1.98 1.485-3.345 3.435-3.345.825 0 1.875.255 2.295 1.05l-.03.75.045.765h-.96l.015-.42c.03-.975-.495-1.305-1.44-1.305-1.395 0-2.385 1.005-2.385 2.4 0 1.485 1.005 2.49 2.49 2.49.855 0 1.785-.27 2.55-.66zm5.46-2.64v3.12h2.715V10h-4.95v-.84h1.305V4.645l-1.095.15-.135-.765c.48-.03.975-.09 1.32-.405.12-.135.21-.255.405-.255.435 0 .435.42.435.75v.795c.825-.6 1.62-1.305 2.7-1.305.78 0 1.275.525 1.515 1.215l-.93.375c-.12-.315-.27-.75-.675-.75-.765 0-2.025 1.065-2.61 1.59zm9.735 4.14c-1.86 0-3.27-1.44-3.27-3.285 0-1.86 1.41-3.285 3.27-3.285s3.27 1.425 3.27 3.285c0 1.845-1.41 3.285-3.27 3.285zm0-.84c1.38 0 2.295-1.125 2.295-2.445 0-1.335-.915-2.445-2.295-2.445S28.69 5.56 28.69 6.895c0 1.32.915 2.445 2.295 2.445zM40.57.94v8.22h2.505V10h-6.24v-.84h2.805V1.465c-.51.09-1.02.135-1.545.15l-.87.03-.15-.825.96-.015c.465 0 1.35-.03 1.68-.42.12-.135.21-.225.405-.225.465 0 .45.45.45.78zm9 0v8.22h2.505V10h-6.24v-.84h2.805V1.465c-.51.09-1.02.135-1.545.15l-.87.03-.15-.825.96-.015c.465 0 1.35-.03 1.68-.42.12-.135.21-.225.405-.225.465 0 .45.45.45.78zm20.136 5.017l-.578.667c-.176.21-.381.376-.616.498-.22.117-.461.175-.725.175a1.51 1.51 0 01-.747-.175c-.302-.162-.51-.323-.622-.484-.254-.386-.39-.588-.41-.608a3.59 3.59 0 01-.3-.549.686.686 0 00-.352-.352.87.87 0 00-.388-.102.77.77 0 00-.396.102c-.17.098-.286.198-.344.3-.049.084-.103.191-.161.323l-1.04-.645c.097-.376.297-.7.6-.974.186-.17.39-.324.615-.461.186-.108.428-.156.726-.147.317.01.559.066.725.169.307.195.532.351.673.469.093.073.247.285.462.637.137.224.22.366.249.425.015.034.134.141.359.322.068.058.183.088.344.088a.659.659 0 00.352-.11 1.35 1.35 0 00.388-.308c.078-.097.093-.232.044-.403h-1.37v-1.37h3.018l.864.865v3.018h-1.37v-1.37z" fill="#000" fill-rule="nonzero"/></svg>
      </div>
    </div>
  </div>
  <ul>
    {% for item in page['Carousel']  %}
        <li class="magnify">
          <h1 class="shadow-headline">{{item.Quote}}</h1>
          <h1 class="shadow-headline attrib">{{item.Name}}<span>{{item.Age}}</span></h1>
          {% if item.Image %}
          <img src="{{item.Image}}">
          {% endif %}
        </li>
    {% endfor %}
  </ul>
</div>
<div class="som-panel scroller right blue book noPad">
  <div class="flex">
  <div class="som-left">
    <div class="som-scroll-text left">
      {{page ['Research description'] | markdownify}}
    </div>
  </div>
  <div class="som-right white">
    <div class="som-image-style">
      <img class="top" src="{{page ['Research image']}}">
    </div>
  </div>
  </div>
</div>
<div class="som-panel fade-in overlap full left green">
  <div class="som-wrapper flex">
    <div class="som-left green">
      <div class="som-video-style">
        {{page ['Case Study Video']}}
      </div>
    </div>
    <div class="som-right">
      <h1 class="centred small">
        <div class="som-scroll-sub-head">
          Youth Led Research
        </div>
        Case Study
        <span>{{page ['Case study text']}}</span></h1>
    </div>
  </div>
</div>
{% include footer.html %}
