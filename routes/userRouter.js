const { updateUser } = require('../controllers/userController');
const { verifyToken } = require('../middlewares/verifyToken');

const router = require('express').Router();

router.put('/:id', verifyToken, updateUser);
module.exports = router;
