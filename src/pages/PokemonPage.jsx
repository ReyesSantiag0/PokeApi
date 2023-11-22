import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Loader } from "../components";
import { PokemonContext } from "../context/PokemonContext";
import { primerMayuscula } from "../helper/helper";

export const PokemonPage = () => {
  const { getPokemonByID } = useContext(PokemonContext);
  const [loading, setLoading] = useState(true);
  const [pokemon, setPokemon] = useState({});
  const { id } = useParams();
  const fetchPokemon = async (id) => {
    const data = await getPokemonByID(id);
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchPokemon(id);
  }, []);

  return (
    <main className="container py-5">
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="card mx-auto my-5" style={{ maxWidth: "500px" }}>
            <div className="row g-0">
              <div className="col-md-4 text-center py-5 p-3">
                <img
                  src={pokemon.sprites.other.dream_world.front_default}
                  alt={`Pokemon ${pokemon?.name}`}
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8 mx-auto">
                <div className="card-body">
                  <h1
                    className="card-title text-center"
                    style={{ color: "purple" }}
                  >
                    {primerMayuscula(pokemon.name)}
                  </h1>
                  <div className="row">
                    <div className="col-md-6">
                      <h5 style={{ color: "orange" }}>Habilidades:</h5>
                      <div className="mb-2">
                        <small className="text-muted">
                          Altura: {pokemon.height}
                        </small>
                      </div>
                      <div className="mb-2">
                        <small className="text-muted">
                          Peso: {pokemon.weight}
                        </small>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <h5 style={{ color: "greenyellow" }}>Estadísticas:</h5>
                      {pokemon.stats.map((stat, index) => (
                        <div key={index} className="mb-2">
                          <small className="text-muted">
                            {stat.stat.name.charAt(0).toUpperCase() +
                              stat.stat.name.slice(1)}
                            : {stat.base_stat}
                          </small>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
};
