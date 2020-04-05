/* eslint-disable @typescript-eslint/no-use-before-define */
import { defineModule } from 'direct-vuex'
import { WriterWindow, WriterWindowType, WriterDocumentWindow } from '@/types/Window'
import { moduleActionContext, moduleGetterContext } from '../store'

export interface WindowsState {
  openWindows: Array<WriterWindow>;
  focusedWindow: number;
}

const windowsState = defineModule({
  state: (): WindowsState => {
    return {
      openWindows: [],
      focusedWindow: -1
    }
  },
  getters: {
    singleWindowMode (...args): boolean {
      const { rootState } = windowsStateGetterContext(args)
      return !rootState.inElectron // singleWindowMode when not in electron
    },
    highestWindowIndex (state): number {
      // const { state, getters, rootState, rootGetters } = windowsStateGetterContext(args)
      return state.openWindows.reduce((highestSoFar, window) => Math.max(highestSoFar, window.index), 0)
    },
    nextWindowSizeAndPosition (...args): { x: number; y: number; width: number; height: number } {
      const { getters } = windowsStateGetterContext(args)
      if (getters.singleWindowMode) {
        return { x: 0, y: 0, width: 0, height: 0 }
      } else {
        // electron powered from OS?
        return { x: 0, y: 0, width: 0, height: 0 }
      }
    }
  },
  mutations: {
    openWindow (state, window: WriterWindow) {
      state.openWindows.push(window)
    },
    dismissWelcome (state, windowId: number) {
      const window = state.openWindows.find(window => window.index === windowId)
      if (window?.type === WriterWindowType.Document) {
        const documentWindow: WriterDocumentWindow = window as WriterDocumentWindow
        documentWindow.welcomeDismissed = true
      }
    }
  },
  actions: {
    openDocumentWindow (context) {
      const { commit, getters } = windowsStateActionContext(context)
      const sizeAndPosition = getters.nextWindowSizeAndPosition
      const window: WriterDocumentWindow = Object.assign(sizeAndPosition, {
        type: WriterWindowType.Document,
        index: getters.highestWindowIndex, // just use the index from the array?
        focused: true,
        document: {
          viewport: {
            zoom: 1,
            offset: {
              x: 0,
              y: 0
            }
          }
        },
        welcomeDismissed: false
      })
      commit.openWindow(window)
    },
    openWindow (context, withSettings: { type: WriterWindowType }) {
      const { commit, getters } = windowsStateActionContext(context)
      const sizeAndPosition = getters.nextWindowSizeAndPosition
      const window: WriterWindow = Object.assign(sizeAndPosition, {
        type: withSettings.type,
        index: getters.highestWindowIndex, // just use the index from the array?
        focused: true
      })
      commit.openWindow(window)
    },
    initialize (context) {
      const { dispatch, state } = windowsStateActionContext(context)
      // TODO: check for existing windows setup to restore from LocalStorage
      // if no windows add a default document window
      if (state.openWindows.length === 0) {
        dispatch.openDocumentWindow() // openWindow({ type: WriterWindowType.Document })
      }
    }
  }
})

export default windowsState
const windowsStateGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, windowsState) /* eslint-disable-line @typescript-eslint/no-explicit-any */
const windowsStateActionContext = (context: any) => moduleActionContext(context, windowsState) /* eslint-disable-line @typescript-eslint/no-explicit-any */
