const mongoose = require('mongoose')

const ProductSchema =new mongoose.Schema({
  p_id:Number,
  p_name:String,
  p_cost:Number
})

module.exports= mongoose.model("Product",ProductSchema)