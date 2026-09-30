import { Request, Response } from 'express';
import { notFoundResp, successResp, successCreatedResp,} from '../utils/responses';
import { errHandler } from '../utils/error-handler';
import { User } from '../models/user.model';

export const getAll = async (_: Request, res: Response) => {
  try {
    const users = await User.find();
    return successResp({res, data: users,});
  } catch (err) {
    return errHandler({ res, err });
  }
};

export const createUser = async (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    const user = await User.create({name, age});
    
    return successCreatedResp({res, message: `El usuario ${name} ha sido agregado correctamente!`,data: user});
  } catch (err) {
    return errHandler({ res, err });
  }
};

export const getById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);

    if (!user) return notFoundResp({res, message: `El usuario ${id} no ha sido encontrado`});

    return successResp({res, data: user,});
  } catch (err) {
    return errHandler({ res, err });
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;
    
    const user = await User.findByIdAndUpdate(id, { name, age }, {new: true, runValidators: true,});
    if (!user) return notFoundResp({res, message: `El usuario ${id} no ha sido encontrado`});
    
    return successResp({res, message: `El usuario ${user.name} ha sido actualizado satisfactoriamente`, data: user});
  } catch (err) {
    return errHandler({ res, err });
  }
};

export const removeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const user = await User.findByIdAndDelete(id);
    if (!user) return notFoundResp({res, message: `El usuario ${id} no ha sido encontrado`});

    return successResp({res, message: `El usuario ${user.name} ha sido eliminado satisfactoriamente`});
  } catch (err) {
    return errHandler({ res, err });
  }
};
