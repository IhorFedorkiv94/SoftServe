import _ from "lodash"

export const addOption = (select, val) => {
  const opt = document.createElement('option');
  opt.innerText = val;
  select.appendChild(opt);
  select.disabled = false;
};

export const fillCountriesSelect = (data, countries) => {
  _.forEach(data, country => addOption(countries, country.name))
};