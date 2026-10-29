const Livro = require('../Models/livros')
const axios = require('axios')

exports.registrar = async (req, res) => {
    try {
        const registro = await Livro.create(req.body);

        return res.status(201).json(registro);
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao registrar livro"
        })
    }
}