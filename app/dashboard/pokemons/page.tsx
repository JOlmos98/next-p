const getPokemons = async (limit = 20, offset = 0) => {
  const data = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  return data;
};

/*
Aquí hacemos un fetch sencillo de la API
de pokemons y lo representamos con un JSON 
parseado a string (stringify).

El async y await nos permiten hacerlo del lado del servidor, creo.
*/

export default async function PokemonsPage() {

  const pokemons = await getPokemons();

  return (
    <div>
      <h1>POKEMONS Page</h1>
      {JSON.stringify(pokemons)}
    </div>
  );
}
