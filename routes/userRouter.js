const {
  updateUser,
  deleteUser,
  getUser,
  getAllUser,
  getUserStats,
} = require('../controllers/userController');
const { verifyAdmin } = require('../middlewares/verifyAdmin');
const { verifyToken } = require('../middlewares/verifyToken');

const router = require('express').Router();

router.get('/stats', verifyToken, verifyAdmin, getUserStats);
router.get('/', verifyToken, verifyAdmin, getAllUser);
router.get('/:id', verifyToken, verifyAdmin, getUser);
router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, verifyAdmin, deleteUser);
module.exports = router;
