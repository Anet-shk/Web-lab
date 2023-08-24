export default function sortUsers(users, fieldToFlitteredBy, direction = false) {
  return users.sort((objA, objB) => {
    switch (typeof objA[fieldToFlitteredBy]) {
      case "string":
        const fieldA = objA[fieldToFlitteredBy].toUpperCase();
        const fieldB = objB[fieldToFlitteredBy].toUpperCase();
        return direction ? fieldA < fieldB ? -1 : 1 : fieldA < fieldB ? 1 : -1;
        break;
      case "number":
        return direction ? objA[fieldToFlitteredBy] - objB[fieldToFlitteredBy] : objB[fieldToFlitteredBy] - objA[fieldToFlitteredBy];
        break;
      case "boolean":
        return direction ? objA[fieldToFlitteredBy] === true  ? 1 : -1 : objA[fieldToFlitteredBy] === true ? -1 : 1;
        break;
      default:
        console.error("not supported type of field to sort by");
    }
  })
}