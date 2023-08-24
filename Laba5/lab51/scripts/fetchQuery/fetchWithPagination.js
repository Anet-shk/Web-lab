export default async function fetchWithPagination(page) {
  let data;
  await fetch(config.baseUrl + `?page=${page}&results=${config.results}&seed=${config.seed}`)
  .then(response => response.json())
  .then(result => {
    data = result.results;
  });
  console.log(data);
  return data;
}

const config = {
  baseUrl: "https://randomuser.me/api/",
  seed: "someSeed",
  results: "10",
}
