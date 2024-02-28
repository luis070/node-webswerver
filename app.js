
// const http = require ('http')

// http.createServer( (req, res ) => {
//     res.write('hola mundo  esta funcionando');
//     res.end();

// })
// .listen(8080);

// console.log('escucha el puerto -- ', 8080);


// -----------------------

require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT;



const hbs = require('hbs');

//handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// servir contenido estatico
app.use( express.static('public'));


// este aparto no se ejecutya porque el campo statico porque lo llamas ya no ejecuta esta lina por se pone en comentario
// app.get('/', function (req, res) {
//   res.send('Hello World');
// })


//es es para el public 2
// app.get('/hijos',  (req, res) => {
//   res.send('hola mundo en su respectiva ruta');
// })
app.get('/', (req,res) => {
  // res.send('hola mundo');
  res.render('home',{
    nombre:'luis cano',
    titulo: 'curso de node'
  })
})
app.get('/generic', (req,res) => {
  // res.sendFile(__dirname + '/public/generic.html');
  res.render('generic',{
    nombre:'luis cano',
    titulo: 'curso de node'
  })
})
app.get('/elements', (req,res) => {
  res.render('elements',{
    nombre:'luis cano',
    titulo: 'curso de node'
  })
  // res.sendFile(__dirname + '/public/elements.html');
})

app.listen(port, () => {
  console.log(`example app listening at http://localhost:${port}`);
})