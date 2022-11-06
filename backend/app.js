const express = require('express');
const app = express();
const axios = require('axios');
const port = 5000;
const cors = require('cors');

app.use(cors());

const baseUrl = 'http://192.168.1.227:7000/Horarios';


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



app.listen(port, () =>{
    try{
        console.log('Servidor Online !!!')
    }catch(error){
        console.log("Erro : " + error)
    }
})