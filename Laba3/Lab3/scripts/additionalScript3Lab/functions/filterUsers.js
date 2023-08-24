export default function filterUsers(users, objWithFilters = {}) {
  const filteredFieldsArr = Object.keys(objWithFilters);

  return users.filter(user => {
    let ifUserGood = true;
    
    filteredFieldsArr.forEach(filterField => {
      switch (typeof objWithFilters[filterField]) {
        case "string":
          const currentRegExp = new RegExp(objWithFilters[filterField]);
          if (!currentRegExp.test(user[filterField])) ifUserGood = false;
          break;
        case "number" || "boolean":
          if (user[filterField] !== objWithFilters[filterField]) ifUserGood = false;
          break;
        default:
          console.error("not supported type of field in filters Function");
      }
    });

    // console.log({ifUserGood})
    return ifUserGood;
  })
}