<template>
  <div class="wr-theme" :class="{ 'wr-theme--light': !darkInternal, 'wr-theme--dark': darkInternal }">
    <label v-if="showToggle" style="display: block; margin-bottom: 5px;">
      <input type="checkbox" v-model="darkInternal" /> Dark Mode
    </label>
    <slot></slot>
  </div>
</template>

<script>
/**
 * A helper to put correct css theme variables into the surrounding css context for components.
 */
export default {
  props: {
    dark: { type: Boolean, default: false },
    showToggle: { type: Boolean, default: false }
  },
  data () {
    return {
      darkInternal: this.dark
    }
  },
  watch: {
    dark (newValue) { this.darkInternal = newValue }
  }
}
</script>

<docs>
```js
<WriterThemeContext showToggle />
```
</docs>
