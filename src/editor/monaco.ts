
import { loadWASM } from 'onigasm'
import { Registry } from 'monaco-textmate'
import { wireTmGrammars } from 'monaco-editor-textmate'
import * as monaco from 'monaco-editor'
// import the only textmate language/ grammar we care about
import yarnLanguageConfig from './language-configuration'
import langYarn from './yarnspinner.tmLanguage'
import langYarnNode from './yarnspinner.node.tmLanguage'

let monacoInitialized = false

export async function initalizeMonaco () {
  if (!monacoInitialized) {
    // load onigasm WASM outside the webpack https://github.com/NeekSandhu/onigasm/issues/2
    // see `test: /\.wasm$/,` rule in ./vue.config.js under chainWebpack rule OnigasmWasm
    await loadWASM(require('onigasm/lib/onigasm.wasm')) // eslint-disable-line @typescript-eslint/no-var-requires

    // register our languages
    monaco.languages.register({ id: 'yarnspinner' })
    monaco.languages.register({ id: 'yarnspinner.node' })

    const registry = new Registry({
      getGrammarDefinition: async (scopeName) => {
        if (scopeName === 'source.yarnspinner') {
          return {
            format: 'json',
            content: langYarn
          }
        } else if (scopeName === 'source.yarnspinner.node') {
          return {
            format: 'json',
            content: langYarnNode
          }
        }
        throw Error('No matching grammar scope for ' + scopeName)
      }
    })

    // map of monaco "language id's" to TextMate scopeNames
    const grammars = new Map()
    grammars.set('yarnspinner', langYarn.scopeName)
    grammars.set('yarnspinner.node', langYarnNode.scopeName)

    await wireTmGrammars(monaco, registry, grammars)

    const yarnLanguageConfigParsed: monaco.languages.LanguageConfiguration = {
      autoClosingPairs: yarnLanguageConfig.autoClosingPairs.map(pair => { return { open: pair[0], close: pair[1] } }),
      brackets: yarnLanguageConfig.brackets.map(bracket => [bracket[0], bracket[1]] as monaco.languages.CharacterPair),
      comments: yarnLanguageConfig.comments,
      folding: {
        markers: {
          start: new RegExp(yarnLanguageConfig.folding.markers.start),
          end: new RegExp(yarnLanguageConfig.folding.markers.end)
        }
      },
      surroundingPairs: yarnLanguageConfig.surroundingPairs.map(pair => { return { open: pair[0], close: pair[1] } })
    }

    // adn add the configs to both
    monaco.languages.setLanguageConfiguration('yarnspinner', JSON.parse(JSON.stringify(yarnLanguageConfigParsed)))
    monaco.languages.setLanguageConfiguration('yarnspinner.node', JSON.parse(JSON.stringify(yarnLanguageConfigParsed)))

    monacoInitialized = true
  }
}

export async function setupMonacoEditor (element: HTMLElement, value: string, options?: monaco.editor.IStandaloneEditorConstructionOptions): Promise<monaco.editor.IStandaloneCodeEditor> {
  initalizeMonaco()
  return monaco.editor.create(
    element,
    Object.assign(
      {
        scrollBeyondLastLine: false,
        value,
        // since we are primarily editing nodes
        // we want to start at the `nodebody` context not the root
        // so we created two language definitions
        language: 'yarnspinner.node'
      },
      options
    )
  )
}
