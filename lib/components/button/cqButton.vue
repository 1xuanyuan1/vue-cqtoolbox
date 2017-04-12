<template>
  <button class="cq-button" :class="[themeClass]" :type="type" :disabled="disabled" v-if="!href">
    <cq-ink-ripple :cq-disabled="disabled"></cq-ink-ripple>
    <slot></slot>
  </button>

  <a class="cq-button" :class="[themeClass]" :href="href" :disabled="disabled" :target="target" :rel="newRel" v-else>
    <cq-ink-ripple :cq-disabled="disabled"></cq-ink-ripple>
    <slot></slot>
  </a>
</template>

<style lang="scss" src="./cqButton.scss"></style>

<script>
  import theme from '../../core/components/theme/mixin'

  export default {
    props: {
      href: String,
      target: String,
      rel: String,
      type: {
        type: String,
        default: 'button'
      },
      disabled: Boolean
    },
    mixins: [theme],
    computed: {
      newRel() {
        if (this.target === '_blank') {
          return this.rel || 'noopener'
        }

        return this.rel
      }
    }
  }
</script>
