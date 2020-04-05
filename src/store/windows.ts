import { defineModule } from 'direct-vuex'
// import { moduleActionContext, moduleGetterContext } from '../store'

enum AppPanel {
  Welcome = 'welcome',
  Settings = 'settings',
  Guide = 'guide',
}

export interface WindowsState {
  singleWindowMode: boolean;
  showing: { [panel in AppPanel]?: boolean };
}

const windowsState = defineModule({
  state: (): WindowsState => {
    return {
      singleWindowMode: !('electron' in process.versions), // singleWindowMode when not in electron
      showing: {
        welcome: true,
        settings: false
      }
    }
  },
  getters: {},
  mutations: {},
  actions: {}
})

export default windowsState
// const windowsStateGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, windowsState)
// const windowsStateActionContext = (context: any) => moduleActionContext(context, windowsState)
