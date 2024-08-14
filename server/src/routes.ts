import { healthRoutes } from '@calendarService/routes/health';
import { Application } from 'express';

import { calendarRoutes } from './routes/calendar.routes';

const appRoutes = (app: Application): void => {
  app.use('/health', healthRoutes());
  app.use('/calendar', calendarRoutes());
};

export { appRoutes };
