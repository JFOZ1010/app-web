const msg = require("mongoose"); 

const personsSchema = new msg.Schema({
    first_name:String, 
    second_name:String, 
    last_name:String, 
    birth_day:String
}); 

msg.model("Persons", personsSchema); 


