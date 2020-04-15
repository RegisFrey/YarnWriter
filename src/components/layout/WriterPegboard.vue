<template>
  <div class="wr-pegboard">
    <slot></slot>
  </div>
</template>

<script>
/**
 * Background to orient cards against, track movement from scrolling or dragging.
 */
export default {}
</script>

<style>
.wr-pegboard {
  background-image: radial-gradient(var(--color-bg-inset) 20%, transparent 20%);
  background-color: var(--color-bg);
  background-position: 0 0, 7px 7px;
  background-size: 14px 14px;
}
/*
  gridlines
  background-color: #f1f2f3;
  background-image:
    linear-gradient(0deg, transparent .05em, rgba(0,0,0,.05) .05em, rgba(0,0,0,.05) .125000em, transparent .125000em),
    inear-gradient(rgba(0,0,0,.05) .062500em, transparent .062500em);
  background-size: .75em .75em;
  background-position: 0 -0.5em;
*/
</style>

<docs>
```js
<WriterThemeContext show-toggle>
  <writer-pegboard style="width: 400px; height: 150px;">
    Hello World
  </writer-pegboard>
</WriterThemeContext>
```
</docs>
