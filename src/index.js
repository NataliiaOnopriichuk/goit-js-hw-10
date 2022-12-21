import "./css/styles.css";
import { fetchCountries } from "./api";
import { refs } from "./refs";
import _debounce from "lodash.debounce";
import { createCountriesMarkup } from "./markup";
import { createCountryMarkup } from "./markup";

const DEBOUNCE_DELAY = 1000;

function onForm(e) {
  const inputValue = e.target.value;

  fetchCountries(inputValue)
    .then((response) => {
      console.log(response);

      //   const markup = createCountriesMarkup(response);
      //   refs.countryList.innerHTML = markup;

      const markup = createCountryMarkup(response);

      refs.countryInfo.innerHTML = markup;
    })

    .catch((rejected) => {
      console.log(rejected);
    });
}

refs.searchBox.addEventListener("input", _debounce(onForm, DEBOUNCE_DELAY));
