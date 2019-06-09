let countriesName;
let cityArray = null;
let streetArray = [];

fetch("./src/data.json")
    .then(res => res.json())
    .then(data => {
        getCountries(data);
        getCity(data);
        getStreet(data);
    }).catch(error => {
        console.log("Somthing went wrong" + error)
    });
const getCountries = data =>  countriesName = data;
const getCity = data => cityArray = data.filter(country => country.cities);
const getStreet = data => data.filter(streets => streetArray.push(streets));
 
export {countriesName, cityArray, streetArray}