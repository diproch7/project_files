const express = require('express');
const app = express();
const routes = require('./routes.js');
const path = require('path');
app.use(express.static("public"));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

app.get('/', routes);
app.post('/register', routes);
app.get('/login', routes);
app.post('/login', routes);
app.get('/success', routes);
app.get('/logout', routes);
app.get('/examcenter', routes);
app.get('/upload',routes);
app.post('/addmsg', routes);
app.post('/add_question',routes);

const PORT = 3000;
app.listen(PORT, () => console.log("Server Started At Port", PORT));
