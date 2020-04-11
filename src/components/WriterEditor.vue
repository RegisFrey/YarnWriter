<template>
  <div class="wr-editor">
    <h1>{{ title }}</h1> <!-- TODO: Edit in place text, warnings on collision -->
    <div class="wr-editor__tags">
      <!-- TODO: Tag Editor -->
    </div>
    <div class="wr-editor__editor" ref="monaco" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
// import VueMonaco from "vue-monaco";
import { setupMonacoEditor } from '@/editor/monaco'
import * as monaco from 'monaco-editor'

/**
 * Editor to edit node content or whole story file
 */
export default Vue.extend({
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
    },
    options: {
      type: Object,
      default () {
        return {

        }
      }
    }
  },
  mounted () {
    const monacoOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
      lineNumbers: 'off',
      minimap: { enabled: false }
    };
    (this.$options as any).editor = setupMonacoEditor((this.$refs.monaco as HTMLElement), this.value, monacoOptions) // eslint-disable-line
  }
})
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
```js
import placeholder from '@/editor/sample.yarn'

<WriterThemeContext show-toggle>
  <writer-editor title="fight scene" v-bind:value="placeholder" style="height: 400px;" />
</WriterThemeContext>
```
</docs>
