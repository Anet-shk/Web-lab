import formattedPhone from "./formattedPhone.js";
import isFirstLetterIsCapital from "./isFirstLetterIsCapital.js";
import isUserEmailValid from "./isUserEmailValid.js";

export default function validatedUsers(users) {
  
  const stringFields = ["full_name", "gender", "note", "state", "city", "country"];
  const numberFields = ["age"];
  const phoneFields = /\d+/g;

  users.forEach(user => {

    stringFields.forEach(currentField => {
      if (!user[currentField]) {
        user[currentField] = "N/A";
      } else {
        // console.log(user[currentField], isFirstLetterIsCapital(user[currentField]))
        if (!isFirstLetterIsCapital(user[currentField])) {
          user[currentField] = user[currentField][0].toUpperCase() + user[currentField].slice(1,);
          // console.log(user[currentField]);
        }
      }
      if (typeof user[currentField] !== "string") throw new Error(`${user[currentField]} is not a String!!!`);
    });

    numberFields.forEach(currentField => {
      if (typeof user[currentField] !== "number") throw new Error(`${user[currentField]} is not a Number!!!`);
    });

    user.phone = formattedPhone(user.phone);

    isUserEmailValid(user.email);

  })

  return users;
}