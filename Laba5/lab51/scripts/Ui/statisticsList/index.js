import users from "../../users.js";
import renderUi from "../renderUi.js";

const statisticsName = document.getElementById("statisticsName");
const statisticsAge = document.getElementById("statisticsAge");
const statisticsGender = document.getElementById("statisticsGender");
const statisticsCountry = document.getElementById("statisticsCountry");

const statisticsArr = [0,0,0,0];
statisticsName.addEventListener("click", (e) => {
  users.sortUsers(users.currentList, "full_name", statisticsArr[0]++ % 2 == 0 ? true : false);
  renderUi();
});

statisticsAge.addEventListener("click", (e) => {
  users.sortUsers(users.currentList, "age", statisticsArr[1]++ % 2 == 0 ? true : false);
  renderUi();
});

statisticsGender.addEventListener("click", (e) => {
  users.sortUsers(users.currentList, "gender", statisticsArr[0]++ % 2 == 0 ? true : false);
  renderUi();
});

statisticsCountry.addEventListener("click", (e) => {
  users.sortUsers(users.currentList, "country", statisticsArr[1]++ % 2 == 0 ? true : false);
  renderUi();
});