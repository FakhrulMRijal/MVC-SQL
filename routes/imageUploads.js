const express = require("express");
const imageUploadsController = require("../controllers/imageController");
const imageUploader = require("../helpers/image-uploader");
const checkAuthMiddleware = require("../middleware/check-auth");
const router = express.Router();

router.post('/', checkAuthMiddleware.checkAuth, imageUploader.upload.single('image'), imageUploadsController.uploadImage);

module.exports = router