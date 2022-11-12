import React from 'react';
import SextaManha from '../Periodos/SextaManha';
import SextaTarde from '../Periodos/SextaTarde';
import './TodosDias.css';




export default props =>
    <div className='semana'>
        <SextaManha />
        <SextaTarde />
    </div>
