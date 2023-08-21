const express = require("express");
const router = express.Router();
const controller = require("../controller/controller");

// Questions route api
router.get('/questions', controller.getQuestion);
router.post('/questions',controller.insertQuestion);

router.route('/questions').get(controller.getQuestion)
.post(controller.insertQuestion)
.delete(controller.deleteQuestion)


router.route('/result').get(controller.getResult)
.post(controller.storeResult)
.delete(controller.deleteResult)










module.exports = router;



