
export const getPokemons = async () => {
  const data = await fetch('https://unpkg.com/pokemons@1.1.0/pokemons.json');
  const json = await data.json();
  

  return json;
}