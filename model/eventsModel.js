import { StatusCodes } from "http-status-codes"
import mongoose from "mongoose"

const eventsSchema = new mongoose.Schema({
    image: String,
    image_alt: String,
    title: String,
    sub: String,
    list: {
        numberOfSpeakers: String,
        location: String,
        attendees: String,
        miniTitle: String,
    },
    description: {
        one: String,
        two: String,
    },
    speakers: {
        name: String,
        status: String,
        occupation: String,
    },
    createdBy: {
        id: String,
        name: String,
        role: String,
    },
}, {
    timestamps: true,
});

const eventsModel = mongoose.model("events", eventsSchema);

export const events = {
    getAllEvents: async (req,res) => {
        const event = await eventsModel.find({});
        return event;     
    }
} 
