import { addOption, fillCountriesSelect } from "./dataFillContent";
import { disabledOtherDropdown } from "./disabledDropdown";
import {cleanOptions} from "./cleanOption";

const countries = document.querySelector('#countries');
const cities = document.querySelector('#cities');
const streets = document.querySelector('#streets');
let currentCountry = null;

fetch('./src/data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    fillCountriesSelect(data, countries);

    countries.addEventListener('change', event => {
      cleanOptions(cities);
      cleanOptions(streets);
      currentCountry = data.find(country => country.name === event.target.value);
      disabledOtherDropdown(currentCountry, cities, streets);
      currentCountry.cities.forEach(city => addOption(cities, city.name));
    });

    cities.addEventListener('change', event => {
      cleanOptions(streets);
      const city = currentCountry.cities.find(cityName => cityName.name === event.target.value);
      city.streets.forEach(street => addOption(streets, street.name));
    });
  })
  .catch(err => {
    console.error('Fetch Error -', err);
  });