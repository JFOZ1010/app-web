const msg = require("mongoose"); 

const userSchema = new msg.Schema({
    name: String,
    lastName: String, 
    badge: Number
});

//un esquema es una representación de los atributos, y del tipo de datos que tienen los atributos y que
//guardaré en mi BD, por ejemplo un user tiene un nombre (name) pero también un tipo de datos (String).

msg.model("User", userSchema); 
