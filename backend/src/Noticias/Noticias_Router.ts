import {Router} from 'express';
const router = Router();

const {Listar} = require('./Noticias_Controller');

router.get('/listar', Listar);

module.exports = router;
