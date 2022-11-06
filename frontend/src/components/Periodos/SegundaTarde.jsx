import React, {Component} from 'react';
import axios from 'axios';

const baseUrl = 'http://192.168.1.227:5000/SegundaTarde';


const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: [],
}

export default class Segunda extends Component {
    
    state = { ...initialState }

    componentWillMount(){
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }


    renderTable() {
        return (
            <div>
                <h1 className='mx-5'>Tarde</h1>
            <table className="table mt-4 mx-5">
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