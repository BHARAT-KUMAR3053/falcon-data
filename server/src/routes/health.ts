import { health } from '@calendarService/controllers/health';
import express, { Router } from 'express';

const router: Router = express.Router();

const healthRoutes = (): Router => {
  router.get('', health);

  return router;
};

export { healthRoutes };
