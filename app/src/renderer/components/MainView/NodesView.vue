<template>
    <div>
        <node></node>
        <node></node>
    </div>
</template>

<script>
  import Node from './NodesView/Node';

  export default {
    components: {
      Node,
    },
    name: 'nodes-view',
  };
</script>

<style scoped>
</style>
