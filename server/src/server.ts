import http from 'http';

import 'express-async-errors';
import { appRoutes } from '@calendarService/routes';
import compression from 'compression';
import { Application, json, Request, Response, urlencoded } from 'express';
import helmet from 'helmet';
import hpp from 'hpp';
import { StatusCodes } from 'http-status-codes';
import cors from 'cors';

// import { config } from './config';

const SERVER_PORT = 4000;

const start = (app: Application): void => {
  securityMiddleware(app);
  standardMiddleware(app);
  routesMiddleware(app);
  usersErrorHandler(app);
  startServer(app);
};

const securityMiddleware = (app: Application): void => {
  app.set('trust proxy', 1);
  app.use(hpp());
  app.use(helmet());
  app.use(
    cors({
      origin: '*',
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
    })
  );
};

const standardMiddleware = (app: Application): void => {
  app.use(compression());
  app.use(json({ limit: '200mb' }));
  app.use(urlencoded({ extended: true, limit: '200mb' }));
};

const routesMiddleware = (app: Application): void => {
  appRoutes(app);
};

const usersErrorHandler = (app: Application): void => {
  app.use('*', (req: Request, res: Response) => {
    const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
    console.log('error', `${fullUrl} endpoint does not exist.`, '');
    res.status(StatusCodes.NOT_FOUND).json({ message: 'The endpoint called does not exist.' });
  });

  // app.use((error: IErrorResponse, _req: Request, res: Response, next: NextFunction) => {
  //   log.log('error', `UsersService ${error.comingFrom}:`, error);
  //   if (error instanceof CustomError) {
  //     res.status(error.statusCode).json(error.serializeErrors());
  //   }
  //   next();
  // });
};

const startServer = async (app: Application): Promise<void> => {
  try {
    const httpServer: http.Server = new http.Server(app);
    console.log(`doctor's calendar server has started with process id ${process.pid}`);
    httpServer.listen(SERVER_PORT, () => {
      console.log(`doctor's calendar server running on port ${SERVER_PORT}`);
    });
  } catch (error) {
    // eslint-disable-next-line quotes
    console.log('error', "doctor's calendar Service startServer() method error:", error);
  }
};

export { start };
