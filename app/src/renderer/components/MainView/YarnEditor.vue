<template>
  <div>
    <md-dialog :md-open-from="openedNodeID" :md-close-to="openedNodeID" ref="dialog-yarn-editor" class="yarn-editor">
      <md-dialog-title>
        <md-input-container class="yarn-editor-title-container">
          <label>Title</label>
          <md-input placeholder="Node Title" class="yarn-editor-title"></md-input>
        </md-input-container>

        <md-chips v-model="tags" md-input-placeholder="Add a Tag">
          <template scope="chip">{{ chip.value }}</template>
        </md-chips>
      </md-dialog-title>

      <md-dialog-content>
        <div class="yarn-editor-input js-ace-editor" ref="editor">
        </div>
      </md-dialog-content>

      <md-dialog-actions>
        <md-button class="md-primary" @click.native="closeDialog('dialog-yarn-editor')">Cancel</md-button>
        <md-button class="md-primary" @click.native="closeDialog('dialog-yarn-editor')">Ok</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" id="custom" @click.native="openDialog('dialog-yarn-editor')">Custom</md-button>
  </div>

  <!-- div class="yarn-editor">
    <md-input-container>
      <label>Title</label>
      <md-input placeholder="Node Title"></md-input>
    </md-input-container>
    <md-input-container>
      <md-chips v-model="tags" md-input-placeholder="Add a Tag">
        <template scope="chip">{{ chip.value }}</template>
      </md-chips>
    </md-input-container>
    <div class="yarn-editor-input js-ace-editor" ref="editor">
    </div>
  </div -->
</template>

<script>
  import * as ace from 'brace';
  import 'brace/mode/javascript';
  import 'brace/theme/monokai';

  export default {
    data() {
      return {
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
      openDialog(ref) {
        this.$refs[ref].open();
      },
      closeDialog(ref) {
        this.$refs[ref].close();
      },
      onOpen() {
        console.log('Opened'); // eslint-disable-line no-console
        // setup ace editor
        this.editor = ace.edit(this.$refs.editor);
        this.editor.getSession().setMode('ace/mode/javascript');
        this.editor.setTheme('ace/theme/monokai');
      },
      onClose(type) {
        console.log('Closed', type); // eslint-disable-line no-console
      },
    },
    mounted() {

    },
    ready() {
      window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.handleResize);
    },
  };
</script>

<style>
.yarn-editor .md-dialog{
  width: 100%;
  height: 100%;
}
.yarn-editor-title-container{
  margin: 0;
}
.yarn-editor-title {
  font-weight: bold;
  /* mdHeadline */
  font-size: 24px !important;
  line-height: 32px !important;
}
.yarn-editor-input{
  min-height: 100px;
  /* display: block; */
  height: 100%;
  width: 100%;
  background-color: cadetblue;
}
</style>
