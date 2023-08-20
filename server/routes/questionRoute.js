const express = require('express');
const { getQuestions, createQuestion, deleteQuestion } = require('../controller/questionController');
const router = express.Router();


router.get("/questions",getQuestions)
router.post("/questions",createQuestion)
router.delete("/questions",deleteQuestion)


exports.router = router;