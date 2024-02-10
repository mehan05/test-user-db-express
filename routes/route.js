const express = require('express');
const router = express.Router();
const {createuser,getalluser,getuser,updateuser,deleteuser,} = require('../controllers/control')
router.route('/')
.get(getalluser)
.post(createuser)

router.route('/:id')
.patch(updateuser)
.delete(deleteuser)
.get(getuser);


module.exports = router;