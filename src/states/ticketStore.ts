import { create } from "zustand";

import { ticketSchema } from "@/lib/schemas/ticketSchema";
import { z } from "zod";
import { tickets } from "@/lib/fakedata/tickets-data";

type Ticket = z.infer<typeof ticketSchema>;

interface TicketState {
  tickets: Ticket[];
  addTicket: (ticket: Ticket) => void;
  deleteTicket: (id: string) => void;
  // editTicket: (id: string, ticket: Ticket) => void;
}

export const useTicketStore = create<TicketState>()((set) => ({
  tickets: [],
  addTicket: (ticket) =>
    set((state) => ({
      tickets: [...state.tickets, ticket],
    })),
  deleteTicket: (id) =>
    set(() => {
      const newTickets = tickets.filter((ticket) => ticket.id !== id);

      return {
        tickets: newTickets,
      };
    }),
  // // editTicket: (id, ticket) => set((state) => {
  // //     // const otherTickets = tickets.filter(ticket => ticket.id !== id);
  // //     const otherTickets = state.tickets;
  // //     let ticketToEdit = tickets.find(ticket => ticket.id === id);

  // //     const ticketToEditIndex = otherTickets.indexOf(ticketToEdit!);
  // //     otherTickets[ticketToEditIndex] = {...ticket};

  // })
}));
