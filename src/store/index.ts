import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Multiple Windows, Multiple Documents ?

enum AppPanel {
  Welcome = 'welcome',
  Settings = 'settings',
  Guide = 'guide',
}

interface AppState {
  showing: { [panel in AppPanel]?: boolean };
  settings: AppSettings;
  workspace: Workspace;
}

interface Workspace {
  window: {
    size: {
      x: number;
      y: number;
      w: number;
      h: number;
    };
  };
  viewport: {
    zoom: number;
    offset: {
      x: number;
      y: number;
    };
  };
}

interface AppSettings {
  theme: AppThemeMode;
  keymappings: any;
}

enum AppThemeMode {
  Light = 'light',
  Dark = 'dark',
  OS = 'os-driven',
}

export default new Vuex.Store<AppState>({
  state: {
    showing: {
      welcome: true,
      settings: false
    },
    settings: {
      theme: AppThemeMode.OS,
      keymappings: []
    },
    workspace: {
      window: {
        size: {
          x: 0,
          y: 0,
          w: 800,
          h: 600
        }
      },
      viewport: {
        zoom: 1,
        offset: {
          x: 0,
          y: 0
        }
      }
    }
  },
  mutations: {
    // Panels
    show (state, panelKey: AppPanel) {
      state.showing[panelKey] = true
      return state
    },
    hide (state, panelKey: AppPanel) {
      state.showing[panelKey] = false
      return state
    },
    toggle (state, panelKey: AppPanel) {
      state.showing[panelKey] = !state.showing[panelKey]
      return state
    },
    // Set Zoom To
    zoom (state, zoomTarget) {
      state.workspace.viewport.zoom = zoomTarget
      return state
    },
    //
    setDocument (state, fileJson: object) {
      // window document = fileJson
      return state
    }
  },
  actions: {
    openDocument (context, filePath: string) {
      // if filepath load from filesystem
      // if there is a currently focused window with no open document (showing welcome)
      // use that and hide welcome
      context.commit('hide', AppPanel.Welcome)
      // else open new window
    }
  },
  modules: {
  }
})
