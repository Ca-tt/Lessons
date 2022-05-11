<template>
  <main class="content">
    <p>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores aperiam
      qui, reiciendis illum accusamus vero fugiat dolor nemo ullam est
      architecto atque quia non adipisci sed aut eligendi praesentium fugit?
    </p>

    <p>
      In ut nobis nulla ratione labore maxime itaque numquam nesciunt quo.
      Libero tempora, laboriosam ut eos culpa voluptas quae consequuntur
      perferendis atque autem minima ad, incidunt enim animi temporibus error!
    </p>

    <p>
      Architecto impedit dolor ut earum optio, autem ducimus nihil doloribus
      iusto corporis voluptates laborum cupiditate, quia rerum. Excepturi
      tenetur porro, quos vero esse fuga, reiciendis veniam quia magni beatae
      eos?
    </p>

    <p>
      Architecto impedit dolor ut earum optio, autem ducimus nihil doloribus
      iusto corporis voluptates laborum cupiditate, quia rerum. Excepturi
      tenetur porro, quos vero esse fuga, reiciendis veniam quia magni beatae
      eos?
    </p>

    <p>
      Architecto impedit dolor ut earum optio, autem ducimus nihil doloribus
      iusto corporis voluptates laborum cupiditate, quia rerum. Excepturi
      tenetur porro, quos vero esse fuga, reiciendis veniam quia magni beatae
      eos?
    </p>

    <p>
      Architecto impedit dolor ut earum optio, autem ducimus nihil doloribus
      iusto corporis voluptates laborum cupiditate, quia rerum. Excepturi
      tenetur porro, quos vero esse fuga, reiciendis veniam quia magni beatae
      eos?
    </p>

    <p>
      Architecto impedit dolor ut earum optio, autem ducimus nihil doloribus
      iusto corporis voluptates laborum cupiditate, quia rerum. Excepturi
      tenetur porro, quos vero esse fuga, reiciendis veniam quia magni beatae
      eos?
    </p>

    <aside id="scroll-button" class="scroll-button" @click="pageBottomReached">
      <font-awesome-icon class="scroll-button-icon"
                         icon="arrow-alt-circle-up"/>
    </aside>
  </main>
</template>

<script>
export default {
  name: "PageScroll",
  data: function() {
    return {
      scrollHeight: document.body.scrollHeight,
    }
  },
  methods: {
    pageBottomReached: function (){
      console.log(this.scrollHeight, ' — this.scrollHeight —');
      window.scrollTo({top: 0, behavior: 'smooth'})
    }
  }
}


// when page scroll is > basic viewport
// show the button
// when clicked, scroll top with animation


</script>

<style lang="sass" scoped>

$scroll-button-position: 0
$scroll-button-position-hover: -5px

$scroll-button-size: 50px

// transitions
$transition: all .8s

// scroll button colors
$scroll-button-background: rgba(255, 255, 255, 0.5)
$scroll-button-border: 2px solid black

// hovers
$scroll-button-background-hover: rgba(0, 0, 0, 1)

// scroll icon colors
$icon-color: rgba(0, 0, 0, 1)
$icon-color-hover: white

$icon-size: 2em
$icon-size-hover: 2.3em

$icon-animation: tickDown .7s infinite alternate
$icon-animation-hover: none

@keyframes tickDown
  0%
    margin-bottom: -5px

  100%
    margin-bottom: 0

//.content
//  min-height: 1500px

.scroll-button
  position: fixed
  right: $scroll-button-position
  bottom: $scroll-button-position

  display: flex
  align-items: center

  height: $scroll-button-size
  width: $scroll-button-size

  border-top: $scroll-button-border
  border-bottom: $scroll-button-border
  border-radius: 50%

  transition: $transition

  cursor: pointer

  &:hover
    background: $scroll-button-background-hover

    .scroll-button-icon
      animation: $icon-animation-hover

      color: $icon-color-hover
      margin: 0 0 0 $scroll-button-position-hover

  &-icon
    animation: $icon-animation

    color: $icon-color
    font-size: $icon-size
    margin: 0 0 0 -1px

    transition: color 1.3s, margin .4s, font-size .5s


</style>