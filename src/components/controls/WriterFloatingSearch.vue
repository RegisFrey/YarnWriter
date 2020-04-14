<template>
  <div
    class="wr-floating-search"
    :class="{ 'wr-floating-search--open': open }"
    :disabled="disabled"
    >
    <button
      class="wr-floating-search__btn"
      v-on:click="$emit('toggle', $event)"
      :disabled="disabled"
      >
      <IconSearch title="Search"/>
    </button>
    <input ref="input" type="search" placeholder="Type to Search" class="wr-floating-search__input" :disabled="disabled" />
    <button class="wr-floating-search__filter" :disabled="disabled">
      <span class="sr-only">Current Filter:</span>
      Everything
    </button>
  </div>
  <!-- TODO: Category select drop down and messaging -->
  <!-- TODO: Floating results panel -->
</template>

<script>
import IconSearch from 'vue-material-design-icons/Magnify'

/**
 * Search Bar for Workspace
 */
export default {
  components: { IconSearch },
  props: {
    open: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      // open: true
    }
  },
  watch: {
    open (isNowOpen) {
      if (isNowOpen) { this.$refs.input.focus() }
    }
  }
}
</script>

<style lang="scss">
@import '~@/tokens/mixins.scss';

.wr-floating-search {
  display: flex;
  flex-direction: row;
  align-items: stretch;

  background-color: var(--color-fg);
  @include shadow;

  border-radius: calc(var(--space-control-m) / 2);
  height: var(--space-control-m);
  font-size: var(--font-size-control);
  margin: 8px 4px;
  min-width: var(--space-control-m);
  max-width: var(--space-control-m);
  overflow: hidden;

  transition: max-width 0.5s;
}

.wr-floating-search__input {
  opacity: 0;
  flex: 0;
  transition: opacity 0.5s, flex 0.5s;
}
.wr-floating-search__filter {
  opacity: 0;
  flex: 0;
  transition: opacity 0.5s, flex 0.5s;
}
.wr-floating-search__btn {
  border-radius: calc(var(--space-control-m) / 2);
  transition: border-radius 0.25s;
}

.wr-floating-search--open {
  width: auto;
  max-width: 800px; /* limit the width, for both transistion and readability */

  .wr-floating-search__btn {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }

  .wr-floating-search__input {
    opacity: 1;
    flex: 3;
    // transform: scaleX(1);
  }
  .wr-floating-search__filter {
    opacity: 1;
    flex: 1;
    // transform: scaleX(1);
  }
}
.wr-floating-search__btn {
  // padding: 8px 16px;
  width: var(--space-control-m);
  height: var(--space-control-m);
  min-width: var(--space-control-m);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2px; // offset the search icon to look better
  color: var(--color-interactive);
  border: var(--line-weight-m) solid transparent;
  &:focus, &:hover {
    outline: none;
    background-color: hsla(215, 100%, 91%, 0.25);
    border: var(--line-weight-m) solid var(--color-interactive);
  }
  &:disabled
  {
    outline: none;
    background-color: hsla(0, 0%, 96%, 0.25);
    color: rgb(121, 121, 121);
    border: var(--line-weight-m) solid transparent;
    cursor: not-allowed;
  }
}
.wr-floating-search__input {
  // flex: 3;
  padding: 8px;
  font-size: 18px;
  display: block;
  background-color: transparent;
  border: none;
  border: 1px solid transparent;
  &::placeholder {
    color: hsl(218, 64%, 75%);
  }
  &:focus, &:hover {
    outline: none;
    background-color: hsla(215, 100%, 91%, 0.25);
    border: var(--line-weight-m) solid var(--color-interactive);
  }
  &:disabled
  {
    outline: none;
    background-color: hsla(0, 0%, 96%, 0.25);
    color: rgb(121, 121, 121);
    border: var(--line-weight-m) solid transparent;
    cursor: not-allowed;
    &::placeholder {
      color: rgb(171, 171, 171);
    }
  }
}
.wr-floating-search__filter {
  min-width: 100px;
  // flex: 1;
  padding: 8px 16px;
  // margin-left: 8px;
  text-align: left;
  font-size: 18px;
  color: hsl(218, 64%, 75%);
  border: var(--line-weight-m) solid transparent;
  border-left: var(--line-weight-m) solid hsl(220, 14%, 92%);
  border-top-right-radius: calc(var(--space-control-m) / 2);
  border-bottom-right-radius: calc(var(--space-control-m) / 2);
  &:focus, &:hover {
    outline: none;
    background-color: hsla(215, 100%, 91%, 0.25);
    border: var(--line-weight-m) solid var(--color-interactive);
  }
  &:disabled
  {
    outline: none;
    background-color: hsla(0, 0%, 96%, 0.25);
    color: rgb(171, 171, 171);
    border: var(--line-weight-m) solid transparent;
    border-left: var(--line-weight-m) solid hsl(220, 14%, 92%);
    cursor: not-allowed;
  }
}
.sr-only {
  display: none; // TODO: actual accessibility here
}
</style>

<docs>
```js
let open = false;

<WriterThemeContext show-toggle>
  <WriterPegboard style="padding:20px;">
    <WriterFloatingSearch />
    <WriterFloatingSearch disabled />
    <WriterFloatingSearch open />
    <WriterFloatingSearch open disabled />
    <h1>Try Toggling this one</h1>
    <WriterFloatingSearch v-bind:open="open" v-on:toggle="open = !open" />
  </WriterPegboard>
</WriterThemeContext>
```
</docs>
