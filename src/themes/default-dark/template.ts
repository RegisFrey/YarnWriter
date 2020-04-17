import { WriterTheme, WriterThemeTokens } from '@/types/WriterTheme'
// import { generateDefaultTheme } from '../default/template'
const defaultTemplate = require('../default/template')


function generateTheme (tokens: WriterThemeTokens): WriterTheme  {
  return defaultTemplate.generateDefaultTheme('writer-dark', tokens)
}

module.exports = { generateTheme }
