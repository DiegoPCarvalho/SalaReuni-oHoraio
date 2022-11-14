import React, { Component } from 'react';
import axios from 'axios';
import Main from '../template/Main';
import './CrudHorario.css';
import Url from '../Periodos/Url';
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import SolicitarAdmin from '../Modal/ArcodionSolicitacaoAdmin';


const headerProps = {
    icon: 'user-plus',
    title: 'Horários',
    subtitle: 'Cadastro de Horário: Incluir, Listar, Alterar, Excluir'
}

const banco = "Horarios";
const baseUrl = Url(banco);

const initialState = {
    horario: { periodo: '', hora: '', diaSemana: '', solicitante: '' },
    list: []
}

export default class CrudHorario extends Component {

    state = { ...initialState }

    componentWillMount() {
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
                this.setState({ horario: initialState.horario, list })
            })
    }

    getUpdateList(horario, add = true) {
        const list = this.state.list.filter(h => h.id !== horario.id)
        if (add) list.unshift(horario)
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
                <div className="row d-flex justify-content-end">
                    <div class="col-6 col-md-3 d-flex justify-content-end">
                        <button className='btn btn-danger' onClick={e => this.sair(e)}>
                            Sair
                        </button>
                    </div>
                </div>
                <div class="row mb-2">
                    <div className="col-12 d-flex justify-content-between">
                        <SolicitarAdmin />
                    </div>
                </div>
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
                <div className='row my-4'>
                    <div className="col-6 col-md-3">
                        <input type="text" name="" id="pesquisa" className='form-control' list='listaSemana' />
                        <datalist id="listaSemana">
                            <option value="Geral"></option>
                            <option value="Segunda"></option>
                            <option value="Terça"></option>
                            <option value="Quarta"></option>
                            <option value="Quinta"></option>
                            <option value="Sexta"></option>
                        </datalist>
                    </div>
                    <div className="col-6 col-md-3">
                        <button className="btn btn-dark text-light" onClick={(e) => this.pesquisar(e)}>
                            Pesquisar
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
                    <td>{horario.hora}</td>
                    <td>{horario.diaSemana}</td>
                    <td>{horario.solicitante}</td>
                    <td className='tam'>
                        <button className='btn btn-warning'
                            onClick={() => this.load(horario)}>
                            <i className="fa fa-pencil"></i>
                        </button>
                        <button className='btn btn-danger mx-2 ui button'
                            onClick={() => this.confirmar(horario)}>
                            <i className="fa fa-trash"></i>
                        </button>
                    </td>
                </tr>
            )
        })
    }

    load(horario) {
        this.setState({ horario })
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
                    label: "Sim",
                    className: "btn btn-danger",
                    onClick: () => this.remove(horario)
                },
                {
                    label: "Não",
                    className: "btn btn-secondary"
                }
            ]
        })

    }

    async pesquisar() {
        const pesquisa = document.getElementById("pesquisa").value;

        if (pesquisa == "Geral") {
            this.componentWillMount()
        }
        else if (pesquisa == "Segunda") {
            const tabSegunda = await axios(baseUrl).then(resp => resp.data)
            let dadosSegunda = { dado: [] }

            for (let i = 0; i < tabSegunda.length; i++) {
                let dia = tabSegunda[i].diaSemana;

                if (dia === "Segunda") {
                    dadosSegunda.dado.push({
                        id: tabSegunda[i].id,
                        periodo: tabSegunda[i].periodo,
                        hora: tabSegunda[i].hora,
                        diaSemana: tabSegunda[i].diaSemana,
                        solicitante: tabSegunda[i].solicitante
                    })
                }

            }

            return this.setState({ list: dadosSegunda.dado })

        } else if (pesquisa == "Terça") {
            const tabTerca = await axios(baseUrl).then(resp => resp.data)
            let dadosTerca = { dado: [] }

            for (let i = 0; i < tabTerca.length; i++) {
                let dia = tabTerca[i].diaSemana;

                if (dia === "Terça") {
                    dadosTerca.dado.push({
                        id: tabTerca[i].id,
                        periodo: tabTerca[i].periodo,
                        hora: tabTerca[i].hora,
                        diaSemana: tabTerca[i].diaSemana,
                        solicitante: tabTerca[i].solicitante
                    })
                }

            }

            return this.setState({ list: dadosTerca.dado })

        } else if (pesquisa == "Quarta") {
            const tabQuarta = await axios(baseUrl).then(resp => resp.data)
            let dadosQuarta = { dado: [] }

            for (let i = 0; i < tabQuarta.length; i++) {
                let dia = tabQuarta[i].diaSemana;

                if (dia === "Quarta") {
                    dadosQuarta.dado.push({
                        id: tabQuarta[i].id,
                        periodo: tabQuarta[i].periodo,
                        hora: tabQuarta[i].hora,
                        diaSemana: tabQuarta[i].diaSemana,
                        solicitante: tabQuarta[i].solicitante
                    })
                }

            }

            return this.setState({ list: dadosQuarta.dado })

        } else if (pesquisa == "Quinta") {
            const tabQuinta = await axios(baseUrl).then(resp => resp.data)
            let dadosQuinta = { dado: [] }

            for (let i = 0; i < tabQuinta.length; i++) {
                let dia = tabQuinta[i].diaSemana;

                if (dia === "Quinta") {
                    dadosQuinta.dado.push({
                        id: tabQuinta[i].id,
                        periodo: tabQuinta[i].periodo,
                        hora: tabQuinta[i].hora,
                        diaSemana: tabQuinta[i].diaSemana,
                        solicitante: tabQuinta[i].solicitante
                    })
                }

            }

            return this.setState({ list: dadosQuinta.dado })

        } else if (pesquisa == "Sexta") {
            const tabSexta = await axios(baseUrl).then(resp => resp.data)
            let dadosSexta = { dado: [] }

            for (let i = 0; i < tabSexta.length; i++) {
                let dia = tabSexta[i].diaSemana;

                if (dia === "Sexta") {
                    dadosSexta.dado.push({
                        id: tabSexta[i].id,
                        periodo: tabSexta[i].periodo,
                        hora: tabSexta[i].hora,
                        diaSemana: tabSexta[i].diaSemana,
                        solicitante: tabSexta[i].solicitante
                    })
                }

            }

            return this.setState({ list: dadosSexta.dado })
        }
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
