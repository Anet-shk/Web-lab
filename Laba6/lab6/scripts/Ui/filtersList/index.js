import users from "../../users.js";
import renderUi from "../renderUi.js";

const filtersCountry = document.getElementById("filtersCountry");
const filtersAge = document.getElementById("filtersAge");
const filtersGender = document.getElementById("filtersGender");
const filtersFavorite = document.getElementById("filtersFavorite");

let filtersArr = [filtersCountry, filtersAge, filtersGender, filtersFavorite];

function doFilterCountry(filtersCountry) {
  clearFilters(filtersCountry);
  if (filtersCountry.value.length === 1) {
    filtersCountry.value = filtersCountry.value.toUpperCase();
  }
  users.currentList = users.filterUsers(users.listAll, {country: filtersCountry.value});
  renderUi();
}

function doFilterAge(filtersAge) {
  clearFilters(filtersAge);
  const value = filtersAge.value ? Number(filtersAge.value) : "";
  users.currentList = users.filterUsers(users.listAll, {age: value});
  renderUi();
}

function doFilterGender(filtersGender) {
  clearFilters(filtersGender);
  if(filtersGender.value === "NA") {
    filtersGender.value = "";
  }
  users.currentList = users.filterUsers(users.listAll, {gender: filtersGender.value});
  renderUi();
}

function doFilterFavorite(filtersFavorite) {
  clearFilters(filtersFavorite);
  if (!filtersFavorite.checked) {
    users.currentList = users.listAll;
    renderUi();
    return;
  }
  users.currentList = users.listAll.filter(teacher => teacher.favorite);
  renderUi();
}

function clearFilters(currentFilter = undefined) {
  const currentFilterPosition = filtersArr.indexOf(currentFilter);
  filtersArr.forEach((e, i) => {
    if (i === currentFilterPosition) {

    } else if (i === 3) {
      e.checked = false
    } else if (i === 2) {
      e.value = "NA";
    } else {
      e.value = "";
    }
  })
}

filtersCountry.addEventListener("input", e => doFilterCountry(filtersCountry));
filtersAge.addEventListener("input", e => {
  if (Number(e.target.value) < 1 || Number(e.target.value) > 150) {
    e.target.value = "";
  }
  doFilterAge(filtersAge);
});
filtersGender.addEventListener("change", e => doFilterGender(filtersGender));
filtersFavorite.addEventListener("change", e => doFilterFavorite(filtersFavorite));

const filtersList = {
  clearFilters,
  doFilterFavorite,
  doFilterGender,
  doFilterCountry,
  doFilterAge,
}

export default filtersList;