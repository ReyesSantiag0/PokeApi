import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { CardPokemon } from "./CardPokemon";

export const PokemonList = () => {
  const { allPokemons } = useContext(PokemonContext);
  return (
    <>
      <div className="container py-5">
        <form>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {allPokemons.map((pokemon) => (
              <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        </form>
      </div>
    </>
  );
};
