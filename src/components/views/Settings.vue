<template>
  <div class="settings">
    <WriterText tag="h1" look="heading-xl" text="Settings" />

    <WriterText tag="h2" look="heading-l" text="Theme" />
    <WriterRadioButton id="theme-light" name="theme" value="light" label="Light" />
    <WriterRadioButton id="theme-dark" name="theme" value="dark" label="Dark" />
    <WriterRadioButton id="theme-os" name="theme" value="os" label="Match the OS Theme" />
    <WriterRadioButton id="theme-custom" name="theme" value="custom" label="Custom" />

    <WriterText tag="h3" look="heading-m" text="Font Size" />
    <p>No Setting Yet</p>

    <!-- TODO: Theme Preview Swatch -->

    <WriterText tag="h2" look="heading-l" text="Keyboard & Mouse" />
    <p>No Setting Yet</p>
    <p>
      You can however
      <a href="">view the available commands</a>
      in the guide.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Settings'
}
</script>

<style lang="scss">
.settings {
  z-index: 1;
  position: relative;

  max-width: 625px;
  width: 100%;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #FFF;
  box-shadow: 0px 3px 8px 1px rgba(64, 67, 103, 0.4);
  border-radius: 8px;
  overflow: hidden;
  border: 2px solid #FFF;
  padding: 15px;
}
</style>

<docs>
```js
<WriterThemeContext show-toggle style="position: relative; height: 400px;">
  <Settings />
</WriterThemeContext>
```
</docs>
