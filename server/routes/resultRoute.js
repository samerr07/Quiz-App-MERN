const express = require('express');
const { getResult, storeResult, dropResult } = require('../controller/resultController');
const router = express.Router();


router.get("/result",getResult)
router.post("/result",storeResult)
router.delete("/result",dropResult)


exports.router = router;