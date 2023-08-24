const addTeachersButtonsArr = Array.from(document.getElementsByClassName('addTeacherButton'));
const darkCoverDiv = document.getElementById('darkCover');
const addTeacherModal = document.getElementById('addTeacher');
const xMarkCloseIcon = Array.from(document.getElementsByClassName('closeBlockFormHeader'));
const temporaryShortProfileButton = document.getElementById('temporaryShortProfile');
const temporaryFullProfile = document.getElementById('full-profile1');

let currentActiveElements = [];

function disabledOnScroll() {
  console.log('scroll disabled');
}

addTeachersButtonsArr.forEach(el => {
  el.addEventListener('click', () => {
    document.body.classList.add('disabledScroll');
    darkCoverDiv.classList.remove('disabledView');
    currentActiveElements.push(darkCoverDiv);
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

darkCoverDiv.addEventListener('click', closeCurrentActiveModal);
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

temporaryShortProfileButton.addEventListener('click', () => {
  document.body.classList.add('disabledScroll');
  darkCoverDiv.classList.remove('disabledView');
  currentActiveElements.push(darkCoverDiv);
  temporaryFullProfile.classList.remove('disabledView');
  currentActiveElements.push(temporaryFullProfile);
});
