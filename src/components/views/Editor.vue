<template>
  <div class="wr-editor">
    <header class="wr-editor__header">
      <section class="wr-editor__header__main">
        <button class="wr-editor__btn-more"><IconMore /></button>
        <h1 class="wr-editor__title">
          <input v-bind:value="title" />
          <!-- {{ title }} <!-/- TODO: Edit in place text, warnings on collision -->
        </h1>
        <!-- metadata? # of refs. # of words? -->
        <button class="wr-editor__btn-close"><IconClose /></button>
      </section>

    </header>
    <div class="wr-editor__editor" ref="monaco" v-resize:throttle="onResize" />
    <footer class="wr-editor__tags">
        <vue-tags-input
          v-model="tag"
          :tags="tags"
          @tags-changed="newTags => tags = newTags"
        />
    </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import VueTagsInput from '@johmun/vue-tags-input'
import resize from 'vue-resize-directive'
import { setupMonacoEditor } from '@/editor/monaco' // not using vue-monaco, instead using monaco directly
import * as monaco from 'monaco-editor'
import IconMore from 'vue-material-design-icons/DotsVertical.vue'
import IconClose from 'vue-material-design-icons/Close.vue'

/**
 * Editor to edit node content or whole story file
 */
export default Vue.extend({
  components: { IconMore, IconClose, VueTagsInput },
  directives: { resize },
  props: {
    // v-model
    title: {
      type: String,
      default: ''
    },
    // v-model
    value: {
      type: String,
      default: ''
    },
    // tags: {
    //  type: String,
    //  default: ''
    // },
    options: {
      type: Object,
      default () {
        return {
          // lineDecorationsWidth: 10px
        }
      }
    }
  },
  data () {
    return {
      tag: '',
      tags: []
    }
  },
  methods: {
    onResize () {
      if ('editor' in this.$options) {
        (this.$options as any).editor.layout() // eslint-disable-line
      }
    }
  },
  async mounted () {
    const monacoOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
      // lineNumbers: 'off',
      // minimap: { enabled: false }
      // turn off when text all fits on screen, when under X width, and by global setting
      // local editor settings like hard wrapping per window
    };
    (this.$options as any).editor = await setupMonacoEditor((this.$refs.monaco as HTMLElement), this.value, monacoOptions) // eslint-disable-line
  }
})
</script>

<style lang="scss">
@import '~@/tokens/shared.scss';

.wr-editor {
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  overflow: hidden;
  @include floating;
}

.wr-editor__header {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
}

.wr-editor__editor {
  flex: 1;
  min-height: 40px; // needed to allow flex to collapse
  .minimap {
    border-left: 1px solid var(--color-bg);
  }
}

$editor-left-margin: 62px; // 26px; // .monaco-editor .margin
$editor-left-margin-numbers: 36px; // .monaco-editor .margin-view-overlays .line-numbers

$header-bottom-border-size: 1px;

.wr-editor__header__main {
  // padding-left: $editor-left-margin;
  display: flex;
  border-bottom: $header-bottom-border-size solid var(--color-bg-inset);
  button, input {
    background: transparent;
    border: $header-bottom-border-size solid transparent;
    margin-bottom: -$header-bottom-border-size;
    &:focus, &:hover {
      outline: none;
      background-color: hsla(215, 100%, 91%, 0.25);
      // border-bottom: 1px solid hsl(218, 64%, 75%);
      border: $header-bottom-border-size solid hsl(218, 64%, 75%);
    }
  }
}
.wr-editor__btn-more {
  width: $editor-left-margin-numbers + 16px - 4px;
  text-align: right;
  padding-right: 8px;
  align-content: flex-end;
  border-top-left-radius: 6px;
  margin-right: -1px;
  color: hsl(218, 55%, 49%);
}
.wr-editor__title {
  flex: 1;
  input {
    padding: 8px 16px;
    font-size: 18px;
    width: 100%;
  }
}
.wr-editor__btn-close {
  padding: 0 8px;
  border-top-right-radius: 6px;
  margin-left: -1px;
  color: hsl(218, 55%, 49%);
}

.wr-editor__tags {
  // padding-left: $editor-left-margin-numbers + 16px - 8px;
  border-top: $header-bottom-border-size solid var(--color-bg-inset);
  flex: 1;
  flex-grow: 0;
  flex-shrink: 0;
  display: flex;
  .vue-tags-input {
    flex: 1;
    max-width: none;
    background-color: transparent;
    border-color: transparent;
    margin-top: -1px;
    border: 1px solid transparent;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
    &.ti-focus {
      outline: none;
      border: 1px solid hsl(218, 64%, 75%);
      background-color: hsla(215, 100%, 91%, 0.25);
    }
  }
  .ti-input, .ti-new-tag-input-wrapper {
    border: none;
    background-color: transparent;
  }
  .ti-new-tag-input {
    background-color: transparent;
    // height: 16px; // avoid heights changing when adding tags, this # was taken from computed
  }
  /* other tag styles in WriterTag.vue */
  .ti-tag, .ti-new-tag-input {
    padding: 4px 8px;
    margin-right: 4px;
    font-size: 12px;
    display: block;
    display: flex;
    box-sizing: border-box;
    line-height: 12px;
  }
  .ti-tag {
    background-color: var(--color-fg-inset) !important; /* important due to scope issue https://github.com/JohMun/vue-tags-input/issues/110 */
    color: var(--color-fg-text) !important;
    border-radius: 4px;
    // font-size: 10px;
  }
  .ti-icon-close {
    opacity: 0.35;
    padding-left: 4px;
  }
  .ti-deletion-mark {
    background-color: red !important;
    color: white !important;
  }
}
</style>

<docs>
```js
import placeholder from '@/editor/sample.yarn'

<WriterThemeContext show-toggle>
  <WriterPegboard style="height: 400px; padding: 8px; display: flex; flex-direction: column;">
    <Editor title="fight scene" v-bind:value="placeholder" style="flex: 1;"/>
  </WriterPegboard>
</WriterThemeContext>
```
</docs>
