const {
  addProduct,
  deleteProduct,
  getProduct,
  getProducts,
  updateProduct,
} = require('../controllers/productController');
const { verifyAdmin } = require('../middlewares/verifyAdmin');
const { verifyToken } = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/:id', getProduct);
router.get('/', getProducts);

router.use(verifyToken, verifyAdmin);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
