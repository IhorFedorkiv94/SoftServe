import _ from "lodash"
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
const getCity = data => cityArray = _.filter(data, country => country.cities)
const getStreet = data => _.filter(data, streets => streetArray.push(streets));
 
export {countriesName, cityArray, streetArray}