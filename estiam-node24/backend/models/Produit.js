const { DataTypes } = require('sequelize');
const sequelize = require('../config');

const Produit = sequelize.define('Produit', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    quantite: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    statut: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Produit;
