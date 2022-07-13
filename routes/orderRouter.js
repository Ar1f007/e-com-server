const {
  addOrder,
  updateOrder,
  getUserOrders,
  deleteOrder,
  getMonthlyIncome,
} = require('../controllers/orderController');
const { verifyAdmin } = require('../middlewares/verifyAdmin');
const { verifyToken } = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/monthlyIncome', verifyToken, verifyAdmin, getMonthlyIncome);

router.use(verifyToken);
router.post('/', addOrder);
router.put('/:id', verifyAdmin, updateOrder);
router.delete('/:id', deleteOrder);
router.get('/:userId', getUserOrders);

module.exports = router;
