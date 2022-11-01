import React from  'react';
import Main from '../template/Main';
import FormularioLogin from '../cards/formularioLogin';

const headerProps = {
    icon: 'lock',
    title: 'Login',
    subtitle: 'Insira o Usuário e Senha para prosseguir'
}

export default props =>
    <Main {...headerProps}>
        <FormularioLogin />
        {/* <button onClick={entrar}>
            entrar
        </button> */}

    </Main>


    // function entrar() {
    //     if(localStorage.estado == '0'){
    //         window.location.href = '/cadastroHorario'
    //         localStorage.estado = 1
    //         localStorage.logado = 1
    //     }else if(localStorage.estado == '1'){
    //         window.location.href = '/cadastroHorario'
    //     }
    // }


   