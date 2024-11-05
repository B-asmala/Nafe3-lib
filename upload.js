const dotenv = require('dotenv');
const mongoose = require('mongoose');
const productModel = require('./models/productModel');
const fs = require('fs');

dotenv.config({ path: './config.env' });

const uri = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(uri, {
    dbName : "shop"
  })
  .then(() => console.log('DB connection successful!'));

const products = JSON.parse(
    fs.readFileSync(`${__dirname}/data.json`, 'utf-8')
  );



const uploadData = async () => {
  try {
    await productModel.create(products);
    console.log('Data successfully uploaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
    try {
      await productModel.deleteMany();
      console.log('Data successfully deleted!');
    } catch (err) {
      console.log(err);
    }
    process.exit();
  };
  
//uploadData();
//deleteData();