import React, {Component} from 'react';
import axios from 'axios';
import Url from './Url';

const banco = "Horarios";
const baseUrl = Url(banco);

const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: [],
}

export default class TercaManha extends Component {
    
    state = { ...initialState }

    async componentWillMount(){
        const tabTerManha = await axios(baseUrl).then(resp => resp.data)
          let dadosTerManha = { dado: []}
 
             for(let i = 0; i < tabTerManha.length; i++){
                 let dia = tabTerManha[i].diaSemana;
                 let per = tabTerManha[i].periodo;
         
                 if((dia === "Terça")&&(per === "Manhã")) {
                     dadosTerManha.dado.push({
                         hora: tabTerManha[i].hora,
                         solicitante: tabTerManha[i].solicitante
                     })
                 }
            
        }
 
        return this.setState({ list: dadosTerManha.dado })
 
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