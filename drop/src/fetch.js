import dataOne from "./data.json"
let cuntriesName = dataOne;
let cityArray = null;
let streetArray = [];

fetch("./src/data.json")
    .then(res => res.json())
    .then(data => {
        getCity(data);
        getStreet(data);
    }).catch(error => {
        console.log("Somthing went wrong" + error)
    });

const getCity = data => {
    cityArray = data.filter(country => country.cities);
    return cityArray;
}
const getStreet = data => {
   return data.filter(el => streetArray.push(el))
}

export { cuntriesName, cityArray, streetArray }