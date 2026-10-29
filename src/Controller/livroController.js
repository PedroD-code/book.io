const Livro = require('../Models/livros')
const axios = require('axios')
const LIMITE = 20;

exports.listar = async (req, res) => {
    try {
       const paginaInformada = req.query.pagina == undefined ? '1' : req.query.pagina;
       
       const inteiroPostivo = valor =>
          typeof valor === 'string' && /^\d+$/.test(valor) &&
          Number.isSafeInteger(Number(valor)) && Number(valor) > 0;

        if(!inteiroPostivo(paginaInformada)) {
            return res.status(400).json({
                error: "O parâmetro 'pagina' deve ser um inteiro possitivo"
            });
        }
        
        const pagina = Number(paginaInformada);
        const offset = (pagina - 1) * LIMITE;

        if (!Number.isSafeInteger(offset)) {
            return res.status(400).json({
                error: "O parâmetro 'pagina' está fora do intervalo permitido"  
            });
        }
        const { rows: livros, count: total } = await Livro.findAndCountAll({
            limit: LIMITE,
            offset,
            order: [['id', 'ASC']]
        });

        return res.status(200).json({
            livros,
            total,
            pagina,
            limite: LIMITE,
            totalPaginas: Math.ceil(total / LIMITE)
        });
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao buscar livro"
        });
    }

};

exports.buscar = async (req, res) => {
    try {

        const livroId = Number(req.params.id);

        const livro = await Livro.findByPk(livroId);

        if (!livro) {
            return res.status(404).json({
                error: "Livro não encontrado"
            });
        }

        return res.status(200).json(livro);

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            error: "Erro ao buscar o livro"
        });
    }
};