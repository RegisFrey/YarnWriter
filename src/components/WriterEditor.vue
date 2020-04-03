<template>
  <div class="wr-editor">
    <h1>{{ title }}</h1>
    <div class="wr-editor__tags">
      <button><i class="fas fa-plus"></i></button>
      <writer-tag v-for="tag in tags" v-bind:key="tag" v-bind:title="tag" />
    </div>
    <vue-monaco class="wr-editor__editor" v-bind:value="value" />
  </div>
</template>

<script>
// import VueMonaco from "vue-monaco";
/**
 * Editor to edit node content or whole story file
 */
export default {
  // components: { VueMonaco },
  props: {
    title: {
      type: String,
      default: ''
    },
    // v-model
    value: {
      type: String,
      default: ''
    },
    tags: {
      type: String,
      default: ''
    }
  }
}
</script>

<style>
.wr-editor {
  display: flex;
  flex-direction: column;
}
.wr-editor__editor {
  flex: 1;
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
  <writer-editor title="fight scene" value="lorem ipsum" style="height: 400px;" />
</div>
```
</docs>
