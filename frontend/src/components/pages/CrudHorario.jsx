import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';
import './CrudHorario.css';

const headerProps = {
    icon: 'user-plus',
    title: 'Horários',
    subtitle: 'Cadastro de Horário: Incluir, Listar, Alterar, Excluir'
}

const baseUrl = 'http://192.168.15.137:7000/Horarios';

const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: []
}

export default class CrudHorario extends Component {

    state = { ...initialState }

    componentWillMount(){
      axios(baseUrl).then(resp => {
            this.setState({ list: resp.data })
        })
    }

    clear() {
        this.setState({ horario: initialState.horario })
    }

    save() {
        const horario = this.state.horario
        const method = horario.id ? 'put' : 'post'
        const url = horario.id ? `${baseUrl}/${horario.id}` : baseUrl

        axios[method](url, horario)
            .then(resp => {
                const list = this.getUpdateList(resp.data)
                this.setState({ horario: initialState.horario, list})
            })
    }

    getUpdateList(horario, add = true) {
        const list = this.state.list.filter(h => h.id !== horario.id)
        if(add) list.unshift(horario)
        return list
    }

    sair() {
        if (localStorage.estado == '1') {
            window.location.href = '/login'
            localStorage.estado = 0;
        }
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
                    <div className="col-12 col-md-6 d-flex justify-content-end">
                        <button className='btn btn-danger' onClick={e => this.sair(e)}>
                            Sair
                        </button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <label>Periodo: </label>
                            <input type="text" className="form-control"
                                name="periodo"   list="listaPeriodos"
                                value={this.state.horario.periodo}
                                onChange={e => this.updateField(e)}
                                placeholder="Selecione o periodo desejado ..." />
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
                                name="hora"   list="listaHora"
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
                                name="diaSemana"   list="listaDiaSemana"
                                value={this.state.horario.diaSemana}
                                onChange={e => this.updateField(e)}
                                placeholder="Selecione o Dia desejado ..." />
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
                <thead>
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

    renderRows(){
        return this.state.list.map(horario => {
            return (
                <tr key={horario.id}>
                    <td>{horario.periodo}</td>
                    <td>{horario.hora}</td>
                    <td>{horario.diaSemana}</td>
                    <td>{horario.solicitante}</td>
                    <td className='tam'>
                        <button className='btn btn-warning'
                            onClick={() => this.load(horario)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className='btn btn-danger mx-2'
                            onClick={() => this.remove(horario)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    load(horario){
        this.setState({ horario})   
    }

    remove(horario){
        axios.delete(`${baseUrl}/${horario.id}`).then(resp => {
            const list = this.getUpdateList(horario, false)
            this.setState({ list })
        })
    }

    render() {
        return (
            <Main {...headerProps}>
                {this.renderForm()}
                {this.renderTable()}
            </Main>
        )
    }
} 
