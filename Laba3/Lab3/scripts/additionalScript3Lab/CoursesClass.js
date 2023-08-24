export default class CoursesClass {
  
  constructor () {
    this.allCourses = ["Mathematics", "Physics", "English", "Computer Science", "Dancing", "Chess", "Biology", "Chemistry",
  "Law", "Art", "Medicine", "Statistics"];
  };

  getRandom() {
    const randomElement = Math.floor(Math.random() * this.allCourses.length);
    // console.log(this.allCourses.length, randomElement);
    return this.allCourses[randomElement];
  };
  
};