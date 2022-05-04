const express = require("express");
const router = express.Router();
const upload = require('./storage.config');

const authMiddleware = require('../middlewares/auth.middleware')
const usersController = require('../controllers/users.controller');
const authController = require('../controllers/auth.controller');
const reviewsController = require('../controllers/reviews.controller')


router.get('/', (req, res, next) => {
  res.status(200).json({ ok: true })
});


/* Auth */
router.post('/login', authMiddleware.isNotAuthenticated, authController.login);


/* Users */
router.post('/users', upload.single('image'), authController.create);
router.get('/users/me', authMiddleware.isAuthenticated, usersController.getCurrentUser)
router.get('/users/:id', usersController.getUserById);


/* Reviews */

router.post('/review/new', reviewsController.create)
router.get('/review/:id', reviewsController.detail)
router.patch('/review/:id', reviewsController.update)
router.delete('/review/:id', reviewsController.delete)

module.exports = router;