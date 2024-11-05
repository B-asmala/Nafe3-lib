const product = require('./../models/productModel');    
const cats = require('./../utils/cats');

exports.getOverview = async(req, res, next) => {
    try {
        //const products =await product.find();
        const starred = await  product.find({star : true});
        
        res.status(200).render("overview", {
            title : "الرئيسية",
            starred
        });
        
    } catch (err) {
        console.log(err);
    }

}


exports.getCategory = async(req, res, next) => {
    try{
        const products = await product.find({category : { $in : req.params.cat}});
        res.status(200).render("category", {
            title : cats[req.params.cat],
            products
        });
    }catch{
        console.log(err);

    }
}


exports.getCart = async(req, res, next) => {
    try{
        
        res.status(200).render("cart");
    }catch{
        console.log(err);

    }
}