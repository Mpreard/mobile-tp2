import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentification from '../../../views/authentification/Authentification';

function Rooter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Authentification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Rooter;