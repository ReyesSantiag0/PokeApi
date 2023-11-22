import React from "react";
import { Link } from "react-router-dom";

export const CardPokemon = ({ pokemon }) => {
  return (
    <Link to={`/pokemon/${pokemon.id}`} style={{ textDecoration: "none" }}>
      <div className="col">
        <div className="card h-100" style={{ textAlign: "center" }}>
          <img
            src={pokemon.sprites.other.dream_world.front_default}
            alt={`Pokemon ${pokemon.name}`}
            className="card-img-top"
            style={{
              width: "200px",
              height: "200px",
              margin: "auto",
              padding: 10,
            }}
          />
          <div className="card-body">
            <span className="pokemon-id" style={{ color: "greenyellow" }}>
              N° {pokemon.id}
            </span>
            <h5 className="card-title" style={{ color: "orange" }}>
              {pokemon.name}
            </h5>
            <p className="card-text"></p>
          </div>
        </div>
      </div>
    </Link>
  );
};
