export const addOption = (select, val) => {
  const opt = document.createElement('option');
  opt.innerText = val;
  select.appendChild(opt);
  select.disabled = false;
};

export const fillCountriesSelect = (data, countries) => {
  data.forEach(country => {
    addOption(countries, country.name);
  });
};

export const cleanOptions = (selectElement) => {
  selectElement.options.length = 1;
};



