<template>
  <button
    class="wr-btn"
    v-on:click="$emit('click', $event)"
    :disabled="disabled"
    >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
// import VueMonaco from "vue-monaco";
/**
 * Editor to edit node content or whole story file
 */
export default {
  // components: { VueMonaco },
  props: {
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style>
.wr-btn {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
</style>

<docs>
```jsx
<WriterButton label="Example Button"/>
<WriterButton>Example Button Slot</WriterButton>
```
</docs>
