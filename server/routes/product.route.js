//Setting up the routes
import express from 'express';

import {
  createProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} from '../controllers/product.controller.js';

const router = express.Router();

//Route for adding/creatin g a product
router.post('/', createProduct);

//Route for getting one product
router.get('/:id', getProduct);

//Route for getting all products
router.get('/', getProducts);

//Route for updating a product
router.patch('/:id', updateProduct);

//Route for deleting a product
router.delete('/:id', deleteProduct);

export default router;
