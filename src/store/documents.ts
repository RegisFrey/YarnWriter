/* eslint-disable @typescript-eslint/no-use-before-define */
import { defineModule } from 'direct-vuex'
import { WriterDocument } from '@/types/Document'
import { moduleActionContext, moduleGetterContext } from '@/store'

export interface DocumentsState {
  open: Array<WriterDocument>;
  focusedDocument: number;
}

const documentsState = defineModule({
  state: (): DocumentsState => {
    return {
      open: [],
      focusedDocument: 0
    }
  },
  getters: {

  },
  mutations: {
    addDocument (state, document: WriterDocument) {
      const newDocumentIndex = state.open.push(document)
      state.focusedDocument = newDocumentIndex;
    },

  },
  actions: {
    openFile (context, filepath) {

      // addDocument
    },
    newDocument (context) {

      // addDocument
    },
  }
})

export default documentsState
const documentsStateGetterContext = (args: [any, any, any, any]) => moduleGetterContext(args, documentsState) /* eslint-disable-line @typescript-eslint/no-explicit-any */
const documentsStateActionContext = (context: any) => moduleActionContext(context, documentsState) /* eslint-disable-line @typescript-eslint/no-explicit-any */
