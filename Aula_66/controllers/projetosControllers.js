const projetosServices = require("../services/projetosServices");

async function getAll(req, res, next) {    
    try {
        const projetos = await projetosServices.getProjetos();

        res.json(projetos);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function getOne(req, res, next) {
    try {        
        const projetos = await projetosServices.getUmProjeto(req.params.id);

        res.json(projetos);
    } catch (err) { 
        console.log(err);       
        next(err);
    }
}

async function create(req, res, next) {
    try {
        const usuario = req.body;

        const novoProjeto = await projetosServices.createUsuario(usuario);

        res.status(201).json(novoProjeto);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

async function update(req, res, next) {
    try {
        const usuario = req.body;

        const usuarioAtualizado = await projetosServices.updateUsuario(req.params.id, usuario);

        res.json(usuarioAtualizado);
    } catch (err) {
        console.log(err);
        next(err);
    }
}

module.exports = {
    getAll,
    getOne,
    create,
    update
};