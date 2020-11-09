/* eslint-disable @typescript-eslint/no-use-before-define */
import { defineModule } from 'direct-vuex'
import { moduleActionContext, moduleGetterContext } from '@/store'

export interface DocumentHistory {
  undoStack: [],
  redoStack: []
}

const documentHistoryState = defineModule({
  state: (): DocumentHistory => {
    return {
      undoStack: [],
      redoStack: []
    }
  },
  getters: {

  },
  mutations: {
    addHistory (state, historyItem) {
      state.undoStack.push(historyItem)
      state.redoStack = [];
    },
    undo (state) {
      const lastUndo = state.undoStack.pop()
      // run reverse mutation
      state.redoStack.push(lastUndo)
    },
    redo (state) {
      const lastUndo = state.redoStack.pop()
      // run mutation
      state.undoStack.push(lastUndo)
    }
  },
  actions: {
  }
})

export default documentHistoryState
const documentHistoryStateGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, documentHistoryState) /* eslint-disable-line @typescript-eslint/no-explicit-any */
const documentHistoryStateActionContext = (context: any) => moduleActionContext(context, documentHistoryState) /* eslint-disable-line @typescript-eslint/no-explicit-any */
