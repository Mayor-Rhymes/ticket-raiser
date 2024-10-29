import { BarChart, Bell, CreativeCommons, PlusCircle, Ticket, User } from "lucide-react";
import bvtlogo from "../assets/bvtlogo.png";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  return (
    <nav className="flex h-20 items-center bg-backgroundGrey px-3 text-sm">
      <img src={bvtlogo} alt="bvt-logo" className="w-32 h-12" />
      <ul className="flex list-none grow-[2] justify-evenly">
        <li>
          <Link
            to="/"
            className={cn(
              "flex gap-2 text-black items-center bg-white py-2 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-100 delay-100"
            )}
          >
            <Ticket size={25} />
            <span>Your Tickets</span>
          </Link>
        </li>
        <li>
          <Link
            to="/create-ticket"
            className={cn(
              "flex gap-2 text-black items-center bg-white py-2 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-100 delay-100"
            )}
          >
            <PlusCircle size={25} />
            <span>Create a ticket</span>
          </Link>
        </li>
        <li>
          <Link
            to="/ticket-analytics"
            className={cn(
              "flex gap-2 text-black items-center bg-white py-2 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-100 delay-100"
            )}
          >
            <BarChart size={25} />
            <span>Your Ticket Analytics</span>
          </Link>
        </li>
      </ul>

      <ul className="flex list-none justify-evenly gap-4">
        <li>
          <Link
            to="/notifications"
            className={cn(
              "flex gap-2 text-black items-center bg-white py-2 px-3 rounded-full hover:bg-black hover:text-white transition-all duration-100 delay-100"
            )}
          >
            <Bell size={25} />
          </Link>
        </li>
        <li>
          <Link
            to="/account"
            className={cn(
              "flex gap-2 text-black items-center bg-white py-2 px-3 rounded-full hover:bg-slate-200 transition-all duration-100 delay-100"
            )}
          >
            <User size={25} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};
