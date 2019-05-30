export const fillCountriesSelect = () => {
    data.forEach(country => {
      addOption(countries, country.name);
    });
  };
