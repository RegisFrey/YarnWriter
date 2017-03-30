<template>
  <div id="#app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
  };
</script>

<style lang="scss">
html, body{
  background-color: #FBF8F5;
  background-image: linear-gradient(-174deg, #FBF8F5 0%, #D5DCE5 100%);

  font-family: -apple-system, BlinkMacSystemFont,
      "Segoe UI", "Roboto",
      "Ubuntu", "Fira Sans",
      "Droid Sans", "Helvetica Neue",
      "Helvetica", sans-serif;

  height: 100vh;
  width: 100vw;
  overflow: hidden;
}

.action-btn {
  background-color: transparent;
  border: none;
  box-shadow: none;
  outline: none;
  padding: 0 4px;
  margin: 0;


}
</style>
