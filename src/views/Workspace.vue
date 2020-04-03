<template>
  <div class="workspace">
    <WriterPegboard>
    </WriterPegboard>
  </div>
</template>

<script>
import WriterPegboard from '@/components/WriterPegboard.vue'

export default {
  name: 'Workspace',
  components: { WriterPegboard }
}
</script>

<style>
.workspace {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
