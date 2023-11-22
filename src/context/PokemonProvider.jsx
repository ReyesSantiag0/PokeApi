import { useEffect, useState } from "react";
import { useForm } from "../hook/useForm";
import { PokemonContext } from "./PokemonContext";

export const PokemonProvider = ({ children }) => {
  const [allPokemons, setAllPokemons] = useState([]);
  const [globalPokemons, setGlobalPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  //Utilizar CustomHook - useForm
  const { valueSearch, onInputChange, onResetForm } = useForm({
    valueSearch: "",
  });

  // ESTADOS SIMPLES API
  const [loading, setLoading] = useState(true);

  //LLAMADO A 20 POKEMONES API
  const getAllPokemones = async (limit = 8) => {
    const baseUrl = "https://pokeapi.co/api/v2/";
    const res = await fetch(
      `${baseUrl}pokemon?limit=${limit}&offset=${offset}`
    );
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });

    const results = await Promise.all(promises);

    setAllPokemons(results);
    setAllPokemons([...allPokemons, ...results]);
    setLoading(false);
  };

  // LLAMADOS A TODOS LOS POKEMONES API
  const getGlobalPokemons = async () => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon?limit=100000&offset=0`);
    const data = await res.json();

    const promises = data.results.map(async (pokemon) => {
      const res = await fetch(pokemon.url);
      const data = await res.json();
      return data;
    });
    const results = await Promise.all(promises);

    setGlobalPokemons(results);
    setLoading(false);
  };

  // POKEMON POR ID
  const getPokemonByID = async (id) => {
    const baseURL = "https://pokeapi.co/api/v2/";

    const res = await fetch(`${baseURL}pokemon/${id}`);
    const data = await res.json();
    return data;
  };

  // BTN CARGAR MÁS
  const onClickLoadMore = () => {
    setOffset(offset + 8);
  };

  useEffect(() => {
    getAllPokemones();
  }, [offset]);

  useEffect(() => {
    getGlobalPokemons();
  }, []);

  // RETORNAMOS PARA PODER RENDERISAR (PODER UTILIZAR EN TODA LA APLICACIÓN)
  return (
    <PokemonContext.Provider
      value={{
        valueSearch,
        onInputChange,
        onResetForm,
        allPokemons,
        globalPokemons,
        getPokemonByID,
        onClickLoadMore,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
