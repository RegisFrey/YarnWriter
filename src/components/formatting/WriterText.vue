<template>
  <component :is="tag" :class="lookClass">
    <slot>{{ text }}</slot>
  </component>
</template>

<script>
export default {
  props: {
    /**
     * Text to show. Overridden by the default slot.
     */
    text: {
      type: String,
      default: ''
    },
    /**
     * Use `tag` to indicate the semantic depth in the overall page.
     */
    tag: {
      type: String,
      default: 'h2',
      enum: ['p', 'h1', 'h2', 'h3', 'h4']
    },
    /**
     * Use `look` to indicate the visual weight and appearance, independant of semantics.
     */
    look: {
      type: String,
      default: 'heading-m',
      enum: [
        'heading-s',
        'heading-m',
        'heading-l',
        'heading-xl',
        //
        'paragraph-s',
        'paragraph-m',
        'paragraph-l',
        //
        'metadata-s'
      ]
    }
  },
  computed: {
    lookClass () {
      return ['wr-' + this.look]
    }
  }
}
</script>

<style>
.wr-heading-xl {
  font-size: var(--font-size-xl);
  font-weight: bold;
  line-height: var(--line-height-base);
  padding-top: var(--space-gap-s);
  padding-bottom: var(--space-gap-m);
}

.wr-heading-l {
  font-size: var(--font-size-l);
  font-weight: bold;
  line-height: var(--line-height-base);
  padding-top: var(--space-gap-s);
  padding-bottom: var(--space-gap-m);
}

.wr-heading-m {
  font-size: var(--font-size-m);
  line-height: var(--line-height-base);
  padding-top: var(--space-gap-xs);
  padding-bottom: var(--space-gap-s);
}

.wr-heading-s {
  font-size: var(--font-size-s);
  font-weight: bold;
  line-height: var(--line-height-base);
  padding-top: var(--space-gap-xs);
  padding-bottom: var(--space-gap-s);
}

.wr-paragraph-s {
  font-size: var(--font-size-s);
  margin-top: var(--space-gap-s);
  margin-bottom: var(--space-gap-s);
}

.wr-paragraph-m {
  font-size: var(--font-size-m);
  margin-top: var(--space-gap-s);
  margin-bottom: var(--space-gap-s);
}

.wr-paragraph-l {
  font-size: var(--font-size-l);
  margin-top: var(--space-gap-m);
  margin-bottom: var(--space-gap-m);
}

.wr-metadata-s {
 font-size: var(--font-size-xs);
 color: var(--color-fg-text-light);
}
</style>

<docs>
```js
<WriterThemeContext show-toggle>
  <WriterText tag="h1" look="heading-xl" text="Extra Large Heading" />
  <WriterText tag="h2" look="heading-l" text="Large Heading" />
  <WriterText tag="h3" look="heading-m" text="Medium Heading" />
  <WriterText tag="h4" look="heading-s" text="Small Heading" />

  <hr />

  <WriterText tag="h2" look="heading-l" text="Quinona" />
  <WriterText tag="p" look="paragraph-m">
    Executed by some king somewhere.
    Her head continued to speak against
    her murderers for years.
    In the story she's portrayed as annoying.
    She was being a martyr about literally being martyred.
    They eventyally put her head in a trunk
    and threw it in a river.
  </WriterText>

  <WriterText tag="p" look="paragraph-l">
    Supposedly if you put your head underwater
    in some river in italy, she'll tell you
    about her murder.
    They renamed it the river of guilt.
  </WriterText>

  <WriterText tag="p" look="paragraph-s">
    But not like the guilt of her murderers,
    more like she's giving you a guilt trip
    or something stupid.
  </WriterText>

  <WriterText tag="p" look="metadata-s">
    This constellation is garbage.
  </WriterText>
</WriterThemeContext>
```
</docs>
