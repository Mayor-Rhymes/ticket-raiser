import { z } from "zod";
import { ticketSchema } from "../schemas/ticketSchema";

export type Ticket = z.infer<typeof ticketSchema>;

export const tickets: Ticket[] = [
  {
    id: "id1",
    authorId: "egx67",
    title: "My mouse is no longer",
    description: "My mouse stopped working on sunday.",
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "id2",
    authorId: "egx67",
    title: "My monitor's fans are clogged",
    description: "I suspect the monitor's fans are clogged up because it is starting to make weird sounds and no longer works as well as expected",
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "id3",
    authorId: "egx9012",
    title: "My deskphone mic is no longer working",
    description: "People cannot hear me but I can hear them clearly. Please help.",
    status: "open",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "id4",
    authorId: "egx81",
    title: "My CUG Phone battery is dead",
    description: "CUG battery is dead",
    status: "closed",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "id5",
    authorId: "egx9012",
    title: "Outlook is not responding",
    description: "Outlook is not responding",
    status: "pending",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
