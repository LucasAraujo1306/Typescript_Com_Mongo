import { Router } from 'express';

import * as HomeController from '../controllers/homeController';
import * as InfoController from '../controllers/infoController';
import * as UserController from '../controllers/userController';

const router = Router();

router.get('/', HomeController.home);

router.get('/contato', InfoController.contato);
router.get('/sobre', InfoController.sobre);

router.get('/nome', UserController.nome);
router.get('/idade', UserController.idadeForm);
router.post('/idade-resultado', UserController.idadeAction);

router.post('/cadastrar-usuario', UserController.registrarUsuario);

router.get('/usuario/:id/addidade', UserController.addIdade)
router.get('/usuario/:id/dimidade', UserController.diminuiridade)
router.post('/usuario/:id/excluir', UserController.excluirUsuario)

export default router;