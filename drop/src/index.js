import {addOption, fillCountriesSelect} from "./dataFillContent";
import {disabledOtherDropdown} from "./disabledDropdown";
import {cleanOptions} from "./cleanOption";
import  {countriesName, cityArray, streetArray} from "./fetch"
import _ from "lodash"

const countries = document.querySelector('#countries');
const cities = document.querySelector('#cities');
const streets = document.querySelector('#streets');
let currentCountry;
setTimeout(() => {
  fillCountriesSelect(countriesName, countries);
},1000);

countries.addEventListener('change', event => {
  cleanOptions(cities, streets);
  currentCountry = _.find(cityArray, country => country.name === event.target.value);
  disabledOtherDropdown(currentCountry, cities, streets);
  _.forEach(currentCountry.cities, city => addOption(cities, city.name));
});

cities.addEventListener('change', event => {
  cleanOptions(streets, streets);
  _.forEach(streetArray, el => _.filter(el.cities, cityName => {
   cityName.name === event.target.value ? _.forEach(cityName.streets, street => addOption(streets, street.name)) : ''}));
});