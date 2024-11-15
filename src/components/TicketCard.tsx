import { z } from "zod";
import { Card, CardContent } from "./ui/card";
import { ticketSchema } from "@/lib/schemas/ticketSchema";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { DeleteIcon, EllipsisVertical, Telescope, Trash } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UpdateIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

export type Ticket = z.infer<typeof ticketSchema>;

interface TicketCardProps {
  ticket: Ticket;
}

export const TicketCard = ({ ticket }: TicketCardProps) => {
  return (
    <Card
      className={cn(
        "pt-4 pb-4 text-md text-white bg-black rounded-[30px]",
        ticket.status === "closed" && "bg-gray-600 text-white",
        ticket.status === "pending" && "bg-yellow-500 text-black"
      )}
    >
      <CardContent className="flex flex-col gap-3 text-sm">
        <div className="flex justify-end">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <EllipsisVertical size={15} className="cursor-pointer" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className={cn("bg-black text-white")}>
              <DropdownMenuLabel>Options</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <UpdateIcon />
                <span>Update</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash fill="red" color="red" />
                <span>Delete</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Telescope />
                <Link to="/explore" className="text-white hover:text-black"><span>Explore</span></Link>
              </DropdownMenuItem>
              
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex gap-2">
          <p>Title:</p> <span className="text-sm">{ticket.title}</span>
        </div>
        <div className="flex gap-2">
          Description: <span>{ticket.description}</span>
        </div>
        <div className="flex gap-2">
          <p>Status:</p>
          <Badge
            variant={
              ticket.status === "open"
                ? "lively"
                : ticket.status === "pending"
                ? "amber"
                : "default"
            }
            className={cn(
              "rounded-sm text-black",
              ticket.status === "closed" && "text-white"
            )}
          >
            {ticket.status}
          </Badge>
        </div>
        <div className="flex gap-2">
          <p>Creation Date:</p> <span>{new Date(ticket.created_at).toDateString()}</span>
        </div>
        <div className="flex gap-2">
          <p>Last Updated At:</p> <span>{new Date(ticket.updated_at).toDateString()}</span>
        </div>

        {/* <Button
          variant={
            ticket.status === "open"
              ? "secondary"
              : ticket.status === "closed"
              ? "cool"
              : "default"
          }
          className={cn()}
        >
          Update
        </Button> */}
      </CardContent>
    </Card>
  );
};
