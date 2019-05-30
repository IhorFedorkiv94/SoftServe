// const countries = document.querySelector('#countries');
// const cities = document.querySelector('#cities');
// const streets = document.querySelector('#streets');

// fetch('./data.json')
//   .then(response => {
//     return response.json()
//   })
//   .then(data => {

//     const addOption = (select, val ) => {
//       const opt = document.createElement('option')
//       opt.innerText = val;
//       select.appendChild(opt)
//       select.disabled = false;
//     }

//     const fillCountriesSelect = () => {
//       data.forEach(country => {
//         addOption(countries, country.name);
//       });
//     };
    
//     let currentCountry = null;
    
//     fillCountriesSelect();
 
//     countries.addEventListener('change', e => {
//       cities.options.length = 1;
//       streets.options.length = 1;
      
//       currentCountry = data.find(c => c.name === e.target.value);
//       if(!currentCountry){
//         selectCities.disabled = true;
//         selectStreet.disabled = true;
//         }
//       currentCountry.cities.forEach(city => addOption(cities, city.name))
//     })
    
    
//     cities.addEventListener('change', e => {
//       streets.options.length = 1;
//       const city = currentCountry.cities.find(c => c.name === e.target.value);
//       city.streets.forEach(s => addOption(streets, s.name));
//     })
//   })
//   .catch(err => {
//     console.error('Fetch Error -', err); 
//   })


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
  
  // Inner state
  let currentCountry = null;
  
  const disabledOtherDropdown = (param) => {
    if(!param){
      cities.disabled = true;
      streets.disabled = true;
      }
  }
  
  // Populate countries


  fillCountriesSelect();
 
  countries.addEventListener('change', e => {
    cities.options.length = 1;
    streets.options.length = 1;
    
    currentCountry = data.find(c => c.name === e.target.value);
    disabledOtherDropdown(currentCountry);
    currentCountry.cities.forEach(city => addOption(cities, city.name));
  })
  
  cities.addEventListener('change', e => {
    streets.options.length = 1;
    const city = currentCountry.cities.find(c => c.name === e.target.value);
    city.streets.forEach(s => addOption(streets, s.name));
  })

})
.catch(err => {
  // Do something for an error here
  console.error('Fetch Error -', err); 
})
