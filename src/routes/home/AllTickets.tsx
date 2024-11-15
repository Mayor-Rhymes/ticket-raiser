import { Ticket, TicketCard } from "@/components/TicketCard";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AllTickets() {
  const navigate = useNavigate();

  const { isPending, data, error } = useQuery({
    queryKey: ["ticketData"],
    queryFn: () =>
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/tickets`, {
          withCredentials: true,
        })
        .then((res) => res.data),
  });

  if (data?.results?.length > 0) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 ">
        {data?.results?.map((ticket: Ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="flex mt-60 flex-col items-center gap-10">
        <p className="text-6xl drop-shadow-lg">Empty Ticket</p>
        <p>You have no tickets</p>
        <Button
          onClick={() => navigate("/create-ticket")}
          className={cn("rounded-3xl py-6")}
        >
          <Plus size={40} /> Create One
        </Button>
      </div>
    );
  }
}
