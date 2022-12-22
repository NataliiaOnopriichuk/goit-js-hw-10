import "./css/styles.css";
import { Notify } from "../node_modules/notiflix/build/notiflix-aio";
import { fetchCountries } from "./api";
import { refs } from "./refs";
import _debounce from "lodash.debounce";
import {
  createCountriesMarkup,
  createCountryMarkup,
  addMarkup,
} from "./markup";

const DEBOUNCE_DELAY = 300;

function onForm(e) {
  const inputValue = e.target.value.trim();

  addMarkup(refs.countryList);
  addMarkup(refs.countryInfo);
  if (!inputValue) return;

  fetchCountries(inputValue)
    .then((response) => {
      if (response.length > 10) {
        return Notify.info(
          "Too many matches found. Please enter a more specific name."
        );
      }
      if (response.length >= 2 && response.length <= 10) {
        const markupCountries = createCountriesMarkup(response);
        return addMarkup(refs.countryList, markupCountries);
      } else if (response.length > 2 && response.length < 10) {
        const markupCountries = createCountriesMarkup(response);
        return addMarkup(refs.countryList, markupCountries);
      } else {
        const markupCountry = createCountryMarkup(response);
        addMarkup(refs.countryInfo, markupCountry);
      }
    })

    .catch((rejected) => {
      Notify.failure("Oops, there is no country with that name");
    });
}

refs.searchBox.addEventListener("input", _debounce(onForm, DEBOUNCE_DELAY));
