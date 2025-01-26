export async function fetchPokemon() {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon/25", {
    method: "GET",
  });

  return response.json();
}

export async function fetchPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "GET",
  });

  return response.json();
}
