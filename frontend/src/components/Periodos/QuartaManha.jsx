import React, {Component} from 'react';
import axios from 'axios';
import Url from './Url';


const banco = "Horarios";
const baseUrl = Url(banco);

const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: []
}

export default class QuartaManha extends Component {
    
    state = { ...initialState }

    async componentWillMount(){
       const tabQuaManha = await axios(baseUrl).then(resp => resp.data)
         let dadosQuaManha = { dado: []}

            for(let i = 0; i < tabQuaManha.length; i++){
                let dia = tabQuaManha[i].diaSemana;
                let per = tabQuaManha[i].periodo;
        
                if((dia === "Quarta")&&(per === "Manhã")) {
                    dadosQuaManha.dado.push({
                        hora: tabQuaManha[i].hora,
                        solicitante: tabQuaManha[i].solicitante
                    })
                }
           
       }

       return this.setState({ list: dadosQuaManha.dado })

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