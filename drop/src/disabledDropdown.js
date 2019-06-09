export  const disabledOtherDropdown = (currentCountry, cities, streets) => {
    if(!currentCountry){
      cities.disabled = true;
      streets.disabled = true;
      }
  }