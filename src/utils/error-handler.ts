import { Response } from "express";
import { badRequestResp, serverErrorResp } from "./responses";
import mongoose from "mongoose";

export const errHandler = ({res, err}: {res: Response; err: unknown;}) => {
  console.error(err);
  if (res.headersSent) return;
  if (err instanceof mongoose.Error.CastError) {
    return badRequestResp({
      res,
      message: 'El id proporcionado no tiene un formato válido',
    });
  }
  return serverErrorResp({ res });
};