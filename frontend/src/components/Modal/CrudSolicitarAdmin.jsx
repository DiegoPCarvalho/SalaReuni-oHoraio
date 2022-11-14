import React, { Component } from "react";
import axios from 'axios';
import Url from '../Periodos/Url';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";


const banco = "Solicitacao"
const baseUrl = Url(banco);

const initialState = {
    horario: { periodo: '', de: '', ate: '', diaSemana: '', solicitante: '' },
    list: []
}

export default class CrudSolicitarAdmin extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    getUpdateList(horario, add = true) {
        const list = this.state.list.filter(h => h.id !== horario.id)
        if (add) list.unshift(horario)
        return list
    }

    renderTable() {
        return (
            <table className="table mt-4">
                <thead className='table-dark'>
                    <tr>
                        <th>Periodo</th>
                        <th>Hora</th>
                        <th>Dia</th>
                        <th>Solicitante</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRows()}
                </tbody>
            </table>
        )
    }

    renderRows() {
        return this.state.list.map(horario => {
            return (
                <tr key={horario.id}>
                    <td className='table-primary'>{horario.periodo}</td>
                    <td>{`${horario.de} - ${horario.ate}`}</td>
                    <td>{horario.diaSemana}</td>
                    <td>{horario.solicitante}</td>
                    <td className='tam'>
                        <button className='btn btn-danger mx-2 ui button'
                            onClick={() => this.confirmar(horario)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    remove(horario) {
        axios.delete(`${baseUrl}/${horario.id}`).then(resp => {
            const list = this.getUpdateList(horario, false)
            this.setState({ list })
        })
    }

    confirmar(horario) {
        confirmAlert({
            title: "Deletar",
            message: "Deseja Realmente Deletar?",
            buttons: [
                {
                    label: "Sim" ,
                    className: "btn btn-danger",
                    onClick: () => this.remove(horario)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ],
            closeOnEscape: true
           })
  
    }

    render() {
        return (
            <div>
                {this.renderTable()}
            </div>
        )
    }
}