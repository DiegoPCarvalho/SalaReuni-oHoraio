import React from "react";
import Main from '../template/Main';
import Fotos from '../Cards/Fotos';



export default props => 
    <Main icon="home" title="Inicio"
        subtitle="Sala de Reunião">
        <div className='h1 d-flex justify-content-center bg-success text-light rounded'>
            Bem Vindo 
        </div>
        <hr />
            <div>
                <Fotos />
            </div>
    </Main>
