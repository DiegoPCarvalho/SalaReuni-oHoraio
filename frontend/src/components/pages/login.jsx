import React from  'react';
import Main from '../template/Main';
import Logo from '../../assets/imgs/logo.png';
import './Login.css'

const headerProps = {
    icon: 'lock',
    title: 'Login',
    subtitle: 'Insira o Usuário e Senha para prosseguir'
}

export default props =>
    <Main {...headerProps}>
       <div className="container-fluid">
                <div className=" row d-flex justify-content-center">
                    <div className=" fundo col-6 d-flex justify-content-center flex-column text-light">
                    <div className="imagem">
                            <img src={Logo} alt=""/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Usuário: </label>
                            <input type="text" className="form-control" id="user" />
                        </div>
                        <div className="mb-3">
                            <label classNamme="form-label">Senha: </label>
                            <input type="password" className="form-control" id="senha" />
                        </div>
                        <div className="mb-3 d-flex justify-content-center btt">
                            <button className="btn btn-success" onClick={entrar}>Entrar</button>
                        </div>
                    </div>
                </div>
            </div>
    </Main>


    function entrar() {

        const usuario = document.getElementById("user").value
        const senha = document.getElementById("senha").value

        const db = {
            us1: 'Diego',
            sns1: 12345,
            us2: 'Mona',
            sns2: 78956
        }
       

        if(((usuario == db.us1) && (senha == db.sns1)) || ((usuario == db.us2) && (senha == db.sns2))){
            window.location.href = '/cadastroHorario'
            localStorage.estado = 1
        }else {
            alert('Usuário e Senha Inválidos !!! Tente Novamente')
        }
          
    }


   