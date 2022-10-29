import React from "react";
import Main from '../template/Main';

const headerProps = {
    icon: 'sliders',
    title: 'Tabela de Horarios',
    subtitle: 'Escolha um Horário e agende com a Mona'
}

export default props =>
    <Main {...headerProps}>
        Horarios
    </Main>
    