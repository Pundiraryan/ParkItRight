const mongoose = require('mongoose')

const PlaceSchema = new mongoose.Schema({
    owner : {type:mongoose.Schema.Types.ObjectId , ref:'User'},
    title : String , 
    address : String ,
    photos : [String] ,
    description : String ,
    perks : [String] , 
    extraInfo : String,
    checkIn : Number , 
    checkOut : Number , 
    maxGuests : Number,
    price : Number
})

const PlaceModel = mongoose.model('Place' , PlaceSchema)
// 2d  indexing for nearest 
// PlaceSchema.index({"location": "2dsphere"});
// location : {
//     type : {
//         type : String,
//         required : false,
//         default : "Point"
//     },
//     address : {
//         type : String
//     },
//     coordinates : {
//         type : [Number]
//     }
// }
module.exports = PlaceModel