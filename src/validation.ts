import { Response } from 'express';
import { badRequestResp } from './responses';
import crypto from 'crypto';

export const validationId = (id: any, res: Response): boolean => {
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

  if (!uuidRegex.test(id)) {
    badRequestResp({res, message: 'El id no tiene un formato UUID válido'});
    return false;
  }

  return true;
};

type uuid = `${string}-${string}-${string}-${string}-${string}`;
export const generateUUID = (): uuid => crypto.randomUUID();
