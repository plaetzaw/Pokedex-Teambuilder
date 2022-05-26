// console.log('hello whirl')

// const array = []
// const urls = [
//     "https://jsonplaceholder.typicode.com/comments/1",
//     "https://jsonplaceholder.typicode.com/comments/2",
//     "https://jsonplaceholder.typicode.com/comments/3"
//   ];

//   async function fetchAll() {
//     const results = await Promise.all(urls.map((url) => fetch(url).then((r) => r.json())));
//     console.log(JSON.stringify(results, null, 2));
//   }
  
//   fetchAll();

const test = [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}, {id: 7} , {id: 8}, {id: 9}, {id: 10}]

console.log(test.slice(0, 10))


    // const formdetails = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemon.id}`)
    // const variations = await formdetails.json()
    // pokemon.variations = variations
    // console.log('number of variations', variations.varieties.length)
    // let megaOrRegionalForm = []
    // if (variations.varieties.length > 1) {
    //     for (let i = 0; i < variations.varieties.length; i++) {
    //         if (variations.varieties[i].is_default === false) {
    //             megaOrRegionalForm.push(variations.varieties[i].pokemon.url)
    //         }
    //     } 
    // }

    // let alternateForms = []
    // async function getVariants() {
    //     let newForms = await Promise.allSettled(megaOrRegionalForm.map((form) => fetch(form).then((r) => r.json())))
    //     return newForms
    // }
    // if (megaOrRegionalForm.length > 0) {
    //     alternateForms = await getVariants()
    // }
    // pokemon.alternateForms = alternateForms
