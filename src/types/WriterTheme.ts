import * as monaco from 'monaco-editor'

export interface WriterThemeTokens {
  /* Colors */
  colorBg: string;
  colorInteractiveFocusBg: string;
  colorInteractive: string;
  colorFgTextLight: string;
  colorIdentityBg: string;
  colorFgBorder: string;
  colorFgText: string;
  colorIdentityBorder: string;
  colorInteractiveDisabled: string;
  colorShadowDark: string;
  colorIdentity: string;
  colorFgInteractiveTint: string;
  colorShadow: string;
  colorFg: string;
  colorInteractiveLight: string;
  colorBgInset: string;
  /* Space */
  spaceGapL: string;
  spaceGapM: string;
  spaceXl: string;
  spaceGapS: string;
  spaceControlL: string;
  spaceControlM: string;
  spaceL: string;
  spaceXs: string;
  spaceM: string;
  spaceControlXs: string;
  spaceGapXl: string;
  spaceControlS: string;
  spaceS: string;
  spaceGapXs: string;
  /* Font Families */
  fontFamilySystem: string;
  /* Font Sizes */
  fontSizeXs: string;
  fontSizeS: string;
  fontSizeM: string;
  fontSizeL: string;
  fontSizeXl: string;
  fontSizeControl: string;
  /* Text Line Height */
  lineHeightMatch: number;
  lineHeightTight: number;
  lineHeightBase: number;
  lineHeightWide: number;
  /* Borders and Lines */
  lineWeightS: string;
  lineWeightM: string;
  lineWeightL: string;
  /* Borders Radius */
  borderRadiusS: string;
  borderRadiusM: string;
  borderRadiusL: string;
}

export interface WriterTheme {
  name: string;
  tokens: WriterThemeTokens;
  editorTheme: {
    name: string,
    theme: monaco.editor.IStandaloneThemeData
  }
}
