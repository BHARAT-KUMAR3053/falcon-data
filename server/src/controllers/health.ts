import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const health = (_req: Request, res: Response): void => {
  // eslint-disable-next-line quotes
  res.status(StatusCodes.OK).send("doctor's calendar service is healthy and OK.");
};

export { health };
