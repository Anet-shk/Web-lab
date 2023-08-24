import { randomUserMock } from "./FE4U-Lab3-mock.js";
import actionForUsers from "./additionalScript3Lab/actionForUsers.js";
import addMissingField from "./additionalScript3Lab/functions/addMissingField.js";
import filterUsers from "./additionalScript3Lab/functions/filterUsers.js";
import sortUsers from "./additionalScript3Lab/functions/sortUsers.js";
import validatedUsers from "./additionalScript3Lab/functions/validatedUsers.js";
import findUserByField from "./additionalScript3Lab/functions/findUserByField.js";
import percentageFilterUsers from "./additionalScript3Lab/functions/percentageFilterUsers.js";
import fillObj from "./utils/fillObj.js";
import fetchWithPagination from "./fetchQuery/fetchWithPagination.js";
import putTeachersToDb from "./jsonServer/index.js";



const myFullUsers = addMissingField(await fetchWithPagination(1));  // addMissingField(randomUserMock);
console.log({ myFullUsers });

const myValidatedUsers = validatedUsers(myFullUsers);

myValidatedUsers.forEach(teacher => {
  putTeachersToDb(teacher);
})//

const users = {
  listAll: myValidatedUsers,
  currentList: myValidatedUsers,
  statisticsList: myValidatedUsers.map(el => el),
};

actionForUsers.addMissingField = addMissingField;
actionForUsers.getValidatedUsers = validatedUsers;
actionForUsers.prepareUsers = (users) => validatedUsers(addMissingField(users));
actionForUsers.sortUsers = sortUsers; // second argument is field, which will be sorted, third is direction (boolean)}
actionForUsers.filterUsers = filterUsers; // second argument is object, like: {name: 'Ann'}
actionForUsers.findUsers = findUserByField; // second argument is object, like: {age: 50}
actionForUsers.percentageFilters = percentageFilterUsers; // second argument is object, like: {name: 'Ann'}

// How to use method above...
// console.log(users.sortUsers("age", true));
// console.log(users.filterUsers({full_name: 'Dar'}));
// console.log(users.findUser({age: 24}));
// console.log(users.percentageFilters({full_name: 'Dar'}));

// users.filterUsers({full_name: 'Dar'}).forEach(user => console.log(user.full_name)); // here you can test your methods above.

fillObj(users, actionForUsers);

// console.log(users)

export default users;