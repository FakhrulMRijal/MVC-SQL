const express = require("express");
const postsController = require("../controllers/postController");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post('/',checkAuthMiddleware.checkAuth, postsController.save);
router.get('/:id', postsController.show);
router.get('/', postsController.showAll);
router.patch('/:id', checkAuthMiddleware.checkAuth, postsController.update);
router.delete('/:id', checkAuthMiddleware.checkAuth, postsController.destroy);


module.exports = router;