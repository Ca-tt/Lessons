<template lang="pug">

</template>

<style lang="sass" scoped>

</style>

<script>
export default {
  name: "DynamicObjectKeys"
}

/* OBJECT BASICS */

// in JS we have objects
const cellphone = {
  RAM: '2GB',
  screenSize: '6.6 inch',
  internalCapacity: '256GB',
  screenCover: true
}
// we can dynamically add keys to an object
cellphone.gestures = true;

// if we need to write key with hyphens, we need  brackets ''
const pants = {
  'previous-collection-sizes': ['xs', 's', 'm', 'l', 'xl'],
}
console.log(...pants["previous-collection-sizes"], ' — ...pants["previous-collection-sizes"] —');
// then we access key with its name in square brackets ['key-name']
// that's were a spread operator comes handy!

/* DYNAMIC KEYS */

// we also can create keys dynamically
// let's see how it works
let mouseClick = 'left-mouse-key';
let mouseWheel = 'right-mouse-click';
let mices = {
  [mouseClick]: true
}
console.log(mices["left-mouse-key"], ' — mices["left-mouse-key"] —');
mices[mouseWheel] = false;

// we can create a handy function that dynamically updates the object key-value pairs
let human = {
  hands: 2,
  eyes: 2,
  brain: 0,
}
function objectUpdate(object, key, value) {
  object[key] = value;
}
objectUpdate(human, 'brain', 1);
</script>