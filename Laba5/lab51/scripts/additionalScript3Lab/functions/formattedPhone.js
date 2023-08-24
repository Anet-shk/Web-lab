const phoneFields = /\d+/g;

export default function formattedPhone(phone) {

  const currentMatch = phone.match(phoneFields);
  const joinedMatch = currentMatch.join("");
  // let formattedPhone;

  // console.log( joinedMatch.length)

  switch (joinedMatch.length) {
    case 6: 
      return Array.from(joinedMatch).map((el, i) => {
        return i%2 === 0 && i !== 0 ? `${el}-` : el;
      }).join("");
      break;
    case 7:
      return joinedMatch.slice(0, 2) + '-' + joinedMatch.slice(2, 5) + "-" + joinedMatch.slice(5,);
      break;
    case 8:
      return joinedMatch.slice(0, 3) + '-' + joinedMatch.slice(3, 5) + "-" + joinedMatch.slice(5,);
      break;
    case 9: 
      return Array.from(joinedMatch).map((el, i) => {
        return i%3 === 0 && i !== 0 ? `-${el}` : el;
      }).join("");
    case 10:
      return `+(380)${joinedMatch.slice(0, 3)}-${joinedMatch.slice(3, 6)}-${joinedMatch.slice(6, 8)}${joinedMatch.slice(8,)}`;
      break;
    case 11:
      return `+(38${joinedMatch[0]})${joinedMatch.slice(1, 4)}-${joinedMatch.slice(4, 7)}-${joinedMatch.slice(7, 9)}${joinedMatch.slice(9,)}`;
      break;
    default: 
      return phone
      console.log(`invalid format for phone: ${phone}`);
  }

  // console.log(phone, joinedMatch);
  // return formattedPhone;
}