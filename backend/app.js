const express = require('express');
const app = express();
const axios = require('axios');
const port = 5000;
const cors = require('cors');

app.use(cors());

const baseUrl = 'http://192.168.15.137:7000/Horarios';


app.get('/SegundaManha', async(req, res) => {

    const respSegManha = await axios(baseUrl)
    const tabSegManha = respSegManha.data

    let dadosSegManha = { dado: []}

    for(let i = 0; i < tabSegManha.length; i++){
        let dia = tabSegManha[i].diaSemana;
        let per = tabSegManha[i].periodo;

        if((dia === "Segunda")&&(per === "Manhã")) {
            dadosSegManha.dado.push({
                hora: tabSegManha[i].hora,
                solicitante: tabSegManha[i].solicitante
            })
        }
    }

    res.json(dadosSegManha.dado)
})


app.get('/SegundaTarde', async(req, res) => {

    const respSegTarde = await axios(baseUrl)
    const tabSegTarde = respSegTarde.data

    let dadosSegTarde = { dado: []}

    for(let i = 0; i < tabSegTarde.length; i++){
        let diaSegTarde = tabSegTarde[i].diaSemana;
        let perSegTarde = tabSegTarde[i].periodo;

        if((diaSegTarde === "Segunda")&&(perSegTarde === "Tarde")) {
            dadosSegTarde.dado.push({
                hora: tabSegTarde[i].hora,
                solicitante: tabSegTarde[i].solicitante
            })
        }
    }

    res.json(dadosSegTarde.dado)
})

app.get('/TercaManha', async(req, res) => {

    const respTerManha = await axios(baseUrl)
    const tabTerManha = respTerManha.data

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

    res.json(dadosTerManha.dado)
})

app.get('/TercaTarde', async(req, res) => {

    const respTerTarde = await axios(baseUrl)
    const tabTerTarde = respTerTarde.data

    let dadosTerTarde = { dado: []}

    for(let i = 0; i < tabTerTarde.length; i++){
        let diaSegTarde = tabTerTarde[i].diaSemana;
        let perSegTarde = tabTerTarde[i].periodo;

        if((diaSegTarde === "Terça")&&(perSegTarde === "Tarde")) {
            dadosTerTarde.dado.push({
                hora: tabTerTarde[i].hora,
                solicitante: tabTerTarde[i].solicitante
            })
        }
    }

    res.json(dadosTerTarde.dado)
})

app.listen(port, () =>{
    try{
        console.log('Servidor Online !!!')
    }catch(error){
        console.log("Erro : " + error)
    }
})