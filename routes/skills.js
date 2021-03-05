var express = require('express');
var router = express.Router();
const SkillsCtrl =require('../controllers/skills')
/* GET users listing. */

router.get('/', SkillsCtrl.index);
router.get('/new', SkillsCtrl.new);
router.get('/:id', SkillsCtrl.show);
router.post('/', SkillsCtrl.create);
router.delete('/:id', SkillsCtrl.delete);


module.exports = router;
