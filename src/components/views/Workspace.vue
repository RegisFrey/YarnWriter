<template>
  <div class="workspace">
    <WriterPegboard class="workspace__pegboard" />

    <WriterFloatingActionButton v-if="singleWindowMode" class="workspace__btn-menu">
        <IconMenu title="Menu" v-if="!menuOpen" />
        <IconClose title="Close" v-if="menuOpen" />
      </WriterFloatingActionButton>

    <div class="workspace__tools">

      <!-- <button><IconSearch/><span class="alt-sr">Search</span></button> -->

      <WriterFloatingActionButton>
        <IconAdd title="Add Node" />
      </WriterFloatingActionButton>

      <WriterFloatingActionButton v-if="singleWindowMode">
        <IconGuide title="Guide" />
      </WriterFloatingActionButton>
    </div>
  </div>
</template>

<script>
import WriterPegboard from '@/components/layout/WriterPegboard.vue'
import IconAdd from 'vue-material-design-icons/Plus' // PlusBoxOutline
import IconMenu from 'vue-material-design-icons/Menu'
import IconClose from 'vue-material-design-icons/Close'
import IconGuide from 'vue-material-design-icons/HelpCircleOutline'
// import IconSettings from 'vue-material-design-icons/Settings' // Outline

export default {
  name: 'Workspace',
  components: {
    WriterPegboard,
    IconAdd,
    IconMenu,
    IconClose,
    IconGuide
  },
  props: {
    documentIndex: { type: Number, default: 0 },
    singleWindowMode: { type: Boolean, default: false }
  },
  data () {
    return {
      menuOpen: false
    }
  },
  computed: {
    document () {
      return this.$store.direct.state.documents[this.documentIndex]
    }
  }
}
</script>

<style>
.workspace, .workspace__pegboard {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
.workspace__pegboard {
  z-index: 1;
}
.workspace__tools {
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 2;
  display: flex;
}
.workspace__btn-menu {
  position: absolute;
  top: 8px;
  left: 8px;
  z-index: 2;
}
</style>

<docs>
```js
<WriterThemeContext show-toggle style="position: relative; height: 400px;">
  <Workspace single-window-mode />
</WriterThemeContext>
```
</docs>
