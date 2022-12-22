export function createCountriesMarkup(data = []) {
  return data
    .map((el) => {
      return `<li class='list__item'>
      <img class='list__img' src='${el.flags.svg}' alt = 'flag of ${el.name.official}'>
      <p>${el.name.official}<p>
      </li>`;
    })
    .join("");
}

export function createCountryMarkup(data = []) {
  return data
    .map((el) => {
      return `<ul class='list__item-country'>
          <li class='list__item-name'>
          <img class='list__name-country' src='${
            el.flags.svg
          }' alt = 'flag of ${el.name.official}'>
      <p>${el.name.official}<p>
      </li>
    <li class='list__info-country'><b>Capital:</b> ${el.capital}</li>
    <li class='list__info-country'><b>Population:</b> ${el.population}</li>
    <li class='list__info-country'><b>Languages:</b> ${Object.values(
      el.languages
    ).join(", ")}</li>
   
      </ul>`;
    })
    .join("");
}

export function addMarkup(element, markup = "") {
  element.innerHTML = markup;
}
