<template>
  <div id="app">
    <Workspace />
    <Welcome v-show="showing.welcome"/>
    <Settings v-show="showing.settings"/>
    <Guide v-show="showing.guide"/>
    <History v-show="showing.history"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Workspace from '@/views/Workspace.vue'
import Welcome from '@/views/Welcome.vue'
import Settings from '@/views/Settings.vue'
import Guide from '@/views/Guide.vue'
import History from '@/views/History.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Workspace,
    Welcome,
    Settings,
    Guide,
    History
  },
  computed: {
    showing () {
      return this.$store.direct.state.windows.showing
    }
  }
})
</script>

<style lang="scss">
@import '~./reset.css';
@import '~./main.scss';

html, body, #app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;

  @include lightTheme;
}
</style>
