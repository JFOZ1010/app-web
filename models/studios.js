const msg = require("mongoose"); 

const studiosSchema = msg.Schema({
    name:String, 
    year_founded:String, 
    qty_movies:Number, 
    headquartes:String
}); 

msg.model("Studios", studiosSchema); 

