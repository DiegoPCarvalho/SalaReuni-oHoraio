import React from 'react';
import SegundaManha from '../Periodos/SegundaManha';
import SegundaTarde from '../Periodos/SegundaTarde';


export default props =>
    <div className='d-flex flex-row justify-content-between'>
        <SegundaManha />
        <SegundaTarde />
    </div>