console.log('hello whirl')

const array = []
const urls = [
    "https://jsonplaceholder.typicode.com/comments/1",
    "https://jsonplaceholder.typicode.com/comments/2",
    "https://jsonplaceholder.typicode.com/comments/3"
  ];

  async function fetchAll() {
    const results = await Promise.all(urls.map((url) => fetch(url).then((r) => r.json())));
    console.log(JSON.stringify(results, null, 2));
  }
  
  fetchAll();
