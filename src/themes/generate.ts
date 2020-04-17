/*
import { convert as theoConvert, ConvertOptions, Format, TransformOptions } from 'theo'
import { promises as fs } from 'fs'
import path from 'path'
*/
const theo = require('theo')
const fs = require('fs').promises
const path = require('path')
const camelCase = require("lodash/camelCase");
const Immutable = require("immutable-ext");

/*
theo.registerFormat('json-camel', `
    {
    {{#each props as |prop|}}
      {{camelCase prop.name}}: {{prop.value}}{{#unless @last}},{{/unless}}
    {{/each}}
    }
`)
*/

theo.registerFormat("json-camel", (tokenMap: any) => {
  // "tokenMap" is an Immutable.Map
  // https://facebook.github.io/immutable-js/
  return JSON.stringify(
    tokenMap
      .get("props")
      .reduce(
        (tokenDict: any, token: any) => tokenDict.set(
          camelCase(token.get("name")),
          token.get("value")
        ),
        Immutable.OrderedMap() as any
      ),
    null,
    2
  );
});

function tokenConfig (folderPath: string) {
  return {
    transform: {
      type: 'web' ,
      file: path.resolve(folderPath, 'tokens/index.yml')
    },
    format: {
      type: 'json-camel'
    }
  }
}

async function generateTheme (themePath: string, themeFolder: string) {
  let folderPath = path.resolve(themePath, themeFolder)
  try {
    let tokenStr = await theo.convert(tokenConfig(folderPath))
    let tokens = JSON.parse(tokenStr);
    let template = require(`${folderPath}/template`)
    let theme = template.generateTheme(tokens)
    let destination = path.resolve(themePath, `generated/${themeFolder}.json`)
    await fs.writeFile(
      destination,
      JSON.stringify(theme, null, 2)
      // js-yaml
    );
    console.info(`✨ Generated theme "${theme.name}" from "${folderPath}" to "${destination}"`);
  } catch (error) {
    console.info(`🔥 Failed to generate theme from "${folderPath}"\nError: ${error}`);
  }
}

async function main () {
  await generateTheme('./src/themes/', 'default')
  await generateTheme('./src/themes/', 'default-dark')
}

main()
