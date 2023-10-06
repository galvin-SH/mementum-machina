require('dotenv').config();
// Include node modules and npm packages
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

// Include other modules
const routes = require('./routes');
const sess = require('./utils/session');
const helpers = require('./utils/helpers');
const sequelize = require('./utils/connection')

// Set up middleware
const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(session(sess));

app.use(routes);

async function start() {
    await sequelize.sync({ force: false });
    console.log('db is connected!')
    app.listen(PORT, () => {
        console.log(`App listening on port ${PORT}!`);
    });
}
start();