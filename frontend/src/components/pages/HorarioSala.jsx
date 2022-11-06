import React from "react";
import Main from '../template/Main';
import './HorarioSala.css'
import Segunda from '../Cards/Segunda';

const headerProps = {
    icon: 'sliders',
    title: 'Tabela de Horarios',
    subtitle: 'Escolha um Horário e agende com a Mona'
}

export default props =>
    <Main {...headerProps}>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-6">
                    <button className="btn btn-success d-flex justify-content-end">Solicitar</button>
                </div>
            </div>
            <div className="row bll">
                <div className="col-12 col-md-6">
                   <h1 className="d-flex justify-content-center">Segunda</h1>
                    <Segunda />
                </div>
            </div>
            <div className="row bll">
            <div className="col-12 col-md-6">
                    Terça
                </div>
            </div>
            <div className="row bll">
            <div className="col-12 col-md-6">
                    Quarta
                </div>
            </div>
            <div className="row bll">
            <div className="col-12 col-md-6">
                    Quinta
                </div>
            </div>
            <div className="row bll">
            <div className="col-12 col-md-6">
                    Sexta
                </div>
            </div>
        </div>
        {robo()}
    </Main>
    

    
    function robo() {
        setInterval(() => {
            window.location.href = 'http://192.168.1.227:3000/horarioSala'
        }, 600000);
    }
    