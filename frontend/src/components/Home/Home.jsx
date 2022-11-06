import React from "react";
import Main from '../template/Main';
import Fotos from '../Cards/Fotos';



export default props => 
    <Main icon="home" title="Inicio"
        subtitle="Sala de Reunião">
        <div className='display-4'>
            Bem Vindo
        </div>
        <hr />
        <p className='mb-0'> Agendamento de Horários Sala de Reunião </p>
        <hr />
            <div>
                <Fotos />
            </div>
    </Main>
