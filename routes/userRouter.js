const { updateUser, deleteUser } = require('../controllers/userController');
const { verifyAdmin } = require('../middlewares/verifyAdmin');
const { verifyToken } = require('../middlewares/verifyToken');

const router = require('express').Router();

router.put('/:id', verifyToken, updateUser);
router.delete('/:id', verifyToken, verifyAdmin, deleteUser);
module.exports = router;
