export default async function fetchQuery(url) {
  let data;
  await fetch('https://randomuser.me/api/?results=50')
  .then(response => response.json())
  .then(result => {
    data = result.results;
  });
  console.log(data);
  return data;
}