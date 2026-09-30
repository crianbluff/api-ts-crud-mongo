import { Request, Response } from "express";
import { data } from "./database";
import { generateUUID, validationId } from "./validation";
import { notFoundResp, successResp, successCreatedResp } from "./responses";
import { errHandler } from "./error-handler";

export const getAll = (_: Request, res: Response) => {
  try {
    return successResp({res, data});
  } catch (err) {
      return errHandler({res, err});
    }
}

export const createUser = (req: Request, res: Response) => {
  try {
    const { name, age } = req.body;
    data.push({name, age, id: generateUUID()});
    return successCreatedResp({res, message: `El usuario ${name} ha sido agregado correctamente!`});
  } catch (err) {
      return errHandler({res, err});
    }
}

export const getById = (req: Request, res: Response) => { 
  try {
    const { id } = req.params;
    if (!validationId(id, res)) return;

    const userFound = data.find(usr => usr.id === id);
    if (!userFound) return notFoundResp({res, message: `El usuario ${id} no ha sido encontrado`});
    return successResp({res, data: userFound});
  } catch (err) {
      return errHandler({res, err});
    }
}

export const updateUser = (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, age } = req.body;

    if (!validationId(id, res)) return;
    
    const index = data.findIndex(usr => usr.id === id);

    if (index === -1) {
      return notFoundResp({
        res,
        message: `El usuario ${id} no ha sido encontrado`
      });
    }

    data[index] = {
      ...data[index],
      name,
      age
    };

    return successResp({res, message: `El usuario ${name} ha sido actualizado satisfactoriamente`, data: data[index]});
  } catch (err) {
      return errHandler({ res, err });
    }
};


export const removeById = (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!validationId(id, res)) return;

    const index = data.findIndex(usr => usr.id === id);
    if (index === -1) return notFoundResp({res, message: `El usuario ${id} no ha sido encontrado`});

    const [user] = data.splice(index, 1);

    return successResp({
      res,
      message: `El usuario ${user.name} ha sido eliminado satisfactoriamente`
    });
  } catch (err) {
      return errHandler({ res, err });
    }
};
