<template>
  <button
    class="wr-recent-file"
    v-on:click="$emit('click', $event)"
    :disabled="disabled"
    >
    <div class="wr-recent-file__meta">
        <div class="wr-recent-file__path">{{ path }}</div> <!-- https://stackoverflow.com/questions/12761418/i-need-an-overflow-to-truncate-from-the-left-with-ellipses -->
        <div class="wr-recent-file__opened">{{ lastOpenedDisplay }}</div>
    </div>
    <div class="wr-recent-file__name">
        {{ name }}
    </div>
  </button>
</template>

<script>
import * as dayjs from 'dayjs'
import * as calendar from 'dayjs/plugin/calendar'
dayjs.extend(calendar)

export default {
  props: {
    name: {
      type: String
    },
    path: {
      type: String,
      default: ''
    },
    lastOpened: {
      type: Number,
      default: Date.now
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    lastOpenedDisplay () {
      return dayjs().calendar(this.lastOpened)
    }
  }
}
</script>

<style lang="scss">
@mixin left_ellipsis () {
    overflow: hidden;
    direction: rtl;
    text-align: right;
    white-space: nowrap;
    position: relative;
    text-overflow: ellipsis;
}

.wr-recent-file {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  // width: 200px; // TESTING ONLY
  overflow: hidden;
  padding: 4px 4px;
  // border-top: 1px solid rgb(211, 213, 216);
  border: 1px solid rgb(211, 213, 216);
  border-radius: 6px;
  margin-bottom: 4px;

  &:hover {
    background-color: rgb(212, 241, 254);
    border: 1px solid rgba(#217ED4, 0.4);
  }
}
.wr-recent-file__meta {
  display: flex;
  flex-direction: row;
  align-items: stretch;
}
.wr-recent-file__path {
  font-size: 12px;
  color: #217ED4;
  @include left_ellipsis;
  flex: 1;
}
.wr-recent-file__opened {
  font-size: 12px;
  color: rgb(159, 159, 159);
  flex-shrink: 0;
  padding-left: 8px;
  text-align: right;
}
.wr-recent-file__name {
  font-size: 16px;
  font-weight: bold;
  color: #217ED4;
  text-align: left;
}

</style>

<docs>
```js
<WriterRecentFile name="Example.yarn" path="/Users/example/⁨Dev/BFFClub⁨/⁨Assets/⁨Story⁩/"/>
```
</docs>
