import React from "react";
import Main from '../template/Main';
import './HorarioSala.css'
import ArcDias from '../Arcodion/ArcDias';
import Solicitacao from '../Modal/ModalSolicitar';

const headerProps = {
    icon: 'sliders',
    title: 'Tabela de Horarios',
    subtitle: 'Escolha um Horário e agende com a Mona'
}

export default props =>
    <Main {...headerProps}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md6 mb-3">
                  <Solicitacao />
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
        }, 60000);
    }
    

    