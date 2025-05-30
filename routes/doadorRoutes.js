const express = require('express');
const router = express.Router();
const doadorController = require('../controllers/doadorController');

router.get('/', doadorController.getAllDoador);
router.get('/:id', doadorController.getDoador);
router.post('/register', doadorController.createDoador);
router.put('/:id', doadorController.updateDoador);
router.delete('/:id', doadorController.deleteDoador);

module.exports = router;