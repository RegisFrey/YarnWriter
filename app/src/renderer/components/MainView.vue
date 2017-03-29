<template>
    <div class="main-view">
        <yarn-editor></yarn-editor>
        <nodes-view></nodes-view>
    </div>
</template>

<script>
  import YarnEditor from './MainView/YarnEditor';
  import NodesView from './MainView/NodesView';

  export default {
    components: {
      YarnEditor,
      NodesView,
    },
    name: 'main-view',
  };
</script>

<style scoped>
</style>
