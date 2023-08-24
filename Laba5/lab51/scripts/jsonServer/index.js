
// console.log(await resp.json());

export default async function putTeachersToDb(teachers) {
  const headers = new Headers();
  headers.append("Content-Type", 'application/json');
  const body = JSON.stringify(teachers);
  const res = await fetch('http://localhost:3000/validatedTeachers', {
    method: "POST",
    headers,
    body,
  }).then(resp => {
    id++;
    console.log(resp.json()); 
    return resp
  });
  return await res;
}