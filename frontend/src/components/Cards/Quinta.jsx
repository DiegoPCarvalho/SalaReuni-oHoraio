import React from 'react';
import QuintaManha from '../Periodos/QuintaManha';
import QuintaTarde from '../Periodos/QuintaTarde';
import './TodosDias.css';




export default props =>
    <div className='semana'>
        <QuintaManha />
        <QuintaTarde />
    </div>
