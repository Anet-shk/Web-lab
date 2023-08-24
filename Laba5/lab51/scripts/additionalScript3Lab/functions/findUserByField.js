export default function findUserByField(users, findObj = {}) {
  let answer = [];
  let answerIds = [];
  Object.keys(findObj).forEach(key => {
    users.forEach(teacher => {
      if (teacher[key] === findObj[key]) {
        if (!answerIds.find(index => index === teacher.id)) {
          answer.push(teacher);
          answerIds.push(teacher.id);
        }
      }
    })
    
  });
  return answer;
}