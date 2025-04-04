import {events} from '../model/eventsModel.js';
import { StatusCodes } from 'http-status-codes';
export const eventsController = {
    allEvents: async (req,res) => {
        const event = await events.getAllEvents();
        res.status(StatusCodes.OK).json({event});
    },
    createEvent: async (req,res) => {
        
    }
}