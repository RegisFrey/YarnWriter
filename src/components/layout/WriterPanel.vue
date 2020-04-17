<template>
  <div class="wr-panel">
    hello
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

/**
 * Container for UI over Workspace
 */
export default Vue.extend({
  props: {}
})
</script>

<style lang="scss">
@import '~@/mixins.scss';

.wr-panel {
  background-color: var(--color-fg);
  @include shadow;
}
</style>

<docs>
```js
<WriterThemeContext show-toggle>
  <writer-pegboard style="padding: 20px;">
  </writer-pegboard>
</WriterThemeContext>
```
</docs>
