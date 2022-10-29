import './Nav.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default props => 
    <aside className="menu-area">
       <nav className='menu'>
            <Link to="/">
                <i clLinkssName='fa fa-home fa-solid'></i> Inicio
            </Link>
            <Link to="/horarioSala">
                <i className=" fa fa-solid fa-sharp fa-sliders"></i> Horários
            </Link>
            <Link to="/cadastroHorario">
                <i className='fa fa-user-plus fa-solid fa-sharp'></i> Cadastrar Horario
            </Link>
       </nav>
    </aside>
