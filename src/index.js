
import express from 'express';
import hbs from 'hbs';
import dotenv from 'dotenv'
import path from "path";
dotenv.config()

const app = express();
const PORT = process.env.PORT;

// Servir contenido estatico  configuracion de handelbars
// app.set('views', path.join(__dirname)) si cambio la carptea views 

// === HANDLEBAR =================================================
app.set('view engine', 'hbs') 
    hbs.registerPartials(path.join(__dirname, '../views/partials'), function (err) {
})


// servir contenido static
//app.use(express.static('public'))  
app.use(express.static(path.join(__dirname, '../public'))) 
// al tener Middleware aqui no se ejecuta la raiz esta por encima de las routes busca index
// al pasar yo al hanldebars solo mi css y js va a ser documentos estaticos  por eso no puedeo hacer src fuera de esos  estaticos por html
  
app.get('/',(req,res) => {  // renderizamos html CONTROLADOR
    res.render('home', {
        name: 'Miguel Angel Camacho',
        title: 'Curso de Node'
    });
})

// CLASE DE RENDER STATIC FILES
// app.get('/generic',(req,res) => {
//     res.sendFile( __dirname + '/public/templates/generic.html'); //sirvo archivos html sin la extension ya que ttengo el path concatendo con la ruta donde se sirve
// })

app.get('/generic',(req,res) => {
    res.render('generic', {
        name: 'Miguel Angel Camacho',
        title: 'Curso de Node'
    });
})

app.get('/elements',(req,res) => {
    res.render('elements', {
        name: 'Miguel Angel Camacho',
        title: 'Curso de Node'
    });
})

app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname, '../public/templates/404.html'));    
})


  
app.listen(PORT,() => {
    console.log(`Running on PORT ${PORT}`);
})