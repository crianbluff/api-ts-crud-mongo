import Router from 'express';
import { createUser, getAll, getById, removeById, updateUser } from './products.controller';

export const appRouter = Router();

appRouter.get('/', getAll);

appRouter.get('/:id', getById);

appRouter.post('/', createUser);

appRouter.put('/:id', updateUser);

appRouter.delete('/:id', removeById);
