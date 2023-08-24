export default function fillTeachersLi(teachers, ulElement) {
  console.log( ulElement )

  ulElement.innerHTML = "";

  ulElement.append(...teachers.map((teacher, index) => {

    const currentLi = document.createElement('li');
    currentLi.classList.add("teachersCard");

    const shortProfile = document.createElement("short-profile");
    shortProfile.dataset.id = teacher.id;

    const spanTeacherCardPhoto = document.createElement("span");
    spanTeacherCardPhoto.classList.add("teacherCardPhoto");
    spanTeacherCardPhoto.slot = "photo";

    const divPhoto = document.createElement("div");

    const imgPhoto = document.createElement("img");
    imgPhoto.alt = "Photo";
    imgPhoto.title = "profile picture of " + teacher.full_name;
    imgPhoto.src = teacher.picture.large;

    divPhoto.appendChild(imgPhoto);
    spanTeacherCardPhoto.appendChild(divPhoto);

    const spanTeacherCardName = document.createElement("span");
    spanTeacherCardName.classList.add("teacherCardName");
    spanTeacherCardName.slot = "name";
    spanTeacherCardName.innerText = teacher.full_name;

    const spanDetails = document.createElement("span");
    spanDetails.slot = "details";
    spanDetails.innerText = "Докладніше";

    shortProfile.appendChild(spanTeacherCardPhoto);
    shortProfile.appendChild(spanTeacherCardName);
    shortProfile.appendChild(spanDetails);

    currentLi.appendChild(shortProfile);

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