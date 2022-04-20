const express = require("express"); 
const mgdb = require("mongoose"); 

const db = require("../models/db"),
        user = require("../models/user"); 


//Routes. 

const router = express.Router();

router.use(express.json())
router.use(express.urlencoded({extended:true}))

//selección para poder obtener todos los registros. 
router.route("/").get((req, resp, next)=>{

        // db.Collection_name.find (criterios_selección, proyección)
        mgdb.model("User").find({}, (err, users) =>{
            if(err) throw err; 
            resp.json(users);
        })
// metodo para poder añadir nuevos registros, completamente nuevos a la Base de Datos. 
}).post(function(req, resp){
        let name = req.body.name;
        let lastName = req.body.lastName;
        let badge = req.body.badge; 

        mgdb.model("User").create({
                name: name,
                lastName: lastName,
                badge: badge
        }, (err, user)=> {
                if(err) resp.json({"message ": "user does not saved "}); 
                console.log("Saved ", user);        
                resp.json(user); 
        })
});
//Metodos especificos para los usuarios para poder obtener: 
// * Registros especificos de usuarios. (GET)
// * Actualizar registros especificos de usuarios. (PUT)
router.route("/:id")
        .get((req, resp)=>{
                mgdb.model("User").findById(req.params.id, (err, user)=>{
                        if(err){
                                console.log("Not Found!");
                                resp.status(404)
                                resp.json({
                                        "Message": "Does not save"
                                })
                        }else{
                                console.log("Retrieving id", req.params.id); 
                                resp.json(user); 
                        }
                })
        })
        .put(function(req, resp){
                let name = req.body.name;
                let lastName = req.body.lastName; 
                let badge = req.body.badge; 
                mgdb.model("User").findById(req.params.id, (err, user)=>{
                        if(err){
                                console.log("There was a problem ", err);
                                resp.status(500);
                                resp.json({"Message": err}); 
                        }else{
                                user.updateOne({
                                        "name": name,
                                        "lastName": lastName,
                                        "badge": badge
                                }, (err, userid)=>{
                                        if(err){
                                                console.log("There was a problem", err); 
                                        }else{ 
                                        
                                                resp.json(user); 

                                        }
                                })
                        }
                })
        })
        //este es el metodo para eliminar registros de la BASE DE DATOS, y este es todo EL CRUD. 
        .delete(function(req, resp){
                mgdb.model("User").findById(req.params.id, (err, user)=>{
                        if(err){
                        console.log("Does not Delete the Register", err); 
                        resp.status(500);
                        resp.json({
                                "Message": "There Was a problem"
                        })        
                        }else{
                                user.remove((err, user)=>{
                                        if(err) console.log("Doesn`t remove ");
                                        resp.json({
                                                "Message": "deleted Sucesfully",
                                                "user": user
                                        })
                                });
                        }        
                })
        })

module.exports = router; 
