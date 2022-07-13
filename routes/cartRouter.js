const {
  addToCart,
  deleteCart,
  updateCart,
  getUserCart,
  getAllCarts,
} = require('../controllers/cartController');
const { verifyAdmin } = require('../middlewares/verifyAdmin');
const { verifyToken } = require('../middlewares/verifyToken');

const router = require('express').Router();

router.use(verifyToken);
router.post('/', addToCart);
router.put('/:id', updateCart);
router.delete('/:id', deleteCart);
router.get('/', getUserCart);

router.get('/getAllCarts', verifyAdmin, getAllCarts);

module.exports = router;
