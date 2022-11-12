import React from 'react';
import QuartaManha from '../Periodos/QuartaManha';
import QuartaTarde from '../Periodos/QuartaTarde';
import './TodosDias.css';




export default props =>
    <div className='semana'>
        <QuartaManha />
        <QuartaTarde />
    </div>
