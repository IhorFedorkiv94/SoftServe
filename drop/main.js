let selectCountries = document.getElementById("drop-list-countries");
let selectCities = document.getElementById("drop-list-cities");
let selectStreet = document.getElementById("drop-list-street");

fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.forEach(el => {
      let option = document.createElement("option");
      option.text = el.name;
      selectCountries.insertBefore(option, null)
    });
    
    let currentCountry = null;
    
    selectCountries.addEventListener("change", function(e){
      selectCities.options.length = 1;
      selectStreet.options.length = 1;
      currentCountry = data.find(country => country.name === e.target.value);
      if(!currentCountry){
        selectCities.disabled = true;
        selectStreet.disabled = true;
      }
      currentCountry.cities.forEach(el => {
         let option = document.createElement("option");
         option.text = el.name;
         selectCities.insertBefore(option, null)
         selectCities.disabled = false;
        });
    });
    
    selectCities.addEventListener('change', function(e){
      const city = currentCountry.cities.find(cities => cities.name === e.target.value);
      selectStreet.options.length = 1;
      city.streets.forEach(el => {
          let option = document.createElement("option");
          option.text = el.name;
          selectStreet.insertBefore(option, null)
          selectStreet.disabled = false;
        });
    });
  })
  .catch(err => {
    console.error('Fetch Error -', err); 
  })