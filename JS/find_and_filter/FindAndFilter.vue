<template>

</template>

<script>
export default {
  name: "FindAndFilter"
}
import countries from "../DATA/countries";
import restaurantVisitors from "../DATA/restaurant-menu";

// the idea is to get the countries with a population lower than some number
const lowPopulationCountries = countries.filter(function (country) {
  let countryPopulation = parseInt(country.population.split(',').join(''));
  const threshold = 1000000000; // if more than one billion people

  if(countryPopulation < threshold) {
    return country;
  }
  // shortcut is also available
  // return countryPopulation < threshold;
})
// console log the array
console.log(lowPopulationCountries, ' — lowPopulationCountries —');
// if you need to console the parameter, call it by array index
console.log(lowPopulationCountries[0].name, ' — lowPopulationCountries —');

// get rich visitors by checking their card balances
const richVisitorsName = restaurantVisitors.filter((visitor) =>
    visitor.cardBalance > 10000)
console.log(richVisitorsName, ' — richVisitorsName —');

// array.filter works similar
// but, it returns 'undefined' if it finds nothing
// and you can access the parameters directly

</script>

<style scoped>

</style>