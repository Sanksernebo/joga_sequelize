const express = require("express")
const app = express();

//parse requests of content type - application/json
app.use(express.json());
// Parse requests of content type- application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true}));

// connect to database
const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://Sanks:qwerty@localhost:3306/joga_sequelize')

//testing connection
sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to the database");
    })
    .catch(err => {
        console.error('Unable to connect to the database', err)
    });

// using routes and controllers
const articleRouter = require('./routes/article');
const authorRouter = require('./routes/author');
app.use('/', articleRouter);

app.use('/', authorRouter);

app.use('/article', articleRouter)
app.use('/admin/article', articleRouter)

// simple route
app.get("/", (req,res) => {
    res.json({message: "Welcome to sequelize application."});
    });

// listen requests
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});