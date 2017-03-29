<template>
<md-card class="node">
  <md-card-header>
    <md-card-header-text>
      <div class="md-title node-title">Node Title Here</div>
    </md-card-header-text>

    <md-menu md-size="4" md-direction="bottom left">
      <md-button class="md-icon-button" md-menu-trigger>
        <md-icon>more_vert</md-icon>
      </md-button>

      <md-menu-content>
        <md-menu-item>
          <span>Delete</span>
          <md-icon>delete</md-icon>
        </md-menu-item>
      </md-menu-content>
    </md-menu>
  </md-card-header>

  <md-card-content>
    node content
  </md-card-content>

  <md-chips v-model="tags" class="tags" md-static>
    <template scope="chip">{{ chip.value }}</template>
  </md-chips>
</md-card>
</template>

<script>
  export default {
    data() {
      return {
        tags: ['tag 1', 'tag 2'],
      };
    },
  };
</script>

<style>
/*
.node{
  width: 150px;
  height: 150px;
  position: absolute;
  background-color: #ddd;

}
*/
</style>
