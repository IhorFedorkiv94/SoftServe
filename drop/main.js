const countries = document.querySelector('#countries');
const cities = document.querySelector('#cities');
const streets = document.querySelector('#streets');

fetch('./data.json')
  .then(response => {
    return response.json()
  })
  .then(data => {

    const addOption = (select, val ) => {
      const opt = document.createElement('option')
      opt.innerText = val;
      select.appendChild(opt)
      select.disabled = false;
    }

    const fillCountriesSelect = () => {
      data.forEach(country => {
        addOption(countries, country.name);
      });
    };
    
    let currentCountry = null;
    
    fillCountriesSelect();
 
    countries.addEventListener('change', e => {
      cities.options.length = 1;
      streets.options.length = 1;
      
      currentCountry = data.find(c => c.name === e.target.value);
      if(!currentCountry){
        selectCities.disabled = true;
        selectStreet.disabled = true;
        }
      currentCountry.cities.forEach(city => addOption(cities, city.name))
    })
    
    
    selectCities.addEventListener('change', function(e){
      const city = currentCountry.cities.find(cities => cities.name === e.target.value);
      selectStreet.options.length = 1;
      setTimeout(() => {
        city.streets.forEach(el => {
          let option = document.createElement("option");
          option.text = el.name;
          selectStreet.insertBefore(option, null)
          selectStreet.disabled = false;
        });
      },1000)
      
    });
  })
  .catch(err => {
    console.error('Fetch Error -', err); 
  })