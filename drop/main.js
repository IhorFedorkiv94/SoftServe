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
      selectCountries.appendChild(option);
    });
    
    let currentCountry = null;

    selectCountries.addEventListener("change", function(e){
        selectCities.innerHTML = "";
        selectStreet.innerHTML = "";
        // не думаю що це правильно писати лишній код 
        defOp = document.createElement("option");
        defOp.text = "choose some city";
        selectCities.appendChild(defOp);
        // не думаю що це правильно писати лишній код 
        defOp1 = document.createElement("option");
        defOp1.text = "choose some streets";
        selectStreet.appendChild(defOp1);
        if(!currentCountry){
          selectCities.disabled == true;
          selectStreet.disabled == true;
        }

        currentCountry = data.find(country => country.name === e.target.value);
        currentCountry.cities.forEach(el => {
            let option = document.createElement("option");
            option.text = el.name;
            selectCities.appendChild(option);
            selectCities.disabled = false;
        });
    });
    
    selectCities.addEventListener('change', function(e){
      const city = currentCountry.cities.find(cities => cities.name === e.target.value);
      selectStreet.innerHTML = "";
      // не думаю що це правильно писати лишній код 
      defOp1 = document.createElement("option");
      defOp1.text = "choose some streets";
      selectStreet.appendChild(defOp1);
      
      city.streets.forEach(el => {
          let option = document.createElement("option");
          option.text = el.name;
          selectStreet.appendChild(option);
          selectStreet.disabled = false;
        });
    });
  })
  .catch(err => {
    console.error('Fetch Error -', err); 
  })