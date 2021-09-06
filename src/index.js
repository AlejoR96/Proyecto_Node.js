const express = require('express');
const app = express();
const path = require('path');


// Settings
app.set('port', 4000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middlewares

// Routes
app.get('/', (req,res)=>{

 res.render('index');

});

// Static files

// Escuchando el puerto por el servidor 
app.listen(app.get('port'),() =>{
    console.log('Server on port',app.get('port'));
});