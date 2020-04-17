<template>
  <div class="wr-theme" :style="cssVars">
    <label v-if="showToggle" class="wr-theme__toggle">
      <input type="checkbox" v-model="darkInternal" /> Dark Mode
    </label>
    <slot v-bind:theme="currentTheme"></slot>
  </div>
</template>

<script>
import defaultLightTheme from '@/themes/generated/default.json'
import defaultDarkTheme from '@/themes/generated/default-dark.json'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const kebabCase = require('lodash/kebabCase')
/**
 * A helper to put correct css theme variables into the surrounding css context for components.
 */
export default {
  props: {
    dark: { type: Boolean, default: false },
    showToggle: { type: Boolean, default: false },
    theme: { type: Object, default: () => defaultLightTheme },
    themeDark: { type: Object, default: () => defaultDarkTheme }
  },
  data () {
    return {
      darkInternal: this.dark
    }
  },
  computed: {
    currentTheme () {
      return this.darkInternal ? this.themeDark : this.theme
    },
    cssVars () {
      if (this.currentTheme) {
        return Object.entries(this.currentTheme.tokens).reduce(
          (cssVars, [tokenName, tokenValue]) => {
            const tokenVar = '--' + kebabCase(tokenName)
            if (typeof tokenValue === 'string') {
              cssVars[tokenVar] = tokenValue.replace(/;$/, '') // remove final ;
            } else {
              cssVars[tokenVar] = tokenValue
            }
            return cssVars
          },
          {}
        )
      }
      return {}
    }
  },
  watch: {
    dark (newValue) { this.darkInternal = newValue }
  }
}
</script>

<style lang="scss">
@import '~@/mixins.scss';

.wr-theme {
  @include text-base;
}
.wr-theme__toggle {
  display: block;
  padding: 5px;
  background-color: var(--color-fg);
}
</style>

<docs>
```js
<WriterThemeContext showToggle />
```
</docs>
