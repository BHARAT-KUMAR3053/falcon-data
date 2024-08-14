import { Calendar } from '@calendarService/models/calendar.schema';
import { Op } from 'sequelize';

export const createEventService = async (details: {
  name: string;
  phoneNumber: number;
  email: string;
  description: string;
  date: string;
}) => {
  try {
    const { name, phoneNumber, email, description, date } = details;
    const event = await Calendar.create({ name, phoneNumber, email, description, date });
    return event;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const readEventService = async (from: string, to: string) => {
  const startDate = new Date(from);
  const endDate = new Date(to);
  try {
    const events = await await Calendar.findAll({
      where: {
        date: {
          [Op.between]: [startDate, endDate]
        }
      }
    });
    return events;
  } catch (error) {
    console.log(error);
  }
};
