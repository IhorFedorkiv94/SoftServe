import dataOne from "./data.json"
const cuntriesName = dataOne;
let cuntriesArray = null;

const getCity = (data, ms) => {
    setTimeout(() => {
        cuntriesArray = data.filter(country => country.cities);
    }, ms)
}
getCity(cuntriesName, 2000);

export {cuntriesName, cuntriesArray}