<template>
  <button
    class="wr-btn-fab"
    v-on:click="$emit('click', $event)"
    :disabled="disabled"
    >
    <slot></slot>
  </button>
</template>

<script>
/**
 * Floating Action Button for top level actions shown over the Workspace.
 */
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '~@/tokens/shared.scss';

.wr-btn-fab {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  @include floating;

  border-radius: $size-control/2;
  height: $size-control;
  width: $size-control;
  font-size: $size-control-font;
  color: hsl(218, 55%, 49%);// $color-control-text-light;
  padding: 4px;
  margin: 8px 4px;

  border: 2px solid transparent;
  &:focus {
    border: 2px solid hsl(218, 55%, 49%);
    outline: none;
  }
  svg {
    display: block; // icons should position correctly, otherwise they are inline
  }
}
</style>

<docs>
```js
<template>
<WriterThemeContext show-toggle>
  <WriterPegboard style="padding:20px;">
    <WriterFloatingActionButton><IconMenu title="Menu" /></WriterFloatingActionButton>
    <WriterFloatingActionButton><IconBook title="Guide" /></WriterFloatingActionButton>
  </WriterPegboard>
</WriterThemeContext>
</template>

<script>
import IconMenu from 'vue-material-design-icons/Menu.vue'
import IconBook from 'vue-material-design-icons/BookOpen.vue'

export default {
  components: {
    IconMenu,
    IconBook
  }
}
</script>
```
</docs>
