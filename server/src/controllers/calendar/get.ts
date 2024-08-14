import { dateSchema, eventSchema } from '@calendarService/schemes/calendar.validationschema';
import { createEventService, readEventService } from '@calendarService/services/calendar.service';
import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const createEventController = async (req: Request, res: Response): Promise<void> => {
  const { error } = eventSchema.validate(req.body);

  if (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.details[0].message });
  }
  try {
    await createEventService(req.body);
    res.status(StatusCodes.OK).json({ message: 'event created successfully' });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'error creating event' });
  }
};

const readEventController = async (req: Request, res: Response): Promise<void> => {
  const { error } = dateSchema.validate(req.query);

  if (error) {
    res.status(StatusCodes.BAD_REQUEST).json({ message: error.details[0].message });
  }
  const { from, to } = req.query;
  try {
    const result = await readEventService(from as unknown as string, to as unknown as string);
    res.status(StatusCodes.OK).json({ message: 'read operation successful', data: result });
  } catch (error) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: 'error reading the event data' });
  }
};

export { createEventController, readEventController };
