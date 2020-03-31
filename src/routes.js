import UserController from './app/controllers/UserController';

import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const { Router } = require('express');

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);
// apenas as rotas a seguir passam por esse
// middleware de verificação de autenticação

routes.put('/users', UserController.update);

export default routes;
