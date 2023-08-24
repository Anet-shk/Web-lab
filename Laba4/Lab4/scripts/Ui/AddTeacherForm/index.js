import CoursesClass from "../../additionalScript3Lab/CoursesClass.js";
import users from "../../users.js";
import inValidWindow from "../inValidWindow/index.js";
import newUserValidation from "../inValidWindow/newUserValidation.js";
import renderUi from "../renderUi.js";

const addTeacherButton = document.getElementById("addTeacherButton");
const courses = new CoursesClass();

addTeacherButton.addEventListener("click", (e) => {
  const newUser = {};

  e.preventDefault();
  console.log(Array.from(document.querySelectorAll("#addTeacher input, #addTeacher textarea")));
  Array.from(document.querySelectorAll("#addTeacher input")).forEach(el => {
    if (el.id === ("male" || "female") && el.checked) {
      newUser.gender = el.id;
    } else if (el.id === "date") {
      console.log(el.value, el)
      newUser.b_date = el.value;
      newUser.age = new Date().getFullYear() - Number(newUser.b_date.slice(0, 4));
    } else {
      newUser[el.id] = el.value;
    }
    
  });

  newUser.id = users.listAll.length;
  newUser.favorites = false;
  newUser.course = courses.getRandom();
  newUser.login = {
    username: newUser.full_name,
  };
  newUser.picture = {
    large: "https://img.icons8.com/?size=512&id=23264&format=png",
  };

  if (newUserValidation(newUser)[0]) {
    console.log(newUserValidation(newUser).join(", "));
    inValidWindow(newUserValidation(newUser).join(", "));
  } else {
    users.listAll.push(newUser);
    document.getElementById("darkCover").classList.add("disabledView");
    document.getElementById("addTeacher").classList.add("disabledView");
    console.log("new user: ", newUser, document.getElementById("darkCover"), document.getElementById("addTeacher"));
    document.body.classList.remove("disabledScroll")
    renderUi();
  }
  

  
})