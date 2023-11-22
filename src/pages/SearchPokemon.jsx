import React, { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";
import { useLocation } from "react-router-dom";
import { CardPokemon } from "../components/CardPokemon";

export const SearchPokemon = () => {
  const location = useLocation();
  const { globalPokemons } = useContext(PokemonContext);
  const filteredPokemons = globalPokemons.filter((pokemon) =>
    pokemon.name.includes(location.state.toLowerCase())
  );
  return (
    <>
      <div className="container py-5">
        <form>
          <h1 className="text-center">
            Se encontraron <span>{filteredPokemons.length}</span> resultados
          </h1>
          <div className="row row-cols-1 row-cols-md-4 g-4">
            {filteredPokemons.map((pokemon) => (
              <CardPokemon pokemon={pokemon} key={pokemon.id} />
            ))}
          </div>
        </form>
      </div>
    </>
  );
};
