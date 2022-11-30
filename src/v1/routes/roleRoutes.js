const express =  require('express');
const router = express.Router();
const roleController = require("../../controllers/roleController");

router
    .get("/:id", roleController.verifyRole)
    .post("/", roleController.verifyRole)

module.exports = router;