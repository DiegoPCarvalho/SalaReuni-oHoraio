import React from 'react';
import TercaManha from '../Periodos/TercaManha';
import TercaTarde from '../Periodos/TercaTarde';
import './TodosDias.css';




export default props =>
    <div className='semana'>
        <TercaManha />
        <TercaTarde />
    </div>


