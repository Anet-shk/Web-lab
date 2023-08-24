import darkCover from "../Events/darkCover.js";
import users from "../users.js";
const fullProfile = document.getElementById("full-profile");

export default function showDetailedInformation(id) {
  const user = users.listAll[id];
  darkCover.activate();

  fullProfile.children[1].children[0].firstElementChild.src = user.picture_large || "https://img.icons8.com/?size=512&id=23264&format=png";
  fullProfile.children[1].children[1].innerHTML = user.full_name;
  fullProfile.children[1].children[2].innerHTML = user.gender;
  fullProfile.children[1].children[3].innerHTML = user.age;
  fullProfile.children[1].children[4].firstElementChild.href = "mailto:" + user.email;
  fullProfile.children[1].children[4].firstElementChild.innerHTML = user.email;
  fullProfile.children[1].children[5].firstElementChild.href = "tel:" + user.phone.match(/\d/g).join('');
  fullProfile.children[1].children[5].firstElementChild.innerHTML = user.phone;
  fullProfile.children[1].children[6].innerHTML = user.country;
  fullProfile.children[1].children[7].innerHTML = user.city;
  fullProfile.children[1].children[8].innerHTML = user.login.username;
  fullProfile.children[1].children[9].firstElementChild.href = `https://www.google.com/maps/place/${user.city}+${user.country}`;
  fullProfile.children[1].children[9].firstElementChild.innerHTML = `Map: ${user.city} ${user.country}`;

  fullProfile.classList.remove("disabledView");

  fullProfile.children[0].children[1].addEventListener("click", deactivateAll);
  darkCover.element.addEventListener("click", deactivateAll);

  return
}

function deactivateAll() {
  darkCover.deactivate();
  fullProfile.classList.add("disabledView");

  darkCover.element.removeEventListener("click", deactivateAll);
  fullProfile.children[0].children[1].removeEventListener("click", deactivateAll);
}

/* 
<div id="full-profile" class="modalWindow disabledView fullProfile">
  <div class="formHeader">
    <div class="textFormHeader">Add teacher</div>
    <div class="closeBlockFormHeader">
      <img
        src="./Photo/x-mark-close.svg"
        alt="close modal window"
        title="x-mark close icon" />
    </div>
  </div>
  <full-profile data-bgColor="blue">
    <span slot="photo"><img src="Photo/1.jpg" /></span>
    <span slot="name">Floor Jansen</span>
    <span slot="gender">woman</span>
    <span slot="old">29</span>
    <span slot="email"><a href="mailto:floorjan@gmail.com">floorjan@gmail.com</a></span>
    <span slot="tel"><a href="tel:+380123456789">+380123456789</a></span>
    <span slot="country">Ukraine</span>
    <span slot="town">Kyiv</span>
    <span slot="comment">Alright</span>
    <span slot="map"><a href="https://google.com">google</a></span>
  </full-profile>
</div> 
*/