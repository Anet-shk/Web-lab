export default function createDatalist(dataForList, id) {

  const dataListEl = document.createElement('datalist');
  dataListEl.id = id;

  dataForList.forEach(el => {
    const optionEl = document.createElement("option");
    optionEl.value = el;

    dataListEl.append(optionEl);
  });

  return dataListEl;
}