import { start } from '@calendarService/server';
import express, { Express } from 'express';
import { databaseConnection } from '@calendarService/database';

const initilize = (): void => {
  const app: Express = express();
  databaseConnection();
  start(app);
};

initilize();
