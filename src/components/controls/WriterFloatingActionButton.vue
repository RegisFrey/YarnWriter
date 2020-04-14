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
@import '~@/tokens/mixins.scss';

.wr-btn-fab {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: var(--color-fg);
  @include shadow;

  border-radius: calc(var(--space-control-m) / 2);
  height: var(--space-control-m);
  width: var(--space-control-m);
  font-size: var(--font-size-control);
  color: var(--color-interactive);
  padding: 4px;
  margin: 8px 4px;

  border: var(--line-weight-m) solid transparent;
  &:focus {
    border: var(--line-weight-m) solid var(--color-interactive);
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
