import fetchWithPagination from "../../fetchQuery/fetchWithPagination.js";
import users from "../../users.js";
import renderUi from "../renderUi.js";

const headerSearchDataList = document.getElementById("headerSearchDataList");
const filtersCountry = document.getElementById("filtersCountry");
const paginationDiv = document.getElementById("paginationDiv");
const prevPaginationButton = paginationDiv.firstElementChild;
const nextPaginationButton = paginationDiv.lastElementChild;
let currentPageNumber = 1;

prevPaginationButton.classList.add("disabledView");

// prevPaginationButton.addEventListener("click", (e) => {
//   if (currentPageNumber > 1) {
//     prevPaginationButton.classList.remove("disabledView");
//   } else {
//     prevPaginationButton.classList.add("disabledView");
//   }
// });

nextPaginationButton.addEventListener("click", async (e) => {
  currentPageNumber++;

  const newUsers = users.prepareUsers(users.listAll.concat(await fetchWithPagination(currentPageNumber)));
  console.log( newUsers)
  const newUsersCountries = newUsers.map(el => el.country);
  const newUsersNameNoteAge = newUsers.reduce((accumulatorArr, el) => {
    accumulatorArr.push(el.full_name);
    accumulatorArr.push(el.age);
    accumulatorArr.push(el.note);
    return accumulatorArr;
  }, []);

  if (filtersCountry.nextElementSibling) {
    newUsersCountries.forEach(element => {
      const optionElement = document.createElement("option");
      optionElement.value = element;

      filtersCountry.nextElementSibling.append(optionElement);
    });
  }

  if (headerSearchDataList) {
    newUsersNameNoteAge.forEach(el => {
      const optionElement = document.createElement("option");
      optionElement.value = el;

      headerSearchDataList.append(optionElement);
    })
  }

  users.statisticsList = users.listAll = users.currentList = newUsers;
  renderUi();
});