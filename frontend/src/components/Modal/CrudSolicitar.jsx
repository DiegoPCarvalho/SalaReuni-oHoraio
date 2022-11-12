import React, { Component } from 'react';
import axios from 'axios';

import Url from '../Periodos/Url';

const banco = "Solicitacao"
const baseUrl = Url(banco);

const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: []
}

export default class CrudSolicitacao extends Component {

    state = { ...initialState }

    componentWillMount() {
        axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    save() {
        const horario = this.state.horario
        const method = horario.id ? 'put' : 'post'
        const url = horario.id ? `${baseUrl}/${horario.id}` : baseUrl

        axios[method](url, horario)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ horario: initialState.horario, list })
            })
    }

    clear() {
        this.setState({ horario: initialState.horario })
    }

    getUpdateList(horario, add = true) {
        const list = this.state.list.filter(h => h.id !== horario.id)
        if (add) list.unshift(horario)
        return list
    }

    updateField(event) {
        const horario = { ...this.state.horario }
        horario[event.target.name] = event.target.value
        this.setState({ horario })
    }

    renderForm() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Periodo: </label>
                            <input type="text" className="form-control"
                                name="periodo" list="listaPeriodos"
                                value={this.state.horario.periodo}
                                onChange={e => this.updateField(e)}
                                placeholder="Selecione o periodo desejado ..."
                                id="periodo" />
                            <datalist id="listaPeriodos">
                                <option value="Manhã"></option>
                                <option value="Tarde"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Hora: </label>
                            <input type="text" className="form-control"
                                name="hora" list="listaHora"
                                value={this.state.horario.hora}
                                onChange={e => this.updateField(e)}
                                placeholder="Selecione a Hora desejado ..." />
                            <datalist id="listaHora">
                                <option value="08:00"></option>
                                <option value="08:30"></option>
                                <option value="09:00"></option>
                                <option value="09:30"></option>
                                <option value="10:00"></option>
                                <option value="10:30"></option>
                                <option value="11:00"></option>
                                <option value="11:30"></option>
                                <option value="12:00"></option>
                                <option value="12:30"></option>
                                <option value="13:00"></option>
                                <option value="14:00"></option>
                                <option value="14:30"></option>
                                <option value="15:00"></option>
                                <option value="15:30"></option>
                                <option value="16:00"></option>
                                <option value="16:30"></option>
                                <option value="17:00"></option>
                                <option value="17:30"></option>
                            </datalist>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Dia Semana:  </label>
                            <input type="text" className="form-control"
                                name="diaSemana" list="listaDiaSemana"
                                value={this.state.horario.diaSemana}
                                onChange={e => this.updateField(e)}
                                placeholder="Selecione o Dia desejado ..."
                                id="dia" />
                            <datalist id="listaDiaSemana">
                                <option value="Segunda"></option>
                                <option value="Terça"></option>
                                <option value="Quarta"></option>
                                <option value="Quinta"></option>
                                <option value="Sexta"></option>
                            </datalist>
                        </div>
                    </div>
                    <div className="col-12 col-md-6">
                        <label>Solicitante: </label>
                        <input type="text" className="form-control"
                            name="solicitante"
                            value={this.state.horario.solicitante}
                            onChange={e => this.updateField(e)}
                            placeholder="Digite o Solicitante ..." />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-end mt-2">
                        <button className="btn btn-success"
                            onClick={e => this.save(e)}>
                            Salvar
                        </button>

                        <button className="btn btn-secondary mx-2"
                            onClick={e => this.clear(e)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </div>
        )
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
                    <td>{horario.hora}</td>
                    <td>{horario.diaSemana}</td>
                    <td>{horario.solicitante}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                {this.renderForm()}
                {this.renderTable()}
            </div>
        )
    }
}