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
</style>

<docs>
```jsx
let darkMode = false;
<label>
  <input type="checkbox" v-model="darkMode" />
  Dark Mode
</label>

<div class="wr-theme" v-bind:class="{ 'wr-theme--light': !darkMode, 'wr-theme--dark': darkMode }">
  <writer-pegboard style="width: 400px; height: 400px;">
    Hello World
  </writer-pegboard>
</div>
```
</docs>
