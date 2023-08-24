import users from "../../users.js";
import renderUi from "../renderUi.js";

const statisticsName = document.getElementById("statisticsName");
const statisticsAge = document.getElementById("statisticsAge");
const statisticsGender = document.getElementById("statisticsGender");
const statisticsCountry = document.getElementById("statisticsCountry");

const statisticsArr = [0,0,0,0];

statisticsName.addEventListener("click", (e) => {
  users.sortUsers("full_name", statisticsArr[0]++ % 2 == 0 ? true : false);
  renderUi();
});

statisticsAge.addEventListener("click", (e) => {
  users.sortUsers("age", statisticsArr[1]++ % 2 == 0 ? true : false);
  renderUi();
});

statisticsGender.addEventListener("click", (e) => {
  users.sortUsers("gender", statisticsArr[0]++ % 2 == 0 ? true : false);
  renderUi();
});

statisticsCountry.addEventListener("click", (e) => {
  users.sortUsers("country", statisticsArr[1]++ % 2 == 0 ? true : false);
  renderUi();
});