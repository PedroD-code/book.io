const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Livro = sequelize.define("Livro",{
    id:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    titulo:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: { notEmpty: true}
    },
    lancamento:{
        type:DataTypes.INTEGER,
        allowNull:false,
        validate: { isInt: true, min: 1, max:new Date().getFullYear()}
    },
    autor:{
        type:DataTypes.STRING,
        allowNull:false,
        validate: { notEmpty: true }
    },
    capitulos:{
        type:DataTypes.INTEGER,
        allowNull:true,
        validate: { isInt: true, min: 1 }
    },
    edicao:{
        type:DataTypes.INTEGER,
        allowNull:true,
        validate: { isInt: true, min: 1}
    },
     codigo_origem: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: { notEmpty: true }
    }
}, {
    tableName: "livros"
});

module.exports = Livro;