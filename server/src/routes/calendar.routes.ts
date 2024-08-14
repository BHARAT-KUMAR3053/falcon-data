import { createEventController, readEventController } from '@calendarService/controllers/calendar/get';
import express, { Router } from 'express';

const router: Router = express.Router();

const calendarRoutes = (): Router => {
  router.post('', createEventController);
  router.get('', readEventController);
  return router;
};

export { calendarRoutes };
