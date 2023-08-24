import createDatalist from "../../script4Lab/createDatalist.js";
import users from "../../users.js";
import renderUi from "../renderUi.js";

const headerSearch = document.getElementById("headerSearch");
let headerSearchDataListWordArr = [];

users.listAll.forEach(el => {
  headerSearchDataListWordArr.push(el.full_name);
  headerSearchDataListWordArr.push(el.note);
  headerSearchDataListWordArr.push(el.age);
});

const headerSearchDataList = createDatalist(headerSearchDataListWordArr, "headerSearchDataList");

headerSearch.parentElement.append(headerSearchDataList);

headerSearch.addEventListener("input", (e) => {
  users.currentList = e.target.value ? users.findUsers({
    full_name: e.target.value,
    age: Number(e.target.value),
    note: e.target.value,
  }) : users.listAll;

  renderUi()
})