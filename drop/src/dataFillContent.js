import _ from "lodash"

export const addOption = (select, val) => {
  // const o = document.createElement('option');
  // o.innerText = "Loading..."
  // select.parentNode
  
  const opt = document.createElement('option');
  opt.innerText = val;
  select.appendChild(opt);
  select.disabled = false;
};

export const fillCountriesSelect = (data, countries) => {
  _.forEach(data, country => {
    addOption(countries, country.name);
  })
};