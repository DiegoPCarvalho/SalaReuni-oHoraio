import React, {Component} from 'react';
import axios from 'axios';

const baseUrl = 'http://192.168.15.80:5000/SegundaManha';

const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: [],
}

export default class SegundaManha extends Component {
    
    state = { ...initialState }

    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    renderTable() {
        return (
            <div>
                <h1>Manhã</h1>
            <table className="table mt-4">
                <thead>
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
                            <td>{horario.hora}</td>
                            <td>{horario.solicitante}</td>
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