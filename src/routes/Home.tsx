import { TicketCard } from "@/components/TicketCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Filter, Plus } from "lucide-react";
import { FormEvent, useState } from "react";
import { tickets, Ticket } from "@/lib/fakedata/tickets-data";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const { isPending, data, error } = useQuery({
    queryKey: ["ticketData"],
    queryFn: () => axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/tickets`).then((res) => res.data),
  });
  const [isAllTickets, setIsAllTickets] = useState(true);
  const [isOpenTickets, setIsOpenTickets] = useState(false);
  const [isPendingTickets, setIsPendingTickets] = useState(false);
  const [isClosedTickets, setIsClosedTickets] = useState(false);
  const [ticketState, setTicketState] = useState<Ticket[]>(tickets);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleAllTickets = () => {
    if (ticketState.length > 0) {
      setIsAllTickets(true);
      setIsOpenTickets(false);
      setIsPendingTickets(false);
      setIsClosedTickets(false);
      setTicketState(tickets);
    }
  };
  const handleOpenTickets = () => {
    if (ticketState.length > 0) {
      setIsAllTickets(false);
      setIsOpenTickets(true);
      setIsPendingTickets(false);
      setIsClosedTickets(false);
      setTicketState(tickets.filter((ticket) => ticket.status === "open"));
    }
  };
  const handleClosedTickets = () => {
    if (ticketState.length > 0) {
      setIsAllTickets(false);
      setIsOpenTickets(false);
      setIsPendingTickets(false);
      setIsClosedTickets(true);
      setTicketState(tickets.filter((ticket) => ticket.status === "closed"));
    }
  };
  const handlePendingTickets = () => {
    if (ticketState.length > 0) {
      setIsAllTickets(false);
      setIsOpenTickets(false);
      setIsPendingTickets(true);
      setIsClosedTickets(false);
      setTicketState(tickets.filter((ticket) => ticket.status === "pending"));
    }
  };

  const handleSearch = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchTerm = e.currentTarget.value.toLowerCase();
    setSearch(searchTerm);

    if (searchTerm === "") {
      setTicketState(tickets);
      return;
    }

    let filteredTickets = ticketState;

    if (isOpenTickets) {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.status === "open"
      );
    } else if (isPendingTickets) {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.status === "pending"
      );
    } else if (isClosedTickets) {
      filteredTickets = filteredTickets.filter(
        (ticket) => ticket.status === "closed"
      );
    }

    filteredTickets = filteredTickets.filter(
      (ticket) =>
        ticket.title.toLowerCase().includes(searchTerm) ||
        ticket.description.toLowerCase().includes(searchTerm)
    );

    setTicketState(filteredTickets);
    console.log(filteredTickets);
  };

  const check = () => {
    console.log(ticketState);
  };


  console.log(data);
  // console.log(import.meta.env.VITE_BACKEND_URL);

  return (
    <div>
      <div className="flex gap-4 py-4 pl-2 items-center">
        <Button
          className={cn(
            "hover:text-white",
            isAllTickets ? "bg-black text-white" : "bg-white text-black"
          )}
          onClick={handleAllTickets}
        >
          All Tickets ({tickets.length})
        </Button>
        <Button
          className={cn(
            "hover:text-white",
            isOpenTickets ? "bg-black text-white" : "bg-white text-black"
          )}
          onClick={handleOpenTickets}
        >
          Open Tickets (
          {tickets.filter((ticket) => ticket.status === "open").length})
        </Button>

        <Button
          className={cn(
            "hover:text-white",
            isPendingTickets ? "bg-black text-white" : "bg-white text-black"
          )}
          onClick={handlePendingTickets}
        >
          Pending Tickets (
          {tickets.filter((ticket) => ticket.status === "pending").length})
        </Button>

        <Button
          className={cn(
            "hover:text-white",
            isClosedTickets ? "bg-black text-white" : "bg-white text-black"
          )}
          onClick={handleClosedTickets}
        >
          Closed Tickets (
          {tickets.filter((ticket) => ticket.status === "closed").length})
        </Button>

        <Input
          placeholder="Search for a ticket"
          className="w-72"
          value={search}
          onChange={handleSearch}
        />

        <Button onClick={check}>Search</Button>
        <Filter className="cursor-pointer" />
      </div>

      {ticketState.length > 0 ? (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 p-4 ">
          {ticketState.map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} />
          ))}
        </div>
      ) : (
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
      )}
    </div>
  );
}
