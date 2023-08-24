import createFavoriteStar from "./createFavoriteStar.js";
import showDetailedInformation from "./showDetailedInfo.js";

export default function fillTeachersLiWithLinkToDetail(teachers, ulElement) {

  ulElement.innerHTML = "";

  ulElement.append(...teachers.map((teacher) => {

    const currentLi = document.createElement('li');
    currentLi.classList.add("teachersCard");

    const shortProfile = document.createElement("short-profile");
    shortProfile.dataset.id = teacher.id;

    const spanTeacherCardPhoto = document.createElement("span");
    spanTeacherCardPhoto.classList.add("teacherCardPhoto");
    spanTeacherCardPhoto.slot = "photo";

    const divPhotoWrapper = document.createElement("div");
    divPhotoWrapper.classList.add("teacherCardPhotoWrapper");

    const divPhotoFrame = document.createElement("div");
    divPhotoFrame.classList.add("teacherCardPhotoFrame");

    const imgPhoto = document.createElement("img");
    imgPhoto.alt = "Photo";
    imgPhoto.title = "profile picture of " + teacher.full_name;
    imgPhoto.src = teacher.picture?.large || "https://img.icons8.com/?size=512&id=23264&format=png";

    const favoriteStar = teacher.favorite ? createFavoriteStar(teacher.id, true): createFavoriteStar(teacher.id, false);

    divPhotoFrame.appendChild(imgPhoto);
    divPhotoWrapper.appendChild(divPhotoFrame);
    divPhotoWrapper.appendChild(favoriteStar);
    spanTeacherCardPhoto.appendChild(divPhotoWrapper);

    const spanTeacherCardName = document.createElement("span");
    spanTeacherCardName.classList.add("teacherCardName");
    spanTeacherCardName.slot = "name";
    spanTeacherCardName.innerText = teacher.full_name;

    const spanDetails = document.createElement("span");
    spanDetails.slot = "details";
    spanDetails.innerText = "Докладніше";
    spanDetails.addEventListener("click", (e) => {
      showDetailedInformation(e.target.parentElement.dataset.id);
    });

    shortProfile.appendChild(spanTeacherCardPhoto);
    shortProfile.appendChild(spanTeacherCardName);
    shortProfile.appendChild(spanDetails);

    currentLi.appendChild(shortProfile);

    divPhotoWrapper.addEventListener("mouseenter", (e) => {
      e.target.lastElementChild.classList.remove("disabledView");
    });
    
    divPhotoWrapper.addEventListener("mouseleave", (e) => {
      if (!teacher.favorite) e.target.lastElementChild.classList.add("disabledView");
    });

    return currentLi;
  }));
}



/* <li class="teachersCard">
<short-profile data-bgColor="blue">
  <span class="teacherCardPhoto" slot="photo">
    <div>
      <img
        alt="Photo"
        title="profile picture"
        src="./Photo/1.jpg" />
    </div>
  </span>
  <span class="teacherCardName" slot="name">Floor Jansen</span>
  <span slot="details" id="temporaryShortProfile">Докладніше</span>
</short-profile>
</li> */