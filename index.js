//!dotenv
require('dotenv').config();

//~import modules
const express = require('express'),
    app = express(),
    router = require('./server/router'),
    errorController = require('./server/error');
//~data locals
    
//~body parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//~statics
app.use('/', express.static(__dirname + '/front/public'));
//~motor
app.set('view engine', 'ejs');
app.set('views', __dirname + '/front/views');

//*middlewares
app.use(router);

//*error
app.use(errorController._404);

//*launch app
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Running server on http://localhost:${PORT}`);
})