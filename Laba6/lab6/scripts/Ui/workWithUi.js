import "./filtersList/index.js";
import "./statisticsList/index.js";
import "./findList/index.js";
import "./AddTeacherForm/index.js";
import "./paginationButton/index.js";
import darkCover from "../Events/darkCover.js";
import renderUi from "./renderUi.js";
import createDatalist from "../script4Lab/createDatalist.js";
import users from "../users.js";

const addTeachersButtonsArr = Array.from(document.getElementsByClassName('addTeacherButton'));
const addTeacherModal = document.getElementById('addTeacher');
const xMarkCloseIcon = Array.from(document.getElementsByClassName('closeBlockFormHeader'));
const temporaryShortProfileButton = document.getElementById('temporaryShortProfile');
const temporaryFullProfile = document.getElementById('full-profile');
const filtersCountry = document.getElementById("filtersCountry");
let currentActiveElements = [];

// maybe rename into workWithEvents...

renderUi();

filtersCountry.parentElement.appendChild(createDatalist(users.listAll.map(elObj => elObj.country), "filtersCountryDataList"));

addTeachersButtonsArr.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.add('disabledScroll');
    darkCover.activate();
    currentActiveElements.push(darkCover.element);
    addTeacherModal.classList.remove('disabledView');
    currentActiveElements.push(addTeacherModal);
  })
});

function closeCurrentActiveModal() {
  currentActiveElements.forEach(el => {
    el.classList.add('disabledView');
    document.body.classList.remove('disabledScroll');
  })
}

darkCover.element.addEventListener('click', closeCurrentActiveModal);
xMarkCloseIcon.forEach(el => {
  el.addEventListener('click', closeCurrentActiveModal);
});

document.onkeydown = function (evt) {
  evt = evt || window.event;
  var isEscape = false;
  if ("key" in evt) {
    isEscape = (evt.key === "Escape" || evt.key === "Esc");
  } else {
    isEscape = (evt.keyCode === 27);
  }
  if (isEscape) {
    closeCurrentActiveModal();
  }
};

temporaryShortProfileButton.addEventListener('click', () => {  // button to show full profile
  document.body.classList.add('disabledScroll');
  darkCover.activate();
  currentActiveElements.push(darkCover.element);
  temporaryFullProfile.classList.remove('disabledView');
  currentActiveElements.push(temporaryFullProfile);
});

const uiReturned = {
  elements: {
    addTeachersButtonsArr,
    darkCoverDiv: darkCover.element,
    temporaryShortProfileButton,
    temporaryFullProfile,
    addTeacherModal,
    xMarkCloseIcon,
  }
};

export default uiReturned;
