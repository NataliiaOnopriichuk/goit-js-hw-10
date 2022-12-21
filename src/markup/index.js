// export function createCountriesMarkup(data = []) {
//   return data
//     .map((el) => {
//       return `<li class='list__item'>
//       <img class='list__img' src='${el.flags.svg}' alt = 'flag of ${el.name.official}'>
//       <p>${el.name.official}<p>
//       </li>`;
//     })
//     .join("");
// }

export function createCountryMarkup(data = []) {
  return data
    .map((el) => {
      return `<ul class='list__item-country'>
          <li class='list__item-name'>
          <img class='list__img-country' src='${el.flags.svg}' alt = 'flag of ${
        el.name.official
      }'>
      <p>${el.name.official}<p>
      </li>
    <li>Capital: ${el.capital}</li>
    <li>Population: ${el.population}</li>
    <li>Languages: ${Object.values(el.languages).join(", ")}</li>
   
      </ul>`;
    })
    .join("");
}
