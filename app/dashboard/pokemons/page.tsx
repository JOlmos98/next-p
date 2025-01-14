import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map(pokemon => ({
    id: Number(pokemon.url.split('/').at(-2)),
    name: pokemon.name!,
  }))

  return pokemons;
};

/*
Aquí hacemos un fetch sencillo de la API
de pokemons y lo representamos con un JSON 
parseado a string (stringify).

El async y await nos permiten hacerlo del lado del servidor, creo.
*/

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col">
      <h1>POKEMONS Page</h1>
      <div className="flex flex-wrap gap-10 items-center justify-center">

        {
          pokemons.map(pokemon => (
            <Image
              key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              alt={pokemon.name}
              width={100}
              height={100}
            />
          ))

        }



      </div>
    </div>
  );
}

/*
        <Image  
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg`}
          alt="pokemon"
          width={100}
          height={100}
        />
*/