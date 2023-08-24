import CoursesClass from "../CoursesClass.js";

const courses = new CoursesClass;

export default function addMissingField(randomUserMock) {
  randomUserMock.forEach( user => {
    user.title = user.name.title;
    user.full_name = `${user.name.first} ${user.name.last}`;
    user.city = user.location.city;
    user.state = user.location.state;
    user.country = user.location.country;
    user.coordinates = user.location.coordinates;
    user.postcode = user.location.postcode;
    user.timezone = user.location.timezone;
    user.age = user.dob.age;
    user.b_date = user.dob.date;
    user.picture_large = user.picture.large;
    user.picture_thumbnail = user.picture.thumbnail;
    user.course = courses.getRandom();
  })
  return randomUserMock;
}