import fillTeachersLiWithLinkToDetail from "../script4Lab/fillTeachersLiWithLinkToDetail.js";
import fillStatisticSection from "../script4Lab/fillStatisticSection.js";
import users from "../users.js";
import createDatalist from "../script4Lab/createDatalist.js";

const topTeacherUl = document.getElementById("topTeachersUl");
const statisticsTable = document.getElementById("statisticsTable");
const favoritesTeachersUl = document.getElementById("favoritesTeachersUl");
const filtersCountry = document.getElementById("filtersCountry");


export default function renderUi() {

  fillTeachersLiWithLinkToDetail(users.currentList, topTeacherUl);

  fillStatisticSection(users.currentList, statisticsTable);

  const favoriteTeachers = users.listAll.filter(teacher => teacher.favorite);
  fillTeachersLiWithLinkToDetail(favoriteTeachers, favoritesTeachersUl);

}