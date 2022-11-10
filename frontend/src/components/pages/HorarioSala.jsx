import React from "react";
import Main from '../template/Main';
import './HorarioSala.css'
// import ColapseSegunda from "../Colapses/ColapseSegunda";
// import ColapseTerca from "../Colapses/ColapseTerca"
import ArcDias from '../Arcodion/ArcDias';

const headerProps = {
    icon: 'sliders',
    title: 'Tabela de Horarios',
    subtitle: 'Escolha um Horário e agende com a Mona'
}

export default props =>
    <Main {...headerProps}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md6 bll mb-3">
                   Botão
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <ArcDias />
                </div>
            </div>
        </div>
        {robo()}
    </Main>
    

    
    function robo() {
        setInterval(() => {
            window.location.href = '/horarioSala'
        }, 600000);
    }
    

    