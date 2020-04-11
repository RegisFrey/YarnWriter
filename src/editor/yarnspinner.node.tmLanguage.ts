/* eslint-disable */
import yarnLang from './yarnspinner.tmLanguage'

let yarnLangNodeRepository = JSON.parse(JSON.stringify(yarnLang.repository))
// remove nodes block
delete yarnLangNodeRepository.nodes
// remove framing seperators from node block
delete yarnLangNodeRepository.nodebody.begin
delete yarnLangNodeRepository.nodebody.end

export default {
  $schema: 'https://raw.githubusercontent.com/martinring/tmlanguage/master/tmlanguage.json',
  name: 'Yarn Spinner Single Node',
  patterns: [
    {
      include: '#nodebody'
    }
  ],
  repository: yarnLangNodeRepository,
  scopeName: 'source.yarnspinner.node'
}
