const msg = require("mongoose"); //esta var msg nos sirve para poder añadir mongoose, que es el que nos
// permitirá acceder a la BD de mongo. 

// conectarme a la BD: 
//la base de datos se expone como un servicio. 
msg.connect("mongodb://127.0.0.1:27017/BDMongo", (err, db)=>{
    if(err) throw err  + console.log("ERRORRRR ..."); //si se gesta un error en la BD. 
    console.log("Sucesfully Database Connected"); //de lo contrario meustre un mensaje indicando que ha sido exitosa la conexión. 
})
//connect(basedeDatos, maquina local (host), puerto, nombreBD, functions()); 

module.exports = msg;//se exporta el archivo bd.js de aquel que lo quiera cargar. 



