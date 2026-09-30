import { Response } from 'express';
import { statusCodes } from './status-codes';

interface IDataResp {
  res: Response;
  data?: unknown;
  message?: string;
}

interface IGeneralResp {
  code: number;
  data?: unknown;
  message?: string;
}

export const generalResp = ({message, code, data}: IGeneralResp) => {
  return {status: code,statusMsg: statusCodes[code], message, data};
};

export const successCreatedResp = ({res, data, message}: IDataResp) => {
  return res.status(201).json(generalResp({code: 201, data, message})
  );
};

export const successResp = ({res, data, message}: IDataResp) => {
  return res.status(200).json(generalResp({code: 200, data, message})
  );
};

export const badRequestResp = ({res, data, message}: IDataResp) => {
  return res.status(400).json(generalResp({code: 400, data, message})
  );
};

export const notFoundResp = ({res, data, message}: IDataResp) => {
  return res.status(404).json(generalResp({code: 404, data, message})
  );
};

export const serverErrorResp = ({res, data, message}: IDataResp) => {
  return res.status(500).json(generalResp({code: 500, data, message})
  );
};
