export function createCountriesMarkup(data = []) {
  return data
    .map(({ flags, name }) => {
      return `<li class='list__item'>
      <img class='list__img' src='${flags.svg}' alt = 'flag of ${name.official}'>
      <p>${name.official}<p>
      </li>`;
    })
    .join("");
}

export function createCountryMarkup(data = []) {
  return data
    .map(({ flags, name, capital, population, languages }) => {
      return `<ul class='list__item-country'>
          <li class='list__item-name'>
          <img class='list__name-country' src='${flags.svg}' alt = 'flag of ${
        name.official
      }'>
      <p>${name.official}<p>
      </li>
    <li class='list__info-country'><b>Capital:</b> ${capital}</li>
    <li class='list__info-country'><b>Population:</b> ${population}</li>
    <li class='list__info-country'><b>Languages:</b> ${Object.values(
      languages
    ).join(", ")}</li>
      </ul>`;
    })
    .join("");
}

export function addMarkup(element, markup = "") {
  element.innerHTML = markup;
}
