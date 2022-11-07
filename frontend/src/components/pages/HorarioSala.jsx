import React from "react";
import Main from '../template/Main';
import './HorarioSala.css'
import ColapseSegunda from "../Colapses/ColapseSegunda";
import ColapseTerca from "../Colapses/ColapseTerca"

const headerProps = {
    icon: 'sliders',
    title: 'Tabela de Horarios',
    subtitle: 'Escolha um Horário e agende com a Mona'
}

export default props =>
    <Main {...headerProps}>
        <ColapseSegunda />
        <ColapseTerca />
        {robo()}
    </Main>
    

    
    function robo() {
        setInterval(() => {
            window.location.href = '/horarioSala'
        }, 600000);
    }
    

    