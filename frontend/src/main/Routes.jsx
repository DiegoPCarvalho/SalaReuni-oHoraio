import React from "react";
import { Routes, Route } from "react-router-dom";

//componentes
import Home from '../components/Home/Home';
import HorarioSala from '../components/pages/HorarioSala';
import CrudHorario from '../components/pages/CrudHorario';

export default props => (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/horarioSala" element={<HorarioSala />} />
        <Route path="/cadastroHorario" element={<CrudHorario />} />
        <Route path="*" element={<Home />} />
    </Routes>
);

