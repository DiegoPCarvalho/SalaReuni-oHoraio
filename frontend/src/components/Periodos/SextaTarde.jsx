import React, {Component} from 'react';
import axios from 'axios';
import Url from './Url';


const banco = "Horarios";
const baseUrl = Url(banco);

const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: [],
}

export default class SegundaTarde extends Component {
    
    state = { ...initialState }

    async componentWillMount(){
        const tabSexTarde = await axios(baseUrl).then(resp => resp.data)
          let dadosSexTarde = { dado: []}
 
             for(let i = 0; i < tabSexTarde.length; i++){
                 let dia = tabSexTarde[i].diaSemana;
                 let per = tabSexTarde[i].periodo;
         
                 if((dia === "Sexta")&&(per === "Tarde")) {
                     dadosSexTarde.dado.push({
                         hora: tabSexTarde[i].hora,
                         solicitante: tabSexTarde[i].solicitante
                     })
                 }
            
        }
 
        return this.setState({ list: dadosSexTarde.dado })
 
     }

    renderTable() {
        return (
            <div className='table-responsive'>
                <h1 className='border rounded d-flex justify-content-center bg-secondary text-light'>Tarde</h1>
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
                            <td className='table-primary'>{horario.hora}</td>
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