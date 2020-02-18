{% include header.html %}
<div class="som-page-title">
  <div class="som-wrapper">
    <h1>We provide</h1>
  </div>
</div>
<canvas id="canvas4"></canvas>
<div class="som-carousel services">
  <ul>
      <li class="magnify education">
        <h1>Education series</h1>
        <p class="courier">{{page ['Education Series description'] | markdownify}}</p>
      </li>
      <li class="magnify project">
        <h1>Project Based Learning programme for Wellbeing</h1>
        <p class="courier">{{page ['Project Based Learning programme for Wellbeing description'] | markdownify}}</p>
      </li>
      <li class="magnify research">
        <h1>Wellbeing Reports & research</h1>
        <p class="courier">{{page ['Wellbeing Reports description'] | markdownify}}</p>
      </li>
      <li class="magnify ambassadors">
        <h1>Wellbeing Ambassadors Programme</h1>
        <p class="courier">{{page ['Wellbeing Ambassadors Programme description'] | markdownify}}</p>
      </li>
  </ul>
</div>
{% include footer.html %}
