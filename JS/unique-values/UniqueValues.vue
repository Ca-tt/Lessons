<template lang="pug">

  p.result

</template>

<script>
import restaurantVisitors from "../DATA/restaurant-menu";

// get list of arrays of orders ([ [1], [2], [3] ])
const orders = restaurantVisitors
    .map((visitor) =>
        visitor.orders
            .map((order) =>
                order.name));
console.log(orders, ' — all orders —');


let uniqueOrders = new Set();
// split arrays into smaller
for (const order of orders) {
  for (const name of order) {
    console.log(name, ' — orderSplit —');

    // Got an empty string here.
    // Why?
    console.log(name, typeof (name), ' — typeof(name) —');

    uniqueOrders.add(name.toString());
    console.log(uniqueOrders, ' — uniqueOrders —');
  }
}
console.log([...uniqueOrders], ' — uniqueOrders —');

export default {
  name: "UniqueValues",
  mounted() {
    // display an html list of items
    const resultView = document.querySelector('.result');
    console.log(resultView, ' — resultView —');

    resultView.innerHTML = [...uniqueOrders].map((order) => {
      return `<p>${order}</p>`;
    }).join('');
  },
}
</script>

<style lang="sass" scoped>

</style>