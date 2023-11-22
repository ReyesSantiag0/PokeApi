// import React from "react";

import { useContext } from "react";
import { PokemonList } from "../components";
import { PokemonContext } from "../context/PokemonContext";

export const HomePage = () => {
  const { onClickLoadMore } = useContext(PokemonContext);
  return (
    <>
      <PokemonList></PokemonList>
      <div className="container text-center mt-4">
        <button className="btn btn-outline-light" onClick={onClickLoadMore}>
          Cargar más
        </button>
      </div>
    </>
  );
};
