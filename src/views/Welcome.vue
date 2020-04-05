<template>
  <div class="welcome">
    <div class="welcome__content">
      <header class="welcome__header">
          <img src="@/assets/YarnSpinnerLogo.svg" class="welcome__header__logo"/>
          <div class="welcome__header__text">
            <h1>Yarn Writer</h1>
            <h4>v0.1.0 - Merino - <a href="#">Release Notes</a></h4> <!-- TODO: get from package.json -->
          </div>
      </header>

      <div class="welcome__body">

      <section class="welcome__recents">
          <h2>Recent Files</h2>
          <div class="welcome__recents__list">
            <WriterRecentFile name="Example.yarn" path="/Users/example/⁨Dev/⁨PalPet/⁨Assets/⁨Story⁩/"/>
            <WriterRecentFile name="Other.yarn" path="/Users/example/⁨Dev/BFFClub⁨/⁨Assets/⁨Story⁩/"/>
            <WriterRecentFile name="a-third-thing.yarn" path="/Users/example/⁨Dev/BFFClub⁨/⁨Assets/⁨Story⁩/"/>
          </div>
          <button class="welcome__new-file" v-on:click="$emit('dismiss-welcome')">Start a New File</button>
      </section>

      <section class="welcome__guides">
          <h2>Guides</h2>
          <h3>Using the Tool</h3>
          <ul>
              <li><a href="#"><IconFile /> Nodes</a></li>
              <li><a href="#"><IconFile /> Navigation</a></li>
              <li><a href="#"><IconFile /> Syntax</a></li>
              <li><a href="#"><IconFile /> Undo and History</a></li>
          </ul>
          <h3>Using Yarn Files in Games</h3>
          <ul>
              <li><a href="#guide-yarn-spinner"><IconUnity /> Yarn Spinner for Unity</a></li>
              <li><a href="#guide-bondage"><IconEarth /> Bondage.js for Web</a></li>
          </ul>
      </section>

      </div>
    </div>
  </div>
</template>

<script>
import IconFile from 'vue-material-design-icons/FileDocumentOutline'
import IconUnity from 'vue-material-design-icons/Unity'
import IconEarth from 'vue-material-design-icons/Earth'
import WriterRecentFile from '@/components/WriterRecentFile'

export default {
  name: 'Welcome',
  components: { IconFile, IconUnity, IconEarth, WriterRecentFile }
}
</script>

<style lang="scss">
// TODO: panel component
.welcome {
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
  z-index: 100;

  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h2 {
    color: #338A5E;
    font-size: 21px;
    font-weight: bold;
    padding: 4px 0;
  }
  h3 {
    color: #338A5E;
    font-size: 18px;
    padding: 4px 0;
  }
}
.welcome__content {
  border: 2px solid #C4E398;
  border-radius: 8px;
}
.welcome__header {
  background-color: #C4E398;
  color: #338A5E;
  padding: 10px;
  display: flex;
  align-items: flex-end;
  border-bottom: 1px solid #C4E398;
  padding: 16px;
  padding-bottom: 24px;
  border-image-source: url(~@/assets/Border-Header.svg);
    border-image-slice: 0% 1% 100% 1%;
    border-image-outset: 25px;
    border-image-width: 50px;
    margin-bottom: 15px;

  a {
    text-decoration: underline;
    color: inherit;
  }
  &__logo {
    height: 100px;
    margin-right: 16px;
    margin-top: -24px;
    margin-bottom: -24px;
  }
  &__text {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-bottom: 8px;
  }
}
.welcome__body {
  display: flex;
  flex-direction: row;
}
.welcome__recents, .welcome__guides {
  padding: 12px;
  padding-top: 8px;
}
.welcome__recents {
  flex: 1.25;
  align-content: stretch;
  display: flex;
  flex-direction: column;
  &__list { // welcome__recents__list
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
}
.welcome__guides {
  width: 250px;
  flex: 1;
}
.welcome__guides a {
  display: block;
  padding: 4px;
}
.welcome__new-file {
  /*
  background-color: hsl(88, 40%, 69%);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 18px;
  color: #338a5e;
  font-weight: bold;
*/
      background-color: #217ed4;
    padding: 8px 16px;
    border-radius: 6px;
    font-size: 18px;
    color: #ffffff;
    font-weight: bold;
}
</style>
