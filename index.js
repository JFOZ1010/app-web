// EXPONIENDO UN MICROSERVICIO PART #1. 

const express = require('express') //aqui estamos importando express. 
const app = express(); 

const personsRoutes = require("./routes/persons");
const moviesRoutes = require("./routes/movies"); 
const studiosRoutes = require("./routes/studios"); 

app.use("/persons", personsRoutes); //es para escribir o nombrar los endpoints o servicios que va a tener mi servicio web. 
app.use("/movies", moviesRoutes); 
app.use("/studios",studiosRoutes); 


/**
 * Autor: 
 * purpose: Ejecutar este codigo y abrirlo en puerto para poder abrirlo en la Web. 
 */

const server = app.listen(3000, ()=>{
    let host = server.address().address; 
    let port = server.address().port;
    console.log("App-WebReact listening http://", host, port); 
})


/*  En el caso de que alguien solicite la raiz de mi servicio,
    ¿Que debo hacer? , pues bueno  muy simple, para eso caso lo que se podría proceder a hacer
    es crea la ruta raiz, añadiendo una function anonima que haga referencia al request y respond
    de la aplicación en la cual se enviará o mostrará un mensaje si un usuario hace tal solicitación. 
 */

//-----------------------------------------------------------------------------------------------------------
/*
app.use("/", (req, resp)=> {
    resp.json({
        "gretting":"Hola!"
    }); 
    //resp.send("<marquee>Hola, hiciste la solicitud de raiz.</marquee>")
});
*/

/**
 * Autor: JFOZ
 * purpose: responder al endpoint de usuarios. 
 * 
 */

/*
app.use("/users", (req, resp) => {
    resp.json({data:[
        {"name ": "Felipe ", "Last": "Osorio", "badge": 129291}, 
        {"name ": "Juan ", "Last": "Zapata", "badge": 939322}, 
    ]
    }) //una posible respuesta al request basandose en u archivo .json
    //es decir cuando se haga una solicitud, yo le entregare a mi usuario de mi endpoint, 
    //una estructura data .json que es un arreglo. 
})
*/
//-----------------------------------------------------------------------------------------------------------

//const userRoutes = require("./routes/index"); 
//app.use("/users", userRoutes); //app use es para escribir o nombrar los endpoints o servicios que va a tener mi servicio web.

