<template lang="pug">

  section.flex-centered-elements.full-height
    input.day-night-button(type="checkbox")

</template>

<script>
export default {
  name: "DayNightMode"
}
</script>

<style lang="sass" scoped>
@import "../../scss/app/color-variables"
@import "../../scss/helpers/text"

/* BUTTON */
// sizes
$button-width: 400px
$button-height: 200px
$button-radius: $button-width / 4

// colors
$button-background: $lime
//---------

/* Switcher */
// sizes
$switcher-width: $button-width / 2
$switcher-height: $button-height

// colors
$switcher-background: $yellow-orange

// borders
$switcher-radius: 50%

.day-night-button
  // sizes
  width: $button-width
  height: $button-height
  border-radius: $button-radius
  -webkit-border-radius: $button-radius
  -moz-border-radius: $button-radius

  // colors
  background-color: $lime

  // borders
  outline: none

  // modifiers
  position: relative
  appearance: none
  -moz-appearance: none
  -webkit-appearance: none

  &:before
    content: ""

    // sizes
    height: $switcher-height
    width: $switcher-width

    // colors
    background-color: $switcher-background

    // borders
    -webkit-border-radius: $switcher-radius
    -moz-border-radius: $switcher-radius
    border-radius: $switcher-radius

    // positions
    @extend .absolute-top-left

    




</style>