<template>
  <div class="panel-welcome">
    <header>
        <h1>Yarn Writer</h1>
        <h4>v0.1.0</h4> <!-- TODO: get from package.json -->
    </header>

    <section class="welcome__recents">
        <h2>Recent Files</h2>
        files here
        <button>

        </button>
    </section>

    <section class="welcome__guides">
        <h2>Guides</h2>
        <h3>Using the Tool</h3>
            <li><a href="#">Nodes</a></li>
            <li><a href="#">Navigation</a></li>
            <li><a href="#">Syntax</a></li>
            <li><a href="#">Undo and History</a></li>
        <h3>Using Yarn Files in Games</h3>
        <ul>
            <li><a href="#guide-yarn-spinner">Yarn Spinner for Unity</a></li>
            <li><a href="#guide-bondage">Bodage.js for Web</a></li>
        </ul>
    </section>
  </div>
</template>

<style>
.panel-welcome {
  max-width: 400px;
  height: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
