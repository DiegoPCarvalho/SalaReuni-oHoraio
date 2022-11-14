import React, {Component} from 'react';
import axios from 'axios';
import Url from './Url';


const banco = "Horarios";
const baseUrl = Url(banco);


const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: [],
}

export default class TercaTarde extends Component {
    
    state = { ...initialState }

    async componentWillMount(){
        const tabTerTarde = await axios(baseUrl).then(resp => resp.data)
          let dadosTerTarde = { dado: []}
 
             for(let i = 0; i < tabTerTarde.length; i++){
                 let dia = tabTerTarde[i].diaSemana;
                 let per = tabTerTarde[i].periodo;
         
                 if((dia === "Terça")&&(per === "Tarde")) {
                     dadosTerTarde.dado.push({
                         hora: tabTerTarde[i].hora,
                         solicitante: tabTerTarde[i].solicitante
                     })
                 }
            
        }
 
        return this.setState({ list: dadosTerTarde.dado })
 
     }


    renderTable() {
        return (
            <div className='table-responsive'>
                <h1 className='border rounded d-flex justify-content-center bg-secondary text-light'>Tarde</h1>
            <table className="table mt-4">
                <thead className='table-dark'>
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