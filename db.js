const monggose = require("mongoose")
require("dotenv").config()

const connection = monggose.connect(process.env.mongoURL)

const proSchema = monggose.Schema({
    title: {type:String},
    image: {type:String},
    category:{type:String},
    description:{type:String},
    price:{type:Number},
    id: {type:String},
})

const productModle = monggose.model("Aman_gearbreks_data",proSchema)

module.exports={connection,productModle}