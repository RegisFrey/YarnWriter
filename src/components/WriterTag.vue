<template>
  <span class="wr-tag">
    {{ title }}
  </span>
</template>

<script>
/**
 * Tags to organize story content
 */
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.wr-tag {
  background-color: var(--color-fg-inset);
  border-radius: 4px;
  font-size: 10px;
  padding: 4px 8px;
  margin-right: 4px;
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
  <writer-tag title="fight scene" /> <writer-tag title="home" /> <writer-tag title="other" />
</div>
```
</docs>
