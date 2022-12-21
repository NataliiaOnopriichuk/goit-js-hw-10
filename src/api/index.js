const BASE_URL = `https://restcountries.com/v3.1/`;

const optionsCountries = `?fields=name,capital,population,flags,languages`;

export function fetchCountries(name) {
  return fetch(BASE_URL + "/name/" + name + optionsCountries).then(
    (response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(response.statusText);
    }
  );
}
