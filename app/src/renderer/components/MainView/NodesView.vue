<template>
    <div>
        <node id="node1" style="top: 600px;left: 160px;"></node>
        <node id="node2"></node>
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
