import { addOption, fillCountriesSelect } from "./dataFillContent";
import { disabledOtherDropdown } from "./disabledDropdown";
import {cleanOptions} from "./cleanOption";
import  {cuntriesName, cityArray, streetArray } from "./fetch"

const countries = document.querySelector('#countries');
const cities = document.querySelector('#cities');
const streets = document.querySelector('#streets');
let currentCountry;

fillCountriesSelect(cuntriesName, countries);

countries.addEventListener('change', event => {
  cleanOptions(cities, streets);
  currentCountry = cityArray.find(country => country.name === event.target.value);
  disabledOtherDropdown(currentCountry, cities, streets);
  currentCountry.cities.forEach(city => addOption(cities, city.name));
  
});

cities.addEventListener('change', event => {
  cleanOptions(streets, streets);
  const city = currentCountry.cities.find(cityName => cityName.name === event.target.value);
  //const city = streetArray[0].cities.find(cityName => cityName.name === event.target.value);
  city.streets.forEach(street => addOption(streets, street.name));
});