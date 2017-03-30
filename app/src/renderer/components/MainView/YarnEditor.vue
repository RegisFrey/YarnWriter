<template>
  <div class="yarn-editor" v-if="showing">
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
        Saving... <a href="">21 revisions</a>
      </span>
    </footer>
  </div>
</template>

<script>
  import '../YarnIcons/info';

  import * as ace from 'brace';
  import 'brace/mode/javascript';
  import 'brace/theme/monokai';

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
      this.editor.getSession().setMode('ace/mode/javascript');
      this.editor.setTheme('ace/theme/monokai');
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
.yarn-editor{
  width: 90vw;
  height: 90vh;
  margin: 5vh 5vw;
  border-radius: 5px;
  overflow: hidden;
  display:flex;
  flex-direction: column;
}

.panel-header{
  background-color: #EEF2F5;
  display:flex;
  flex-direction:column;
  padding: 0 10px;
  box-sizing: border-box;
}
.panel-footer{
  background-color: #EEF2F5;
  color: #A1AEC0;
  height: 32px;
  line-height: 32px;
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
  flex: 1;
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
  min-height: 100px;
  /* display: block; */
  height: 100%;
  width: 100%;
}
</style>
