import React, {Component} from 'react';
import axios from 'axios';


const baseUrl = 'http://192.168.15.137:5000/SegundaTarde';


const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: [],
}

export default class SegundaTarde extends Component {
    
    state = { ...initialState }

    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
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
                            <td className='table-warning'>{horario.hora}</td>
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