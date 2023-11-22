import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage, PokemonPage, SearchPokemon } from "./pages";
import { Footer } from "./components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Footer />
          </>
        }
      >
        {" "}
        <Route index element={<HomePage />}></Route>
        <Route path="pokemon/:id" element={<PokemonPage />}></Route>
        <Route path="search" element={<SearchPokemon />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
