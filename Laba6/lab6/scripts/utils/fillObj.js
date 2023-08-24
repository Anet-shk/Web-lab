export default function fillObj(emptyObj, filledObj) {
  Object.keys(filledObj).forEach(key => {
    emptyObj[key] = filledObj[key];
  })
  return emptyObj;
}