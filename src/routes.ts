import { Router } from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.post('/orphanages', OrphanagesController.create);
routes.get('/orphanages', OrphanagesController.index);

export default routes;