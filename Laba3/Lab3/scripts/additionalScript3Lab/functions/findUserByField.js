export default function findUserByField(users, findObj = {}) {
  const currentFindField = Object.keys(findObj)[0];
  return users.find(user => user[currentFindField] === findObj[currentFindField]);
}