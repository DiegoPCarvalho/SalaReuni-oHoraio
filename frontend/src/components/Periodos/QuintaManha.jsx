import React, {Component} from 'react';
import axios from 'axios';
import Url from './Url';

const banco = "Horarios";
const baseUrl = Url(banco);

const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: []
}

export default class QuintaManha extends Component {
    
    state = { ...initialState }

    async componentWillMount(){
       const tabQuiManha = await axios(baseUrl).then(resp => resp.data)
         let dadosQuiManha = { dado: []}

            for(let i = 0; i < tabQuiManha.length; i++){
                let dia = tabQuiManha[i].diaSemana;
                let per = tabQuiManha[i].periodo;
        
                if((dia === "Quinta")&&(per === "Manhã")) {
                    dadosQuiManha.dado.push({
                        hora: tabQuiManha[i].hora,
                        solicitante: tabQuiManha[i].solicitante
                    })
                }
           
       }

       return this.setState({ list: dadosQuiManha.dado })

    }

    renderTable() {
        return (
            <div className='table-responsive'>
                <h1 className='border rounded d-flex justify-content-center bg-secondary text-light'>Manhã</h1>
            <table className="table mt-4">
                <thead className="table-dark">
                    <tr>
                        <th>Hora</th>
                        <th>Solicitante</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        </div>
        )
    }


    renderRows(){
        return this.state.list.map(horario => {
                return (
                        <tr key={horario.id}>
                            <td className='table-success'>{horario.hora}</td>
                            <td className='table-light'>{horario.solicitante}</td>
                        </tr>
                    )
        })
    }


    render(){
        return (
            <div>
                {this.renderTable()}
            </div>
        )
    }

    
}