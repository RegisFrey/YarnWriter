<template>
<div class="yarn-editor-container" v-if="showing">
  <div class="yarn-editor">
    <header class="panel-header">
      <input class="yarn-editor-title" placeholder="Node Title" />
      <input class="yarn-editor-tags" placeholder="Add a Tag" />
    </header>

    <div class="panel-content">
      <div class="yarn-editor-input js-ace-editor" ref="editor">
      </div>
    </div>

    <footer class="panel-footer">
      <button class="action-btn markup-btn">
        <svgicon class="action-icon" icon="info" width="21" height="21" title="Show Markup"></svgicon>
      </button>

      <span class="yarn-editor-save-status">
        <!-- Saving... <a href="">21 revisions</a> -->
      </span>
    </footer>
  </div>
</div>
</template>

<script>
  // TODO: clicking on container (but not editor window) closes window
  // TODO: escape key closes window (i.e. showing = false)
  // TODO: info button shows sidepanel with markup cheatsheet
  // TODO: ROADMAP: google docs like versioning of document/nodes

  import '../YarnIcons/info';

  import * as ace from 'brace';
  // import 'brace/mode/javascript';
  // import 'brace/theme/monokai';
  import 'yarn-brace';

  export default {
    data() {
      return {
        showing: true,
        editor: null,
        content: 'testing 123456',
        tags: ['tag 1', 'tag 2'],
        openedNodeID: 'node1',
      };
    },
    components: {
    },
    events: {

    },
    methods: {
      handleResize() {

      },
    },
    mounted() {
      this.editor = ace.edit(this.$refs.editor);
      this.editor.getSession().setMode('ace/mode/yarn');
      this.editor.setTheme('ace/theme/yarn');
      this.editor.setOption('showPrintMargin', false);
      this.editor.setOption('fontSize', '14pt');

      // test softwrap
      this.editor.getSession().setUseWrapMode(true);
      this.editor.getSession().setWrapLimitRange();
    },
    ready() {
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  };
</script>

<style lang="scss">
.yarn-editor-container {
  display: block;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0.2,0,0.2,0.3);
  z-index: 1000;
}
.yarn-editor{
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw;
  border-radius: 5px;
  overflow: hidden;
  display:flex;
  flex-direction: column;
  box-shadow: 0px 3px 8px rgba(0,0,0,0.2);
}

.panel-header{
  background-color: #EEF2F5;
  display:flex;
  flex-direction:column;
  padding: 6px 10px;
  box-sizing: border-box;
  flex: 0 0 auto;
}
.panel-footer{
  background-color: #EEF2F5;
  color: #A1AEC0;
  height: 32px;
  line-height: 32px;
  flex: 0 0 auto;
  .action-btn {
    height: 32px;
    display: block;
    float: left;
  }
  .action-icon path[pid="0"] {
    fill: #A1AEC0;
  }
  a {
    color: #6a7d98;
  }
}

.panel-content {
  flex: 1 1 auto;
  position: relative;
  display:flex;
  flex-direction:row;
}

.yarn-editor-save-status {
  float: right;
  padding: 0 8px;
}

.yarn-editor-title {
  flex:1;
  font-weight: bold;
  font-size: 24px;
  line-height: 32px;
  background: transparent;
  border: none;
  border-bottom: 2px solid #B2C2DB; // #A1AEC0;
  &:focus {
    outline: none;
    border-bottom-color: #6a7d98;
  }
}
.yarn-editor-tags {
  flex:1;
}
.yarn-editor-input{
  flex:1;
  /*
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  */
}
</style>
