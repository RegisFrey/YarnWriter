<template>
  <div id="app">
    <Workspace />
    <Settings v-show="false"/>
    <Welcome v-show="false"/>
    <Guide v-show="false"/>
    <History v-show="false"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Workspace from '@/components/Workspace.vue'
import Settings from '@/components/Settings.vue'
import Guide from '@/components/Guide.vue'
import History from '@/components/History.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Workspace,
    Settings,
    Guide,
    History
  },
  data () {
    return {
      showing: {
        welcome: true,
        settings: false
      }
    }
  }
})
</script>

<style>
@import './reset.css';
@import './main.scss';

#app {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}
</style>
