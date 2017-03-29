<template>
  <div class="yarn-editor">
    <input placeholder="Title" />
    <input placeholder="Tags" />
    <div class="yarn-editor-input js-ace-editor" ref="editor">
    </div>
  </div>
</template>

<script>
  import * as ace from 'brace';
  import 'brace/mode/javascript';
  import 'brace/theme/monokai';

  export default {
    data() {
      return {
        editor: null,
        content: 'testing 1234',
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
      // setup ace editor
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

<style>
.yarn-editor-input{
    min-height: 100px;
}
</style>
