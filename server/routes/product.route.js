//Setting up the routes
import express from 'express';

import {
  createProduct,
  getProduct,
  getProducts,
} from '../controllers/product.controller.js';

const router = express.Router();

//Route for adding/creatin g a product
router.post('/', createProduct);

//Router for getting one product
router.get('/:id', getProduct);

//Router for getting all products
router.get('/', getProducts);

export default router;
