import {addOption, fillCountriesSelect} from "./dataFillContent";
import {disabledOtherDropdown} from "./disabledDropdown";
import {cleanOptions} from "./cleanOption";
import  {countriesName, cityArray, streetArray} from "./fetch"

const countries = document.querySelector('#countries');
const cities = document.querySelector('#cities');
const streets = document.querySelector('#streets');
let currentCountry;
setTimeout(() => {
  fillCountriesSelect(countriesName, countries);
},1000);

countries.addEventListener('change', event => {
  cleanOptions(cities, streets);
  currentCountry = cityArray.find(country => country.name === event.target.value);
  disabledOtherDropdown(currentCountry, cities, streets);
  currentCountry.cities.forEach(city => addOption(cities, city.name));
});

cities.addEventListener('change', event => {
  cleanOptions(streets, streets);
  streetArray.forEach(el => el.cities.filter(cityName => {
   cityName.name === event.target.value ? cityName.streets.forEach(street => addOption(streets, street.name)) : ''}));
});