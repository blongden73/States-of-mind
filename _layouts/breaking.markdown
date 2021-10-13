{% include header.html %}
<div class="som-panel scroller left beige book noPad">
  <div class="flex">
  <div class="som-left white">
    <div class="som-image-style">
      <img src="{{page ['image-one']}}">
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
    <img src="{{page ['image-two']}}">
  </div>
  </div>
</div>
<div class="som-panel scroller left beige book noPad">
  <div class="flex">
  <div class="som-left white">
    <div class="som-image-style">
      <img src="{{page ['image-three']}}">
    </div>
  </div>
  <div class="som-right">
    <div class="som-scroll-text right">
      {{page ['text-block-three description'] | markdownify}}
    </div>
  </div>
  </div>
</div>
<div class="som-panel scroller right blue book noPad">
  <div class="flex">
  <div class="som-left">
    <div class="som-scroll-text left">
      {{page ['text-block-four description'] | markdownify}}
    </div>
  </div>
  <div class="som-right">
    <img src="{{page ['image-four']}}">
  </div>
  </div>
</div>
<div class="som-panel scroller left beige book noPad">
  <div class="flex">
  <div class="som-left white">
    <div class="som-image-style">
      <img src="{{page ['image-five']}}">
    </div>
  </div>
  <div class="som-right">
    <div class="som-scroll-text right">
      {{page ['text-block-five description'] | markdownify}}
    </div>
  </div>
  </div>
</div>


{% include footer.html %}
