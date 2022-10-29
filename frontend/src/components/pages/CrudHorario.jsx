import React, {Component} from 'react';
import Main from '../template/Main';

const headerProps = {
    icon: 'user-plus',
    title: 'Horários',
    subtitle: 'Cadastro de Horário: Incluir, Listar, Alterar, Excluir'
}

export default class CrudHorario extends Component {
    render() {
        return (
            <Main {...headerProps}>
                Usuário
            </Main>
        )
    }
} 
