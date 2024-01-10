const Sequelize = require("sequelize")
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_sequelize')

const models = require('../models')

const Author = require('../models/author')(sequelize, Sequelize.DataTypes)

const getArticlesByAuthorId = (req, res) => {
    console.log('hello')
    models.Author.findAll({
        where: {
            author_id: req.params.id
        },
        include: [{
            model: models.Article
        }],
    })
        .then(articles => {
            console.log(articles)
            return res.status(200).json({articles})
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
}

const getAuthors = (req, res) => {
    console.log('hello')
    models.Author.findAll()
        .then(authors => {
            console.log(authors)
            return res.status(200).json({authors})
        })
        .catch(error => {
            return res.status(500).send(error.message)
        })
}

module.exports = {
    getArticlesByAuthorId,
    getAuthors
}