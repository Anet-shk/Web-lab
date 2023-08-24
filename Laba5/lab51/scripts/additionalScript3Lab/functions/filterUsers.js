export default function filterUsers(users, objWithFilters = {}) {
  const filteredFieldsArr = Object.keys(objWithFilters);
  
  if (!users) return;

  return users.filter(user => {
    let ifUserGood = true;
    
    filteredFieldsArr.forEach(filterField => {
      switch (typeof objWithFilters[filterField]) {
        case "string":
          const currentRegExp = new RegExp(objWithFilters[filterField]);
          if (!currentRegExp.test(user[filterField])) ifUserGood = false;
          break;
        case "number":
          if (user[filterField] !== objWithFilters[filterField]) ifUserGood = false;
          break;
        case "boolean":
          if (user[filterField] !== objWithFilters[filterField]) ifUserGood = false;
          break;
        default:
          console.error("not supported type of field in filters Function: " + typeof objWithFilters[filterField]);
      }
    });

    // console.log({ifUserGood})
    return ifUserGood;
  })
}