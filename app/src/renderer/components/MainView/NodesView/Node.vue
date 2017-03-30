<template>
<div class="node">
  <header class="node-header">
    <h1>
      Node Title Here
    </h1>

    <div class="action-set">
      <button class="action-btn">
        <svgicon class="action-icon" icon="delete" width="21" height="21" title="Delete"></svgicon>
      </button>
      <button class="action-btn">
        <svgicon class="action-icon" icon="settings" width="21" height="21" title="Settings"></svgicon>
      </button>
    </div>

  </header>

  <div class="content-preview">
    node content lorem ipsum dolor sit amet.
    hello world the sky is blue and so are you.
    depressesion...
  </div>

  <div class="tags">
    <span class="tag">test 1</span>
    <span class="tag">test 2</span>
    <span class="tag">testingalong</span>
    <span class="tag">test 4</span>
  </div>
</div>
</template>

<script>
  import '../../YarnIcons/delete';
  import '../../YarnIcons/settings';

  export default {
    data() {
      return {
        tags: ['tag 1', 'tag 2'],
      };
    },
  };
</script>

<style lang="scss">
.node {
  width: 200px;
  height: 200px;
  position: absolute;
  background-color: #fff;
  border-radius: 5px;
  overflow: hidden;

  header {
    height: 32px;
    padding: 5px 8px;
    background-color: #ae81ff;
    overflow: hidden;

    h1 {
      font-size: 18px;
      line-height: 32px;
      margin: 0;
      padding: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space:nowrap;
    }
  }

  .action-set {
    display: none;
    position: absolute;
    top: 8px;
    right: 4px;
  }
  .action-btn {
    .action-icon path[pid="0"] {
      fill: #ffffff;
      fill-opacity: 0.6;
    }
    &:hover {
      .action-icon path[pid="0"] {
        fill: #ffffff;
        fill-opacity: 1;
      }
    }
  }

  &:hover {
    header {
      padding-right: 75px;
    }
    .action-set {
      display: block;
    }
  }
}

.content-preview {
  padding: 5px 8px;
}

.tags {
  position: absolute;
  bottom: 0;
  height: 32px;
  padding: 0 4px;
  white-space: nowrap;
	overflow-y: hidden;
	overflow-x: scroll;
	-webkit-overflow-scrolling: touch;
  ::-webkit-scrollbar {
    display: none;
  }
}
.tag {
  display: inline;
  background-color: #ddd;
  border-radius: 25px;
  height: 20px;
  line-height: 32px;
  font-size: 14px;
  padding: 3px 10px;
}
/*
To tint icons refer to their path id
.vue-icon path[pid="0"] {
    fill: #42b983
}
*/
</style>
