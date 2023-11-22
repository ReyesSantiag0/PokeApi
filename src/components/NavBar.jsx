import { useContext } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { PokemonContext } from "../context/PokemonContext";

export const NavBar = () => {
  const { onInputChange, valueSearch, onResetForm } =
    useContext(PokemonContext);
  const navigate = useNavigate();
  const onSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search", {
      state: valueSearch,
    });
    onResetForm();
  };
  return (
    <div>
      <header data-bs-theme="dark">
        <div className="collapse text-bg-dark" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4>Acerca de</h4>
                <p className="text-body-secondary">
                  ¡Bienvenido a un viaje inolvidable a través de las diversas
                  regiones del fascinante mundo Pokémon! Este álbum captura la
                  esencia de la exploración y la diversidad que define a cada
                  rincón de la tierra Pokémon. Desde las majestuosas montañas de
                  Kanto hasta las exuberantes junglas de Alola, cada página
                  revela la asombrosa variedad de criaturas que pueblan este
                  universo único.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-dark shadow-sm">
          <div className="container">
            <a href="/" className="navbar-brand d-flex align-items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-feather"
                viewBox="0 0 16 16"
              >
                <path d="M15.807.531c-.174-.177-.41-.289-.64-.363a3.765 3.765 0 0 0-.833-.15c-.62-.049-1.394 0-2.252.175C10.365.545 8.264 1.415 6.315 3.1c-1.95 1.686-3.168 3.724-3.758 5.423-.294.847-.44 1.634-.429 2.268.005.316.05.62.154.88.017.04.035.082.056.122A68.362 68.362 0 0 0 .08 15.198a.528.528 0 0 0 .157.72.504.504 0 0 0 .705-.16 67.606 67.606 0 0 1 2.158-3.26c.285.141.616.195.958.182.513-.02 1.098-.188 1.723-.49 1.25-.605 2.744-1.787 4.303-3.642l1.518-1.55a.528.528 0 0 0 0-.739l-.729-.744 1.311.209a.504.504 0 0 0 .443-.15c.222-.23.444-.46.663-.684.663-.68 1.292-1.325 1.763-1.892.314-.378.585-.752.754-1.107.163-.345.278-.773.112-1.188a.524.524 0 0 0-.112-.172ZM3.733 11.62C5.385 9.374 7.24 7.215 9.309 5.394l1.21 1.234-1.171 1.196a.526.526 0 0 0-.027.03c-1.5 1.789-2.891 2.867-3.977 3.393-.544.263-.99.378-1.324.39a1.282 1.282 0 0 1-.287-.018Zm6.769-7.22c1.31-1.028 2.7-1.914 4.172-2.6a6.85 6.85 0 0 1-.4.523c-.442.533-1.028 1.134-1.681 1.804l-.51.524-1.581-.25Zm3.346-3.357C9.594 3.147 6.045 6.8 3.149 10.678c.007-.464.121-1.086.37-1.806.533-1.535 1.65-3.415 3.455-4.976 1.807-1.561 3.746-2.36 5.31-2.68a7.97 7.97 0 0 1 1.564-.173Z" />
              </svg>
              <strong>&nbsp;PokéApi</strong>
            </a>
            <div className="d-flex align-items-center">
              <form onSubmit={onSearchSubmit} className="d-flex">
                <input
                  type="search"
                  name="valueSearch"
                  id=""
                  value={valueSearch}
                  onChange={onInputChange}
                  className="form-control me-2"
                  placeholder="Nombre de pokemon"
                />
                <button type="submit" className="btn btn-outline-light">
                  Buscar
                </button>
              </form>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
      <Outlet></Outlet>
    </div>
  );
};
