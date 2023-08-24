export default function newUserValidation(newUser) {
  let invalidFieldsArray = [];

  const validationObj = {
    full_name: "string",
    age: "number",
    gender: "string",
    email: "string",
    country: "string",
    phone: "string",
    city: "string",
    b_date: "string",
  };

  Object.keys(validationObj).forEach(key => {
    console.log(key, validationObj[key], typeof newUser[key])
    if (typeof newUser[key] === validationObj[key] && newUser[key]) {
      console.log(key, "all right");
    } else {
      invalidFieldsArray.push(key);
    }
  })

  return invalidFieldsArray
}