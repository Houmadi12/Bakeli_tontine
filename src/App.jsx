import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Connexion from "./pages/Connexion";
import ErrorPage from "./pages/Erro-page";
import Acceuil from "./pages/Accueil";
import Inscription from "./pages/Inscription";
import Utilisateurs from "./pages/Utilisateurs";
import Cotisations from "./pages/Cotisation";
import ParametreG from "./pages/ParametreG";
import UtilisateursP from "./pages/UtilisateursP";
import Archive from "./pages/Archive";
import BlocPage from "./pages/BlocPage";

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Connexion />} />
          <Route path="*" element={<ErrorPage />} />
          <Route path="/acceuil" element={<Acceuil />} />
          <Route path="/utilisateurs" element={<Utilisateurs />} />
          <Route path="/cotisations" element={<Cotisations />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/parametre" element={<ParametreG />} />
          <Route path="/utilisateurParametre" element={<UtilisateursP />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/Bloqué" element={<BlocPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
