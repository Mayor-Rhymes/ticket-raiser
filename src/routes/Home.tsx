import { TicketCard } from "@/components/TicketCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Filter, Plus } from "lucide-react";
// import { FormEvent, useState } from "react";
import { tickets, Ticket } from "@/lib/fakedata/tickets-data";
import { Outlet, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex gap-4 py-4 pl-2 items-center">
        <Button
          className={cn(
            "hover:text-white"
            // isAllTickets ? "bg-black text-white" : "bg-white text-black"
          )}
          onClick={() => navigate("/")}
        >
          All Tickets
        </Button>
        <Button
          className={cn(
            "hover:text-white"
            // isOpenTickets ? "bg-black text-white" : "bg-white text-black"
          )}
          onClick={() => navigate("/opentickets")}
        >
          Open Tickets
          {/* {tickets.filter((ticket) => ticket.status === "open").length}) */}
        </Button>

        <Button
          className={cn(
            "hover:text-white"
            // isPendingTickets ? "bg-black text-white" : "bg-white text-black"
          )}
          onClick={() => navigate("/pendingtickets")}
        >
          Pending Tickets
          {/* {tickets.filter((ticket) => ticket.status === "pending").length}) */}
        </Button>

        <Button
          className={cn(
            "hover:text-white"
            // isClosedTickets ? "bg-black text-white" : "bg-white text-black"
          )}
          onClick={() => navigate("/closedtickets")}
        >
          Closed Tickets
          {/* {tickets.filter((ticket) => ticket.status === "closed").length}) */}
        </Button>

        <Input placeholder="Search for a ticket" className="w-72" />

        <Button>Search</Button>
        <Filter className="cursor-pointer" />
      </div>

      <Outlet />
    </div>
  );
}
