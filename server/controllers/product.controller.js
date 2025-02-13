//Setting up the API for performing CRUD operations on our products

//Importing the Product model
import Product from '../models/Product.js';

//Adding products to our database
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);

    res.status(201).json({
      status: 'success',
      message: `${product.name} saved successfully!`,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Getting a single product
const getProduct = async (req, res) => {
  try {
    //Getting a sinle product by its id
    const { id } = req.params;

    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Exporting the endpoints
export { createProduct,getProduct };
