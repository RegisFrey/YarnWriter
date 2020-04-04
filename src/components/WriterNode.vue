<template>
  <div class="wr-node" v-bind:class="[`test`, `wr-theme-tint--${color}`]">
    <h2 class="wr-node__title">
      <IconDots />
      {{ title }}
      <IconPencil />
      <IconTrash />
      <IconPalette />
    </h2>
    <div class="wr-node__summary">
      {{ summary }}
    </div>
    <div class="wr-node__tags">
      <button><i class="fas fa-plus"></i></button>
      <writer-tag v-for="tag in tags" v-bind:key="tag" v-bind:title="tag" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import IconTrash from 'vue-material-design-icons/TrashCanOutline.vue'
import IconPalette from 'vue-material-design-icons/Palette.vue'
import IconDots from 'vue-material-design-icons/DotsVertical.vue'
import IconPencil from 'vue-material-design-icons/Pencil.vue'

import WriterTag from '@/components/WriterTag.vue'

/**
 * Nodes to organize story chunks, visualize linkages
 */
export default Vue.extend({
  components: {
    WriterTag,
    IconTrash,
    IconPalette,
    IconDots,
    IconPencil
  },
  props: {
    /**
     * A user provided title that also acts as a link target
     */
    title: {
      type: String,
      default: ''
    },
    /**
     * A highlighted section of the full text of the node.
     * By default the start of a story node's content.
     */
    summary: {
      type: String,
      default: 'No Text'
    },
    /**
     * A color to help in organization of nodes.
     * Can be a string key: red, pink, purple, blue, green, yellow
     *
     * TODO: Support the following
     * - integer (id) or string (key) that map to an enumerated set of colors
     */
    color: {
      type: String, // [String, Number],
      default: ''
    },
    /**
     * Tags to categorize and search for this node
     */
    tags: {
      type: Array, // of String
      default: () => []
    }
  }
})
</script>

<style>
/*
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css");
*/

.wr-node {
  color: var(--color-fg-text);
  background-color: var(--color-fg);
  border: 2px solid var(--color-fg-border);

  /* shadow */
  box-shadow: 0px 2px 4px 0px rgba(95, 97, 121, 0.4);

  border-radius: 8px;

  width: 200px;
  /* height: 120px; */

  display: flex;
  flex-direction: column;
  overflow: hidden;
}
.wr-node__title {
  background-color: var(--color-fg-raised);
  font-weight: bold;
  padding: 4px 8px;
}
.wr-node__summary {
  opacity: 0.8;
  padding: 4px 8px;
}
.wr-node__tags {
  padding: 4px 8px;
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
  <writer-pegboard style="padding: 20px;">
    <writer-node title="Start" summary="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non." />
    <writer-node title="Fight Scene" />
    <writer-node title="At The End of Everything" v-bind:tags="['HoldOn','Anything']" />

    <writer-node title="Red" color="red" v-bind:tags="['Sample Tag']" />
    <writer-node title="Pink" color="pink" v-bind:tags="['Sample Tag']" />
    <writer-node title="Purple" color="purple" v-bind:tags="['Sample Tag']" />
    <writer-node title="Blue" color="blue" v-bind:tags="['Sample Tag']" />
    <writer-node title="Green" color="green" v-bind:tags="['Sample Tag']" />
    <writer-node title="Yellow" color="yellow" v-bind:tags="['Sample Tag']" />

  </writer-pegboard>
</div>
```
</docs>
