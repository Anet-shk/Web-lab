export default function fillStatisticSection(currentList, statisticsTableSection) {

  Array.from(statisticsTableSection.children).forEach(el => {
    if (el.tagName == "TBODY") {
      el.remove();
    }
  });

  const tBodyElement = document.createElement("tBody");

  currentList.forEach(teacher => {

    const trElement = document.createElement("tr");
    
    const tdElementName = getNewTdElement();
    tdElementName.innerText = teacher.full_name;

    const tdElementAge = getNewTdElement();
    tdElementAge.innerText = teacher.age;

    const tdElementGender = getNewTdElement();
    tdElementGender.innerText = teacher.gender;

    const tdElementCountry = getNewTdElement();
    tdElementCountry.innerText = teacher.country;

    trElement.append(tdElementName, tdElementAge, tdElementGender, tdElementCountry);

    tBodyElement.append(trElement);
  });

  statisticsTableSection.append(tBodyElement);
}

function getNewTdElement() {
  return document.createElement("td");
}