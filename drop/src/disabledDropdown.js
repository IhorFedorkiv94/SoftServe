export  const disabledOtherDropdown = (param, cities, streets) => {
    if(!param){
      cities.disabled = true;
      streets.disabled = true;
      }
  }