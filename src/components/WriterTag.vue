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
<WriterThemeContext show-toggle>
  <writer-tag title="fight scene" /> <writer-tag title="home" /> <writer-tag title="other" />
</WriterThemeContext>
```
</docs>
