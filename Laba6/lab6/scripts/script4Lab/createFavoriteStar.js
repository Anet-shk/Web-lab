import renderUi from "../Ui/renderUi.js";
import users from "../users.js";
import filtersList from "../Ui/filtersList/index.js";

const filtersFavorite = document.getElementById("filtersFavorite");

export default function createFavoriteStar(teacherId, isFavorite = false) {

  const favoriteIcon = document.createElement("img");
  favoriteIcon.classList.add("favoriteIcon");
  favoriteIcon.src = "../../Photo/favoriteIcon.png";
  favoriteIcon.alt = "favorite icon";
  if (!isFavorite) favoriteIcon.classList.add("disabledView");
  
  favoriteIcon.addEventListener("click", (e) => {
    console.log(users.currentList[teacherId]);
    const currentFavoriteListAll = users.listAll.find(e => e.id === teacherId);
    currentFavoriteListAll.favorite = !currentFavoriteListAll.favorite;
    const currentFavoriteCurrentList = users.currentList.find(e => e.id === teacherId);
    currentFavoriteCurrentList.favorite = currentFavoriteListAll.favorite;

    if (filtersFavorite.checked) {
      filtersList.doFilterFavorite(filtersFavorite);
    }

    renderUi();
  })

  return favoriteIcon;
}