import React from "react";
import Main from '../template/Main';


export default props =>
    <Main icon="home" title="Inicio"
        subtitle="Sala de Reunião">
        <div className='display-4'>
            Bem Vindo
        </div>
        <hr />
        <p className='mb-0'> Sistema para agendar os horários da Sala de Reunião </p>
    </Main>

