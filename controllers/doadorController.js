const Doadors = require('../models/doador');

async function createDoador(req, res) {
   try{
    const{
        name,
        email,
        telefone,
        cidade,
        estado,
        idade,
        periodo,
        status
    } = req.body;

    const doadorExists = await Doadors.findOne({email});

    if(doadorExists){
        return res.status(400).json({error: 'Doador já cadastrado'})
    }

    const newDoador = new Doadors({
        name,
        email,
        telefone,
        cidade,
        estado,
        idade,
        periodo, 
        status
    });

    await newDoador.save();

    return res.status(201).json(newDoador);
   }catch(err){
       return res.status(400).json({error: err.message});
   }
}

async function getDoador(req, res) {
    try{
        const doador = await Doadors.findById(req.params.id);
        if(!doador){
            return res.status(400).json({error: 'Doador não encontrado'});
        }
        return res.status(200).json(doador);
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err.message});
    }
}

async function getAllDoador(req, res) {
    try{
        const doador = await Doadors.find();
        return res.status(200).json(doador);
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err.message});
    }
}

async function updateDoador(req,res) {
    try{
        const{
            name,
            email,
            telefone,
            cidade,
            estado,
            idade,
            periodo
        } = req.body;
        const doador = await Doadors.findById(req.params.id);

        if(!doador){
            return res.status(400).json({error: 'Doador não encontrado'});
        }
        doador.name = name || doador.name;
        doador.email = email || doador.email;
        doador.telefone = telefone || doador.telefone;
        doador.cidade = cidade || doador.cidade;
        doador.estado = estado || doador.estado;
        doador.idade = idade || doador.idade;
        doador.periodo = periodo || doador.periodo;

        await doador.save();
        return res.status(200).json({message: 'Doador atualizado com sucesso'});
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err.message});
    }
}

async function deleteDoador(req, res) {
    try{
        const doador = await Doadors.findById(req.params.id);
        if(!doador){
            return res.status(400).json({error: 'Doador não encontrado'});
        }
        await Doadors.findByIdAndDelete(req.params.id);
        return res.status(200).json({message: 'Doador excluído com sucesso'});
    }catch(err){
        console.log(err);
        return res.status(400).json({error: err.message});
    }
}

module.exports = {createDoador, getDoador, getAllDoador, updateDoador, deleteDoador};