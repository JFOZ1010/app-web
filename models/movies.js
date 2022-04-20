const msg = require("mongoose"); 

const moviesSchema = new msg.Schema({
    title:String, 
    director_id:String, 
    release_year:String, 
    actors:[], 
    votes:Number, 
    enable:Number,
    studios: []
}); 

msg.model("Movies", moviesSchema); 




