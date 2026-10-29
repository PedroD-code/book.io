'use strict';

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('livros', {
            id: {
                type: Sequelize.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false
            },
            titulo: {
                type: Sequelize.STRING,
                allowNull: false
            },
            lancamento: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            autor: {
                type: Sequelize.STRING,
                allowNull: false
            },
            capitulos: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            edicao: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            codigo_origem: {
                type: Sequelize.STRING(100),
                allowNull: false,
                unique: true
            },

        createdAt: {
        type: Sequelize.DATE,
        allowNull: false
            },
        updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
            }
        });
        
        
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('livros');
    }
};