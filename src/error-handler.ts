import { Response } from "express";
import { serverErrorResp } from "./responses";

export const errHandler = ({res, err}: {res: Response; err: unknown;}) => {
  console.error(err);
  if (res.headersSent) return;
  return serverErrorResp({ res });
};