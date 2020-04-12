<template>
  <svg class="wr-node-connections">
    <defs>
        <marker id="wr-node-pointer" viewBox="0 0 14 19" refX="0" refY="9.5"
                markerUnits="strokeWidth" markerWidth="4"
                markerHeight="3" orient="auto">
            <path d="M1.687539e-13,2.00008748 L1.687539e-13,17.068778 C1.687539e-13,18.1733475 0.8954305,19.068778 2,19.068778 C2.44696196,19.068778 2.88104288,18.9190586 3.23296644,18.6435141 L12.8557793,11.1091688 C13.7254821,10.4282203 13.8784976,9.17116903 13.197549,8.3014663 C13.0978611,8.1741456 12.9831,8.05938457 12.8557793,7.95969665 L3.23296644,0.425351391 C2.36326372,-0.255597173 1.10621247,-0.102581691 0.425263911,0.767121036 C0.149719365,1.1190446 1.687539e-13,1.55312552 1.687539e-13,2.00008748 Z"></path>
        </marker>
    </defs>
    <line
      v-for="path in connections"
      :key="path.key"
      :x1="path.from.x"
      :y1="path.from.y"
      :x2="path.to.x"
      :y2="path.to.y"
      marker-end="url(#wr-node-pointer)"
      />

  </svg>
</template>

<script lang="ts">
import Vue from 'vue'

interface Coord {
  x: number;
  y: number;
}

// use Vuex UpdateNodeContent action to scan for removed/added connections
// and update a cached array (instead of rerunning a whole computed)
// same for UpdateNodePosition (to redecide the connections)

interface NodeConnection {
  key: string; // node::node
  from: Coord;
  to: Coord;
}

/**
 * Draw connections between nodes. Sharing one SVG canvas.
 */
export default Vue.extend({
  props: {
    /**
     * Array of the connecting lines between nodes
     */
    connections: {
      type: Array as () => Array<NodeConnection>,
      default: () => []
      // filter to rects that overlap viewport? or leave that to SVG renderer?
    },
    /**
     * Use to show the currently visible slice of the SVG
     */
    viewport: {
      type: Object,
      default: () => { return { x: 0, y: 0, width: 100, height: 100 } }
    }
  }
})
</script>

<style lang="scss">
.wr-node-connections {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  height: 100%;
  width: 100%;

  line {
    stroke-width: 6px;
    stroke: #4FABE1;
    stroke-linecap: round;
  }
}
#wr-node-pointer {
  fill: #4FABE1;
}
</style>

<docs>
```js
const connections = [
  { key: 'Example::Other', from: { x: 10, y: 10 }, to: { x: 100, y: 100 } },
  { key: 'Example::Someone', from: { x: 40, y: 80 }, to: { x: 20, y: 100 } },
  { key: 'Someone::Other', from: { x: 10, y: 150 }, to: { x: 80, y: 150 } }
]

<WriterThemeContext show-toggle>
  <WriterPegboard style="width: 200px; height: 200px; position: relative;">
    <WriterNodeConnections v-bind:connections="connections" v-bind:viewport="{ x: 0, y: 0, width: 200, height: 200}" />
  </WriterPegboard>
</WriterThemeContext>
```
</docs>
