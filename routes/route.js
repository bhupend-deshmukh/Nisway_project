const express = require("express");
const router = express.Router();

const { getAllData ,get_data_by_id} = require("../controllers/controller");

router.get("/", getAllData);
router.get("/:id",get_data_by_id)

module.exports = router;
