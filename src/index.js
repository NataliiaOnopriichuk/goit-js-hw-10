import "./css/styles.css";
import { fetchCountries } from "./api";
import { refs } from "./refs";
import _debounce from "lodash.debounce";
import { createCountriesMarkup } from "./markup";
import { createCountryMarkup } from "./markup";
import { addMarkup } from "./markup";

const DEBOUNCE_DELAY = 300;

function onForm(e) {
  const inputValue = e.target.value.trim();

  fetchCountries(inputValue)
    .then((response) => {
      console.log(response);

      const markupCountries = createCountriesMarkup(response);
      addMarkup(refs.countryList, markupCountries);

      const markupCountry = createCountryMarkup(response);
      addMarkup(refs.countryInfo, markupCountry);
    })

    .catch((rejected) => {
      console.log(rejected);
    });
}

refs.searchBox.addEventListener("input", _debounce(onForm, DEBOUNCE_DELAY));
