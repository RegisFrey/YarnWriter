// declare module 'color-string';
const ColorString = require('color-string')
import { WriterTheme, WriterThemeTokens } from '@/types/WriterTheme'

/** Wrap ColorString to make usage cleaner */
function toHex (cssString: string) {
  return ColorString.to.hex(ColorString.get(cssString).value)
}

function generateDefaultTheme (name: string, tokens: WriterThemeTokens): WriterTheme {
  return {
    name,
    tokens, // could add intermediate / calculated tokens in here
    editorTheme: {
      name: 'vs-' + name,
      theme: {
        base: 'vs',
        inherit: true,
        rules: [
          {
            token: '',
            background: toHex(tokens.colorBg)
          }
        ],
        colors: {
          'editor.foreground': toHex(tokens.colorFg),
          'editor.background': toHex(tokens.colorFg),

          'editorCursor.foreground': toHex(tokens.colorInteractive),

          'editor.lineHighlightBackground': toHex(tokens.colorFgInteractiveTint),
          'editorLineNumber.foreground': toHex(tokens.colorInteractiveLight),

          'editor.selectionBackground': toHex(tokens.colorFgInteractiveTint), // toHex(tokens.colorInteractiveFocusBg),
          'editor.inactiveSelectionBackground': toHex(tokens.colorInteractiveDisabled),

          'button.foreground': toHex(tokens.colorInteractive), // TODO Button foreground color.
          'button.background': toHex(tokens.colorFg), // TODO
          'editorWidget.background': toHex(tokens.colorFg),

          'input.background': toHex(tokens.colorFg), // TODO Input box background.
          'input.foreground': toHex(tokens.colorInteractive), // TODO Input box foreground.

          // TODO: Shadow

          /* There is no actual scrollbar color setting https://github.com/microsoft/monaco-editor/issues/1551 */
          'scrollbarSlider.background': toHex(tokens.colorInteractiveLight) + '88', // alpha
          'scrollbarSlider.hoverBackground': toHex(tokens.colorInteractive) + '88',
          'scrollbarSlider.activeBackground': toHex(tokens.colorInteractive) + '88'
        }
      }
    }
  }
}

function generateTheme (tokens: WriterThemeTokens): WriterTheme  {
  return generateDefaultTheme('writer-light', tokens)
}

module.exports = {
  generateDefaultTheme,
  generateTheme
}
