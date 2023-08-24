import fillTeachersLiWithLinkToDetail from "../script4Lab/fillTeachersLiWithLinkToDetail.js";
import fillStatisticSection from "../script4Lab/fillStatisticSection.js";
import users from "../users.js";

const topTeacherUl = document.getElementById("topTeachersUl");
const statisticsTable = document.getElementById("statisticsTable");
const favoritesTeachersUl = document.getElementById("favoritesTeachersUl");

export default function renderUi() {
  
  fillTeachersLiWithLinkToDetail(users.currentList, topTeacherUl);

  fillStatisticSection(users.statisticsList, statisticsTable);

  const favoriteTeachers = users.listAll.filter(teacher => teacher.favorite);
  fillTeachersLiWithLinkToDetail(favoriteTeachers, favoritesTeachersUl);

}