<template>
  <div id="app">
    <Workspace />
    <Welcome v-show="!documentWindow.welcomeDismissed" v-on:dismiss-welcome="dismissWelcome"/>

    <Welcome v-show="false"/>
    <Settings v-show="false"/>
    <Guide v-show="false"/>
    <History v-show="false"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Workspace from '@/views/Workspace.vue'
import Welcome from '@/views/Welcome.vue'
import Settings from '@/views/Settings.vue'
import Guide from '@/views/Guide/Index.vue'
import History from '@/views/History.vue'
import { WriterDocumentWindow } from './types/Window'

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
    documentWindow () {
      return this.$store.direct.state.windows.openWindows[0] as WriterDocumentWindow
    }
  },
  methods: {
    dismissWelcome () {
      this.$store.direct.commit.dismissWelcome(0)
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
