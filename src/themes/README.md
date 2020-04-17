# Themes
A writer theme is a JSON object with certain properties that define colors for our built in components and the Monaco editor. See `src/types/WriterTheme.ts` for the specific shape.

Themes are meant to be loaded and swappable at runtime.

## Tokens
Within a theme we use tokens in the Theo token format. 

## Theme Context
`<WriterThemeContext>` will take the variables from a theme JSON and expose them as
CSS Variables to all its children. It accepts two themes (light and dark) and will use
it's `dark` prop to switch between them. It also exposes the currently selected theme
object on its slot scope.

## Generate Themes
To generate themes run the command `yarn themes`.
This will run **src/themes/generate.ts** which will parse the tokens from
the default and default-dark theme folders, then run those tokens through
the `generateTheme` function in **template.ts** which will save the generated
theme into the generated folder.

The default generated themes are currently commited to GitHub and imported as 
JSON in WriterThemeContext where they are used as defaults.
