const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        }
        ,
        slug : {
            type : String,
            required : true,
            unique : true
        }
        ,
        category : {
            type : [String],
            default : ["other"]
        }
        ,
        price : {
            type : Number,
            required : true
        }
        ,
        discount : Number
        ,
        available : {
            type : Boolean,
            required : true,
            default : true
        },
        star : {
            type : Boolean,
            default : false
        }
        , 
        author : String,
        publisher : String
    }
);

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;