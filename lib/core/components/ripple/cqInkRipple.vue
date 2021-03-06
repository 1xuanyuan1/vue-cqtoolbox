<template>
  <div class="cq-ink-ripple" v-if="mounted || !disabled">
    <div class="cq-ripple" :class="classes" :style="styles" ref="ripple"></div>
  </div>
</template>

<style lang="scss" src="./cqInkRipple.scss"></style>

<script>
  import { RIPPLE } from '../../../identifiers'
  const hasTouch = 'ontouchstart' in document
  const getEventName = (type) => {
    if (type === 'start') {
      return hasTouch ? 'touchstart' : 'mousedown'
    }

    return hasTouch ? 'touchend' : 'mouseup'
  }
  const addEvent = (target, type, handler) => {
    target.addEventListener(getEventName(type), handler)
  }
  const removeEvent = (target, type, handler) => {
    target.removeEventListener(getEventName(type), handler)
  }

  export default {
    name: RIPPLE,
    props: {
      mdDisabled: Boolean
    },
    data: () => ({
      mounted: false,
      rippleElement: null,
      parentElement: null,
      parentDimensions: {
        width: null,
        height: null,
        top: null,
        left: null
      },
      awaitingComplete: false,
      hasCompleted: false,
      fadeOut: false,
      active: false
    }),
    computed: {
      classes () {
        return {
          'cq-fadeout': this.fadeOut,
          'cq-active': this.active
        }
      },
      styles () {
        return {
          width: this.parentDimensions.width,
          height: this.parentDimensions.height,
          top: this.parentDimensions.top,
          left: this.parentDimensions.left
        }
      },
      disabled () {
        return this.mdDisabled || !this.$cqtool.inkRipple
      }
    },
    watch: {
      disabled (disabled) {
        if (!disabled) {
          this.init()
        } else {
          this.destroy()
        }
      }
    },
    methods: {
      checkAvailablePositions (element) {
        const availablePositions = ['relative', 'absolute', 'fixed']

        return availablePositions.indexOf(getComputedStyle(element).position) > -1
      },
      getClosestPositionedParent (element) {
        const parent = element && element.parentNode

        if (!parent || parent.tagName.toLowerCase() === 'body') {
          return false
        }

        if (this.checkAvailablePositions(element)) {
          return element
        }

        return this.getClosestPositionedParent(parent)
      },
      getParentSize () {
        const parent = this.parentElement

        return Math.round(Math.max(parent.offsetWidth, parent.offsetHeight)) + 'px'
      },
      getClickPosition (event) {
        if (this.$refs.ripple) {
          const rect = this.parentElement.getBoundingClientRect()
          let top = event.pageY
          let left = event.pageX

          if (event.type === 'touchstart') {
            top = event.changedTouches[0].pageY
            left = event.changedTouches[0].pageX
          }

          return {
            top: top - rect.top - this.$refs.ripple.offsetHeight / 2 - document.body.scrollTop + 'px',
            left: left - rect.left - this.$refs.ripple.offsetWidth / 2 - document.body.scrollLeft + 'px'
          }
        }

        return false
      },
      setDimensions () {
        const size = this.getParentSize()

        this.parentDimensions.width = size
        this.parentDimensions.height = size
      },
      setPositions (event) {
        const positions = this.getClickPosition(event)

        if (positions) {
          this.parentDimensions.top = positions.top
          this.parentDimensions.left = positions.left
        }
      },
      clearState () {
        this.active = false
        this.fadeOut = false
        this.hasCompleted = false
        this.setDimensions()
        window.clearTimeout(this.awaitingComplete)
        removeEvent(document.body, 'end', this.endRipple)
      },
      startRipple (event) {
        this.clearState()
        this.awaitingComplete = window.setTimeout(() => {
          this.hasCompleted = true
        }, 400)

        addEvent(document.body, 'end', this.endRipple)

        this.$nextTick(() => {
          this.setPositions(event)
          this.active = true
        })
      },
      endRipple () {
        if (this.hasCompleted) {
          this.fadeOut = true
        } else {
          this.awaitingComplete = window.setTimeout(() => {
            this.fadeOut = true
          }, 200)
        }

        removeEvent(document.body, 'end', this.endRipple)
      },
      registerTriggerEvent () {
        addEvent(this.parentElement, 'start', this.startRipple)
      },
      unregisterTriggerEvent () {
        if (this.parentElement) {
          removeEvent(this.parentElement, 'start', this.startRipple)
        }
      },
      init () {
        this.rippleElement = this.$el
        this.parentElement = this.getClosestPositionedParent(this.$el.parentNode)

        if (!this.parentElement) {
          this.$destroy()
        } else {
          this.rippleElement.parentNode.removeChild(this.rippleElement)
          this.parentElement.appendChild(this.rippleElement)
          this.registerTriggerEvent()
          this.setDimensions()
        }
      },
      destroy () {
        if (this.rippleElement && this.rippleElement.parentNode) {
          this.unregisterTriggerEvent()
          this.rippleElement.parentNode.removeChild(this.rippleElement)
        }
      }
    },
    mounted () {
      window.setTimeout(() => {
        if (!this.disabled) {
          this.init()
        } else {
          this.destroy()
        }

        this.$nextTick(() => {
          this.mounted = true
        })
      }, 100)
    },
    beforeDestroy () {
      this.destroy()
    }
  }
</script>
