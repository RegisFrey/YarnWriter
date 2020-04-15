import * as defaultTokensLight from '@/tokens/generated/defaults.module.ts'
import * as monaco from 'monaco-editor'
import ColorString from 'color-string'
// this lib usage is ugly as sin
function toHex (cssString: string) {
  return ColorString.to.hex(ColorString.get(cssString).value)
}

const theme = {
  name: 'vs-writer-light',
  theme: {
    base: 'vs' as monaco.editor.BuiltinTheme,
    inherit: true,
    rules: [
      {
        token: '',
        background: toHex(defaultTokensLight.colorBg)
      }
    ],
    // rules: [{ background: defaultTokensLight.colorFg }],
    colors: {
      'editor.foreground': toHex(defaultTokensLight.colorFg),
      'editor.background': toHex(defaultTokensLight.colorFg),

      'editorCursor.foreground': toHex(defaultTokensLight.colorInteractive),

      'editor.lineHighlightBackground': toHex(defaultTokensLight.colorInteractiveFocusBg),
      'editorLineNumber.foreground': toHex(defaultTokensLight.colorInteractiveLight),

      'editor.selectionBackground': toHex(defaultTokensLight.colorInteractiveFocusBg),
      'editor.inactiveSelectionBackground': toHex(defaultTokensLight.colorInteractiveDisabled),

      'button.foreground': '#FF0000', // Button foreground color.
      'button.background': '#0000FF',
      'editorWidget.background': toHex(defaultTokensLight.colorFg),

      'input.background': '#FF0000', // Input box background.
      'input.foreground': '#FF0000', // Input box foreground.

      /* There is no actual scrollbar color setting https://github.com/microsoft/monaco-editor/issues/1551 */
      'scrollbarSlider.background': toHex(defaultTokensLight.colorInteractiveLight) + '88', // alpha
      'scrollbarSlider.hoverBackground': toHex(defaultTokensLight.colorInteractive) + '88',
      'scrollbarSlider.activeBackground': toHex(defaultTokensLight.colorInteractive) + '88'
    }
  } as monaco.editor.IStandaloneThemeData
}

export default theme
