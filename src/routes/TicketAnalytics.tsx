import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { tickets } from "@/lib/fakedata/tickets-data";
import { Loader, LockKeyhole, LockOpen, Ticket } from "lucide-react";


export default function TicketAnalytics() {
  return (
    <div className="pt-10">
      <div className={cn("flex justify-evenly")}>
        <Card className="flex flex-col gap-3 items-center p-10 shadow-lg">
          <Ticket />
          <p className="text-2xl font-extrabold">All Tickets</p>
          <p>{tickets.length}</p>
        </Card>
        <Card className="flex flex-col gap-3 items-center p-10 shadow-lg">
          <LockOpen />
          <p className="text-2xl font-extrabold">Open Tickets</p>
          <p>{tickets.filter((ticket) => ticket.status === "open").length}</p>
        </Card>
        <Card className="flex flex-col gap-3 items-center p-10 shadow-lg">
          <LockKeyhole />
          <p className="text-2xl font-extrabold">Closed Tickets</p>
          <p>{tickets.filter((ticket) => ticket.status === "closed").length}</p>
        </Card>
        <Card className="flex flex-col gap-3 items-center p-10 shadow-lg">
          <Loader />
          <p className="text-2xl font-extrabold">Pending Tickets</p>
          <p>
            {tickets.filter((ticket) => ticket.status === "pending").length}
          </p>
        </Card>
      </div>
    </div>
  );
}
